import React from 'react'
import { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import config from '~/config'
import Icon from '~/images/facebook.png'

const Facebook = ({
  render,
  onSuccess: onSuccessProp,
  onRequest: onRequestProp,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false)

  const onFailure = (res) => {
    setLoading(false)
    onCancel()
    console.log(res)
  }

  const onRequest = () => {
    setLoading(true)
    onRequestProp()
  }

  const responseFacebook = (response) => {
    if (response.accessToken && response.accessToken !== '') {
      onSuccessProp({
        name: response.name,
        avatar_url: response.picture?.data?.length > 0 ? response.picture?.data[0].url : '',
        portal_id: response.id,
        type: config.USER_PORTAL.FACEBOOK,
        email: response.email,
        registration_payload: {
          ...response,
          access_token: response.accessToken,
        },
      })
    } else {
      onFailure(response)
    }
  }

  return (
    <FacebookLogin
      appId={config.FACEBOOK_APP_ID}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps =>{
        return render({
          type: 'facebook',
          icon: Icon,
          onClick: () => {
            onRequest()
            renderProps.onClick()
          },
          loading: loading,
          color: 'facebookButton',
          colorText: 'pureWhite',
        })
      }}
    />
  )
}

export default Facebook
