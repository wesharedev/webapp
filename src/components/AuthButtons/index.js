import React from 'react'
import PropTypes from 'prop-types'

import Google from './Google'
import Facebook from './Facebook'

const AuthButtons = ({ render, onSuccess, onRequest, onCancel }) => {
  return (
    <div>
      <Google
        render={render}
        onSuccess={onSuccess}
        onRequest={onRequest}
        onCancel={onCancel}
      />
      <Facebook
        render={render}
        onSuccess={onSuccess}
        onRequest={onRequest}
        onCancel={onCancel}
      />
    </div>
  )
}

AuthButtons.propTypes = {
  render: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default AuthButtons
