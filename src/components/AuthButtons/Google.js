import { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'

import config from '~/config'
import Icon from '~/images/google_color.png'

const Google = ({
  render,
  onSuccess: onSuccessProp,
  onRequest: onRequestProp,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false)

  const onSuccess = (result) => {
    const {
      tokenObj,
      googleId,
      profileObj,
      accessToken,
    } = result

    setLoading(false)
    onSuccessProp({
      name: profileObj.name,
      avatar_url: profileObj.imageUrl,
      portal_id: googleId,
      type: config.USER_PORTAL.GOOGLE,
      email: profileObj.email,
      registration_payload: {
        ...result,
        token: tokenObj,
        access_token: accessToken,
      },
    })
  }

  const onFailure = (res) => {
    setLoading(false)
    onCancel()
    console.log(res)
  }

  const onRequest = () => {
    setLoading(true)
    onRequestProp()
  }

  const { signIn } = useGoogleLogin({
    onRequest,
    onSuccess,
    clientId: config.GOOGLE_CLIENT_ID,
    fetchBasicProfile: true,
    onFailure,
    scope: 'profile email',
    autoLoad: false,
  })

  return render({
    type: 'google',
    icon: Icon,
    onClick: signIn,
    loading: loading,
    color: 'base1',
    colorText: 'base6',
  })
}

export default Google
