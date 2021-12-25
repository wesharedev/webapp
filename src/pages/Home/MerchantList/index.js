import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import styles from './styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import MerchantItem from './MerchantItem/index'
import { APIs } from '~/config'

const useStyles = makeStyles(styles)

export default function MerchantList() {
  const classes = useStyles()
  const [merchants, setMerchants] = useState([])
  const largeDevice =  useMediaQuery('(min-width:1224px)')
  const mediumDevice =  useMediaQuery('(min-width:768px)')

  useEffect(() => {
    APIs.getMerchants({
      offset: 0,
      limit: 200,
      include_offers: true,
      offer_limit: 1,
      offer_order: 'desc',
      offer_order_by: 'web_rate_new',
      offer_type: 'generic',
    }).then(response => {
      setMerchants(response.data.data.merchants)
    })
  }, [])

  const getColNumber = () => {
    if (largeDevice)
      return 5
    if (mediumDevice)
      return 4
    return 2
  }


  return (
    <div className={classes.mainContainer}>
      <GridList spacing={16} cols={getColNumber()}>
        {merchants.map((value, idx) => (
          <GridListTile key={idx} cols={1} className={classes.gridListTile}>
            <MerchantItem merchant={value} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
