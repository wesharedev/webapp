import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider as MobxProvider } from 'mobx-react'


import App from '~/pages/App'
import reportWebVitals from '~/reportWebVitals'
import muiTheme from './muitheme'
import { rootStore, hydrateAll } from './stores'

const theme = createMuiTheme(muiTheme)

const render = () =>{
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <MobxProvider {...rootStore}>
        <App />
      </MobxProvider>
    </ThemeProvider>,
    document.getElementById('root'),
  )
}

hydrateAll(rootStore).then(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
