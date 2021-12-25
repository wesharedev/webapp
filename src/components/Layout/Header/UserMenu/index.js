import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuItem from '@material-ui/core/MenuItem'
import { useIntl } from 'react-intl'
import { observer } from 'mobx-react'

import default_avatar from '~/images/default_avatar.svg'
import Hamburger from '~/images/hamberger.svg'
import info from '~/images/info.svg'
import heart from '~/images/heart.svg'
import logout from '~/images/logout.svg'
import styles from './styles'
import { useIsMobile, useStores } from '~/hooks'

import DropdownMenu from '~/components/DropdownMenu/index'
import Button from '~/components/Button/index'
import Typography from '~/components/Typography/index'

const useStyles = makeStyles(styles)

const DropdownContent = observer(({ setOpen }) => {
  const intl = useIntl()
  const classes = useStyles()
  const isMobile =  useIsMobile()
  const { userStore } = useStores()

  const onLogout = () => {
    userStore.setToken('')
    userStore.setUser(null)
    userStore.setSession(null)
  }

  const items = [
    {
      title: intl.formatMessage({ id: 'header.myDonation' }),
      logo: heart,
      onClick: () => null,
      show: !!userStore.user,
    },
    {
      title: intl.formatMessage({ id: 'header.login' }),
      logo: default_avatar,
      onClick: () => userStore.setAuthDialogOpen(true),
      show: !userStore.user,
    },
    {
      title: intl.formatMessage({ id: 'header.about' }),
      logo: info,
      onClick: () => window.open('https://weshare.asia/en','_self'),
      show: isMobile,
    },
    {
      title: intl.formatMessage({ id: 'header.logout' }),
      logo: logout,
      onClick: onLogout,
      show: !!userStore.user,
      iconBackgroundColor: 'rgba(255, 81, 81, 0.1)',
    },
  ].filter(i => i.show)

  return items.map(({
    logo,
    title,
    onClick,
    iconBackgroundColor,
  }, index) => (
    <MenuItem
      key={index}
      className={classes.noPadding}
      onClick={(e) => {
        setOpen(false)
        onClick(e)
      }}
    >
      <div className={classes.menuItemContainer}>
        <img
          src={logo}
          className={classes.iconContainer}
          style={{ backgroundColor: iconBackgroundColor }}
          alt="logo"
        />
        <Typography
          variant="highlight1"
          className={classes.menuItemTitle}
        >
          {title}
        </Typography>
      </div>
    </MenuItem>
  ))
})

const UserMenu = () => {
  const [open, setOpen] = useState(false)

  const intl = useIntl()
  const classes = useStyles()
  const isMobile =  useIsMobile()
  const { userStore } = useStores()

  if (isMobile) {
    return (
      <DropdownMenu
        title={(
          <img
            src={Hamburger}
            alt="logo"
            className={classes.hamburger}
          />
        )}
        open={open}
        setOpen={setOpen}
      >
        <DropdownContent setOpen={setOpen} />
      </DropdownMenu>
    )
  }

  if (userStore.user) {
    return (
      <DropdownMenu
        title={(
          <div className={classes.userMenuContainer}>
            <img
              src={userStore.user.avatar_url && userStore.user.avatar_url !== '' ? userStore.user.avatar_url : default_avatar}
              alt="logo"
              className={classes.avatar}
            />
            <Typography
              className={classes.userName}
              variant="highlight1"
            >
              {userStore.user.name}
            </Typography>
            <ExpandMoreIcon
              className={classes.expendMore}
            />
          </div>
        )}
        open={open}
        setOpen={setOpen}
      >
        <DropdownContent setOpen={setOpen} />
      </DropdownMenu>
    )
  }

  return (
    <Button
      color="base2"
      onClick={() => userStore.setAuthDialogOpen(true)}
      startIcon={(
        <img
          src={default_avatar}
          alt="logo"
          className={classes.defaultAvatar}
        />
      )}
    >
      {intl.formatMessage({ id: 'header.login' })}
    </Button>
  )
}

export default observer(UserMenu)
