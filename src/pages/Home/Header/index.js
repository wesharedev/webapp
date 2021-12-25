import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import './carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ws_banner_mobile from '~/images/ws_banner_mobile.png'
import ws_banner_desktop from '~/images/ws_banner_desktop.png'
import styles from './styles'
import { APIs } from '~/config'

const useStyles = makeStyles(styles)
function Header() {
  const classes = useStyles()
  const [banners, setBanners] = useState([])
  const isMobile = useMediaQuery('(max-width:767px)')

  useEffect(() => {
    APIs.getBanners().then(response => {
      const tmp = isMobile ? [{ image_url: ws_banner_mobile, link: 'https://link.weshare.asia/store' }, ...response.data.data.banners] : response.data.data.banners
      setBanners(tmp)
    })
  }, [isMobile])

  return (
    <div className={classes.header}>
      <div
        className={classes.leftItem}
      >
        <Carousel
          showThumbs={false}
          autoPlay
          showArrows
          showIndicators
          infiniteLoop
          showStatus={false}
          interval={2000}
        >
          {
            banners.map((banner, idx) => {
              return (
                <img 
                  key={idx}
                  className={classes.banner}
                  src={banner.image_url} />
              )
            })
          }
        </Carousel>
      </div>
      {
        !isMobile && (
          <div
            className={classes.rightItem}
          >
            <a
              href="https://link.weshare.asia/store"
              target="_blank"
              rel="noreferrer"
            >
              <img 
                className={classes.banner}
                src={ws_banner_desktop} />
            </a>
          </div>
        )
      }
    </div>
  )
}

export default Header
