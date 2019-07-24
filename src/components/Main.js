import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import { Typography, Button, Grid } from '@material-ui/core'

import { PaddedContainer } from './PaddedContainer'
import sky from '../assets/sky.jpg'
import Hero from './Hero'
import TopChemicals from './TopChemicals'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(5),
    backgroundImage: `url(${sky})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100% 180px',
    marginBottom: theme.spacing(4),
  },
  title: {
    color: theme.palette.grey[100],
  },
}))

const WhiteBackgroundButton = withStyles(theme => ({
  root: {
    background: 'white',
    '&:hover': {
      background: theme.palette.grey[200],
    },
  },
}))(Button)

export default function Main() {
  const { root, title } = useStyles()

  return (
    <main className={root}>
      <PaddedContainer>
        <Typography variant="h3" gutterBottom className={title}>
          Welcome, Trevor Glaser
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={2} justify="flex-end">
            <Grid item>
              <WhiteBackgroundButton variant="outlined" color="primary">
                Weather Story
              </WhiteBackgroundButton>
            </Grid>
            <Grid item>
              <WhiteBackgroundButton variant="outlined" color="primary">
                Local Weather
              </WhiteBackgroundButton>
            </Grid>
            <Grid item>
              <WhiteBackgroundButton variant="outlined" color="primary">
                Markets
              </WhiteBackgroundButton>
            </Grid>
          </Grid>
          <Grid item>
            <Hero />
          </Grid>
          <Grid item>
            <TopChemicals />
          </Grid>
        </Grid>
      </PaddedContainer>
    </main>
  )
}
