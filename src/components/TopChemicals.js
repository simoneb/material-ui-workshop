import React from 'react'
import {
  Paper,
  Grid,
  Typography,
  TableHead,
  TableBody,
  Table,
  TableRow,
  TableCell,
  makeStyles,
  Button
} from '@material-ui/core'
import CartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}))

export default function TopChemicals() {
  const { root, leftIcon } = useStyles()

  return (
    <Paper className={root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="h5">You Top Chemicals</Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary">May-September 2018</Typography>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product #</TableCell>
            <TableCell>Description</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1000015271</TableCell>
            <TableCell>STRUT</TableCell>
            <TableCell>
              <Button color="primary" variant="contained">
                <CartIcon className={leftIcon} fontSize="small" />
                Reorder
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}
