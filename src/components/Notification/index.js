import React from 'react'
import { observer } from 'mobx-react'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/styles'
import {
  Icon,
  Dialog,
  Snackbar,
  IconButton,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'

import styles from './styles'
import { useStores } from '~/hooks'
import Button from '../Button'

const useStyles = makeStyles(styles)

const Notification = () => {
  const intl = useIntl()
  const classes = useStyles()
  const { notificationStore } = useStores()

  const onSnackClose = () => {
    notificationStore.setSnackOpen(false)
  }

  const onDialogClose = () => {
    notificationStore.setDialogOpen(false)
  }

  const message = notificationStore.snackOptions.intl ?
    intl.formatMessage({
      id: notificationStore.snackMessage,
      defaultMessage: notificationStore.snackMessage,
    }) : notificationStore.snackMessage

  return (
    <React.Fragment>
      <Snackbar
        open={notificationStore.snackOpen}
        action={(
          <IconButton size="small" aria-label="close" color="inherit" onClick={onSnackClose}>
            <Icon fontSize="small">close</Icon>
          </IconButton>
        )}
        onClose={onSnackClose}
        message={message}
        ContentProps={{
          classes: {
            message: classes.snackMessage,
          },
        }}
        autoHideDuration={300000}
      />
      <Dialog
        disableBackdropClick={true}
        open={notificationStore.dialogOpen}
        onClose={onDialogClose}
        fullWidth
        maxWidth='xs'
      >
        <DialogContent>
          <DialogContentText>
            {notificationStore.dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {notificationStore.dialogActions.map(({ variant, onClick, color, content }) => (
            <Button
              variant={variant}
              key={content}
              color={color}
              onClick={() => {
                onDialogClose()
                onClick()
              }}
            >
              {content}
            </Button>
          ))}

        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default observer(Notification)
