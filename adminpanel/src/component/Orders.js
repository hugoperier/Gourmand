/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, type, comment) {
  return { id, date, type, comment };
}

const rows = [
  createData(0, "25 Nov, 2019", "Comment", "Lee give 1 star to moms touch with the comment \"this restaurant suck\""),
  createData(1, "25 Nov, 2019", "Moderation", "xxx has deleted the comment of lee"),
  createData(2, "25 Nov, 2019", "Script Error", "An error as been occured while trying to parse 'Datetime' in 'number'"),
  createData(3, "25 Nov, 2019", "Comment", "Jong hun give 4 star to petit le pommier with the comment \"Incredible I love this food !\""),
  createData(4, "25 Nov, 2019", "Support", "Lee Han has posted a question to the support and is awaiting for an answer")  
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Actions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell >{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary">
          See more actions
        </Link>
      </div>
    </React.Fragment>
  );
}