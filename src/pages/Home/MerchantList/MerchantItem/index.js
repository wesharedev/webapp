import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useIntl } from 'react-intl'

import styles from './styles'
import Typography from '~/components/Typography/index'
import ProtectedButton from '~/components/ProtectedButton'
import Card from '~/components/Card'
const useStyles = makeStyles(styles)

function MerchantItem({ merchant }) {
  const intl = useIntl()
  const classes = useStyles()

  return (
    <Card elevation={0}>
      <div className={classes.logoContainer}>
        <img
          src={merchant.logo}
          className={classes.logo}
          alt="merchant-logo"
        />
      </div>
      <div className={classes.commissionInfo}>
        <Typography
          variant="subtext"
          color="base4"
        >
          {intl.formatMessage({ id: 'home.donationTo' })}
        </Typography>
        <Typography
          variant="headline2"
          color="base7"
        >
          {Math.round(merchant.offers[0].web_rate_new * 100,2)}%
        </Typography>
      </div>
      <ProtectedButton
        color="brandBlue0"
        variant="text"
        fullWidth
        disableElevation
        href={`/redirecting?merchant_id=${merchant.id}`}
      >
        {intl.formatMessage({ id: 'home.buyNow' })}
      </ProtectedButton>
    </Card>
  )
}

export default MerchantItem
