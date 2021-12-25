import React from 'react'
import { makeStyles } from '@material-ui/styles'

import styles from './styles'
import Header from './Header/index'
import MerchantList from './MerchantList/index'
const useStyles = makeStyles(styles)

import Layout from '~/components/Layout'

function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.mainContainer}>
        <Header />
        <MerchantList />
      </div>
    </Layout>
  )
}

export default Home
