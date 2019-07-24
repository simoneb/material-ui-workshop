import React from 'react'
import { Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import nutrienLogo from '../assets/nutrien-logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  logo: {
    maxWidth: 100,
  },
}))

export default function Header() {
  const { root, logo } = useStyles()

  return (
    <header>
      <AppBar color="default" className={root}>
        <Toolbar>
          <img src={nutrienLogo} alt="nutrien logo" className={logo} />
        </Toolbar>
      </AppBar>
    </header>
  )
}
