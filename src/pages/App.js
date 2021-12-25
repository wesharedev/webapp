import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { IntlProvider } from 'react-intl'
import { hot } from 'react-hot-loader/root'
import { observer } from 'mobx-react'

import enVN from '~/i18n/en-VN.json'
import viVN from '~/i18n/vi-VN.json'

import { StoreContext } from '~/contexts'
import { rootStore } from '~/stores'

import UsersIcon from '~/images/users.png'

import Notification from '~/components/Notification'
import LoginButtons from '~/components/LoginButtons'
import Dialog from '~/components/Dialog'
import OrganizationBlocker from '~/components/OrganizationBlocker'
import Home from '~/pages/Home'
import LoadingNavigation from '~/pages/LoadingNavigation'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
})

const translation = {
  vn: {
    en: enVN,
    vi: viVN,
  },
}

function App() {
  useStyles()
  const messages = translation.vn
  const locale = 'vi'

  return (
    <StoreContext.Provider value={rootStore}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider key={locale} messages={messages[locale]} locale={locale} defaultLocale="vi">
          <BrowserRouter>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/redirecting"><LoadingNavigation /></Route>
            </Switch>
          </BrowserRouter>
          <Notification />
          <Dialog
            open={rootStore.userStore.authDialogOpen}
            onClose={() => rootStore.userStore.setAuthDialogOpen(!rootStore.userStore.authDialogOpen)}
            title="Đăng nhập"
            icon={UsersIcon}
          >
            <LoginButtons />
          </Dialog>
          <OrganizationBlocker />
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </StoreContext.Provider>
  )
}

export default hot(observer(App))
