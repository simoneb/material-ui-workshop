import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 3),
  },
}))

export function PaddedContainer({ children }) {
  const { root } = useStyles()
  return <div className={root}>{children}</div>
}
