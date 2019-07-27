import React from 'react'
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Button,
  Box,
} from '@material-ui/core'

import soybeans from '../assets/soybeans.jpg'

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
  },
})

export default function Hero() {
  const { img } = useStyles()

  return (
    <Paper component={Box} padding={{ xs: 1, sm: 2 }}>
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
            <Box display="inline-block" mt={4}>
              <Typography variant="h6" gutterBottom>
                Convenient. Easy. Customized.
              </Typography>
              <Button fullWidth color="primary" variant="contained">
                Shop Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
