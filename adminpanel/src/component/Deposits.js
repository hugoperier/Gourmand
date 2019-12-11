/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total users registered</Title>
      <Typography component="p" variant="h4">
        224
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 25 November, 2019
      </Typography>      
    </React.Fragment>
  );
}