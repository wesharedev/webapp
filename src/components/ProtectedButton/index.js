import React from 'react'
import { observer } from 'mobx-react'

import { useStores } from '~/hooks'
import Button from '~/components/Button'

const ProtectedButton = ({
  onClick: onClickProp,
  href,
  ...props
}) => {
  const { userStore } = useStores()

  const onClick = (e) => {
    if (userStore.user) {
      if (onClickProp) onClickProp(e)
    } else {
      userStore.setAuthDialogOpen(true)
    }
  }

  return (
    <Button
      href={userStore.user ? href : null}
      target="_blank"
      onClick={onClick}
      {...props}
    />
  )
}

export default observer(ProtectedButton)
