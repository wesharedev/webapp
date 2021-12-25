import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { detectAnyAdblocker } from 'just-detect-adblock'

import styles from './styles'
import { APIs } from '~/config'
import { sleep } from '~/services/Utils'
import { useQuery, useStores } from '~/hooks'
import FirstTip from '~/images/first_tip.png'
import SecondTip from '~/images/second_tip.png'
import AdBlockImage from '~/images/ad_block.png'
import Grid from '~/components/Grid'
import Cell from '~/components/Cell'
import Typography from '~/components/Typography'
import LinearProgress from '~/components/LinearProgress'
import Button from '~/components/Button'

const useStyles = makeStyles(styles)

const AdBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.adBlockContainer}>
      <img
        className={classes.adBlockImage}
        src={AdBlockImage}
      />
      <Typography variant="headline2" className={classes.adBlockMessage}>
        Hãy tắt trình chặn quảng cáo và tải lại trang để có thể quyên góp nhé!
      </Typography>
      <div>
        <Button onClick={() => window.location.reload()}>
          Tải lại trang
        </Button>
      </div>
      <div>
        <Button variant="text" href="/">
          Tiếp tục mua sắm
        </Button>
      </div>
    </div>
  )
}

const NavigateContent = () => {
  const classes = useStyles()
  const history = useHistory()
  const { userStore } = useStores()

  const query = useQuery()
  const [merchant, setMerchant] = useState({})
  const [link, setLink] = useState('')
  const [progress, setProgress] = useState(0)

  const merchantId = query.get('merchant_id')

  useEffect(() => {
    const getMerchant = async () => {
      const response = await APIs.getMerchant({ id: merchantId })
      if (response.ok) setMerchant(response.data.data)
    }

    const getLink = async () => {
      const response = await APIs.getLink({
        merchant_id: merchantId,
        organization_id: userStore.user.default_organization_id,
      })
      if (response.ok) setLink(response.data.data.url)
    }

    if (merchantId && userStore.user) {
      getMerchant()
      getLink()
    } else history.replace('/')
  }, [merchantId, userStore.user])

  useEffect(() => {
    const load = async () => {
      const duration = 2000
      const chunks = 5

      for (let i = 0; i < chunks; i++) {
        setProgress((old) => old + duration / chunks / duration * 100)
        await sleep(duration / chunks)
      }
    }

    load()
  }, [])

  useEffect(() => {
    if (progress === 100 && link) {
      window.location.href = link
    }
  }, [progress, link])

  return (
    <Grid spacing={5}>
      <Cell className={classes.alignCenter}>
        <Typography variant="headline2">
          Bạn đang được chuyển đến
        </Typography>
        <div className={classes.logoContainer}>
          <img
            src={merchant.logo}
            className={classes.logo}
          />
        </div>
        <div className={classes.progressContainer}>
          <LinearProgress
            variant="determinate"
            value={progress}
            height={16}
          />
        </div>
      </Cell>
      <Cell md={6} sm={12}>
        <img
          src={FirstTip}
          className={classes.tipImage}
        />
      </Cell>
      <Cell md={6} sm={12}>
        <img
          src={SecondTip}
          className={classes.tipImage}
        />
      </Cell>
      <Cell className={classes.alignCenter}>
        <Button
          variant="text"
          endIcon={<Icon color="primary">arrow_forward</Icon>}
          loading={!link}
          href={link}
        >
          Chuyển ngay
        </Button>
      </Cell>
    </Grid>
  )
}

const LoadingNavigation = () => {
  const classes = useStyles()
  const [ready, setReady] = useState(false)
  const [adBlock, setAdBlock] = useState(false)

  useEffect(() => {
    const load = async () => {
      const ad = await detectAnyAdblocker()
      setAdBlock(ad)
      setReady(true)
    }

    load()
  }, [])

  if (!ready) return null

  return (
    <div className={classes.background}>
      <div className={classes.mainContainer}>
        {adBlock ? (
          <AdBlock />
        ) : (
          <NavigateContent />
        )}
      </div>
    </div>
  )
}

export default LoadingNavigation
