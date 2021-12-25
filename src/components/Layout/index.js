import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { makeStyles } from '@material-ui/styles'
import {
  withWidth,
} from '@material-ui/core'

import { APIs } from '~/config'
import { useStores } from '~/hooks'
import styles from './styles'
import Header from './Header/index'
import Footer from './Footer/index'

const useStyles = makeStyles(styles)

const Layout = ({
  children,
}) => {
  const classes = useStyles()
  const { userStore } = useStores()

  useEffect(() => {
    const load = async () => {
      const response = await APIs.getCurrentUser()
      if (!response.ok) return
      userStore.setUser(response.data.data)
    }

    if (userStore.user) load()
  }, [])

  return (
    <div className={classes.mainContainer}>
      <div className={classes.widthLimit}>
        <Header />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.widthLimit}>
          <div className={classes.body}>
            {children}
          </div>
        </div>
      </div>
      <div className={classes.widthLimit}>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withWidth()(observer(Layout))
