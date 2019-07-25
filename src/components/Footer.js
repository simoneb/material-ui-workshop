import React from 'react'
import { makeStyles, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
    color: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[900],
    textAlign: 'center',
    fontSize: 12,
  },
}))

export default function Footer() {
  const { root } = useStyles()

  return (
    <footer className={root}>
      <Typography variant="inherit" display="block" gutterBottom>
        All of the trademarks and service marks displayed are marks of their
        respective owners.
      </Typography>
      <Typography variant="inherit" display="block" gutterBottom>
        <Link>Terms of Use and Privacy Policy</Link>
        {' | '}
        <Link>Contact Us</Link>
      </Typography>
      <Typography variant="inherit" display="block">
        © Nutrien Ag Solutions™ {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}
