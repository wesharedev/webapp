import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { makeStyles } from '@material-ui/styles'
import cx from 'classname'
import { useIntl } from 'react-intl'

import HandsWithHeart from '~/images/hands_with_heart.png'
import { useStores } from '~/hooks'
import styles from './styles'
const useStyles = makeStyles(styles)
import { APIs } from '~/config'

import Dialog from '~/components/Dialog'
import Grid from '~/components/Grid'
import Cell from '~/components/Cell'
import Typography from '~/components/Typography'
import Button from '~/components/Button'

const Item = ({ onSelect, selected, organization }) => {
  const classes = useStyles()
  return (
    <div
      className={cx({
        [classes.itemContainer]: true,
        [classes.selected]: selected,
      })}
      onClick={onSelect}
    >
      <Grid spacing={2} alignItems="center">
        <Cell md={3} xs={5}>
          <img
            src={organization.logo}
            width={104}
            height={104}
          />
        </Cell>
        <Cell md={9} xs={7}>
          <Typography variant="headline3">{organization.name}</Typography>
          <Typography variant="caption" className={classes.description}>
            {organization.description}
          </Typography>
        </Cell>
      </Grid>
    </div>
  )
}

const OrganizationBlocker = () => {
  const { userStore, notificationStore } = useStores()
  const intl = useIntl()

  const [organizations, setOrganizations] = useState([])
  const [selected, setSelected] = useState(-1)

  useEffect(() => {
    const load = async () => {
      const response = await APIs.getOrganizations({ limit: 100 })
      if (!response.ok) return
      setOrganizations(response.data.data.organizations)
    }
    load()
  }, [])

  const onSubmit = async () => {
    if (selected === -1) return
    const response = await APIs.setDefaultOrganization({
      default_organization_id: selected,
    })
    if (!response.ok) return

    const { default_organization_id, organization } = response.data.data
    userStore.setUser({
      ...userStore.user,
      default_organization_id,
      organization,
    })

    notificationStore.snack(intl.formatMessage({
      id: 'home.selectDefaultOrgSuccess',
    }, { name: organization.name }))
  }

  return (
    <Dialog
      icon={HandsWithHeart}
      open={!!userStore.user && !userStore.user.default_organization_id}
      title="Chọn một tổ chức để quyên góp"
      subtitle="Số tiền quyên góp khi mua sắm sẽ được gửi đến tổ chức mà bạn đã chọn"
      fullScreenOnMobile
      actions={(
        <Button
          onClick={onSubmit}
          fullWidth
          disabled={selected === -1}
        >
          Chọn quyên góp
        </Button>
      )}
    >
      {organizations.map((organization) => (
        <Item
          key={organization.id}
          organization={organization}
          selected={selected === organization.id}
          onSelect={() => setSelected(organization.id)}
        />
      ))}
    </Dialog>
  )
}

export default observer(OrganizationBlocker)
