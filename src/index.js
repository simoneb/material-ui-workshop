import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { CssBaseline, createMuiTheme } from '@material-ui/core'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import theme from './theme'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
})

function App() {
  const { root } = useStyles()

  return (
    <div className={root}>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
