import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useIntl } from 'react-intl'

import logo from '~/images/logo.svg'
import appstore_link from '~/images/appstore_link.png'
import chplay_link from '~/images/chplay_link.png'
import facebook_color from '~/images/facebook_color.png'
import youtube from '~/images/youtube.png'
import styles from './styles'

import Grid from '~/components/Grid'
import Cell from '~/components/Cell'
import Hidden from '~/components/Hidden'
import Typography from '~/components/Typography'

const useStyles = makeStyles(styles)

const SocialItem = () => {
  const classes = useStyles()
  return (
    <div
      className={classes.socialLogoContainer}
    >
      <a
        href="https://www.facebook.com/weshareasia.shopnshare"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <img
          src={facebook_color}
          alt="facebook"
          className={classes.socialLogo}
        />
      </a>
      <div
        className={classes.ml26}
      >
        <a
          href="https://www.youtube.com/channel/UCt6meo7u9MHe3uE1r5rMUcA"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={youtube}
            alt="youtube"
            className={classes.socialLogo}
          />
        </a>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Info = ({ className }) => {
  const classes = useStyles()
  const intl = useIntl()

  return (
    <div
      className={className}
    >
      <img
        src={logo}
        alt="logo"
        className={classes.logo}
      />
      <Typography
        variant="subtext"
        className={classes.about}
      >
        {intl.formatMessage({ id: 'footer.description' })}
      </Typography>
      <Typography
        variant="highlight1"
        className={classes.testVersion}
      >
        {intl.formatMessage({ id: 'footer.developingVersion' })}
      </Typography>
    </div>
  )
}

const Download = () => {
  const classes = useStyles()
  const intl = useIntl()

  return (
    <div className={classes.aboutContainer}>
      <Typography
        variant="highlight1"
        className={classes.mb16}
      >
        {intl.formatMessage({ id: 'footer.download' })}
      </Typography>
      <div
        className={classes.mb16}
      >
        <a
          href="https://apps.apple.com/vn/app/weshare-shop-share/id1533376713"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={appstore_link}
            alt="appstore_link"
            className={classes.logo}
          />
        </a>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.weshare.userapp&hl=vi&gl=US"
        className={classes.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={chplay_link}
          alt="chplay_link"
          className={classes.logo}
        />
      </a>
    </div>
  )
}

const PrivacyTerms = () => {
  const classes = useStyles()
  const intl = useIntl()

  return (
    <div>
      <a
        href="https://weshare.asia/en"
        className={classes.link}
        target="_blank"
        rel="noreferrer"
      >
        <Typography
          variant="highlight1"
          className={classes.mb16}
        >
          {intl.formatMessage({ id: 'footer.lookingAbout' })}
        </Typography>
      </a>
      <a
        href="https://weshare.asia/vi/privacy"
        className={classes.link}
        target="_blank"
        rel="noreferrer"
      >
        <Typography
          variant="highlight1"
          className={classes.mb16}
        >
          {intl.formatMessage({ id: 'footer.privacyPolicy' })}
        </Typography>
      </a>
      <a
        href="https://weshare.asia/vi/terms-of-use"
        className={classes.link}
        target="_blank"
        rel="noreferrer"
      >
        <Typography
          variant="highlight1"
          className={classes.mb16}
        >
          {intl.formatMessage({ id: 'footer.termsOfUse' })}
        </Typography>
      </a>
    </div>
  )
}

const FollowBlock = () => {
  const classes = useStyles()
  const intl = useIntl()

  return (
    <div className={classes.aboutResponsiveContainer}>
      <Hidden only={'sm'}>
        <Typography
          variant="highlight1"
          className={classes.mb16}
        >
          {intl.formatMessage({ id: 'footer.followAt' })}
        </Typography>
      </Hidden>
      <SocialItem />
    </div>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.footer}>
      <Cell md={3} sm={4}>
        <Info className={classes.aboutContainer} />
      </Cell>
      <Cell md={3} sm={4} xs={6}>
        <Download />
      </Cell>
      <Hidden smDown>
        <Cell md={3}>
          <FollowBlock />
        </Cell>
      </Hidden>
      <Hidden smUp>
        <Cell xs={6}>
          <div className={classes.aboutResponsiveContainer}>
            <FollowBlock />
          </div>
        </Cell>
      </Hidden>

      <Cell md={3} sm={4}>
        <PrivacyTerms />
        <Hidden mdUp xsDown>
          <FollowBlock />
        </Hidden>
      </Cell>
    </Grid>
  )
}

export default Footer
