import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useIntl } from 'react-intl'

import logo from '~/images/logo.svg'
import Typography from '~/components/Typography/index'
import styles from './styles'
import UserMenu from './UserMenu/index'
import { useIsMobile } from '~/hooks'

const useStyles = makeStyles(styles)

const Header = () => {
  const classes = useStyles()
  const intl = useIntl()

  const isMobile = useIsMobile()

  return (
    <div className={classes.header}>
      <div className={classes.aboutContainer}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
        />
        {!isMobile && (
          <a
            href="https://weshare.asia/vi/"
            className={classes.link}
          >
            <Typography
              variant="highlight1"
              className={classes.about}
            >
              {intl.formatMessage({ id: 'header.about' })}
            </Typography>
          </a>
        )}
      </div>
      <UserMenu />
    </div>
  )
}

export default Header
