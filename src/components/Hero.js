import React from 'react'
import { Paper, makeStyles, Grid, Typography, Button } from '@material-ui/core'

import soybeans from '../assets/soybeans.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
  img: {
    maxWidth: '100%',
  },
}))

export default function Hero() {
  const { root, img } = useStyles()

  return (
    <Paper className={root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img src={soybeans} className={img} alt="soybeans" />
        </Grid>
        <Grid item container direction="column" xs={12} sm={8}>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Drive your business forward with online order requests.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Now you can reorder products from your purchase history or search
              from a catalog of chemicals when, where, and how you want.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Convenient. Easy. Customized.
            </Typography>
          </Grid>
          <Grid item>
            <Button fullWidth color="primary" variant="contained">
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
