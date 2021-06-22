import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Add, Delete } from './Buttons.jsx';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(itemName, quantity, percentageOfTotal) {
	return { itemName, quantity, percentageOfTotal };
}
export default function ItemsDisplay(props) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Item Name</TableCell>
						<TableCell align="right">Quantity</TableCell>
						<TableCell align="right">Percentage&nbsp;of&nbsp;Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.inventoryList.map((item, i) => (
						<TableRow key={'item' + i}>
							<TableCell component="th" scope="row">
								{item.item}
							</TableCell>
							<TableCell align="right">{item.items}</TableCell>
							<TableCell align="right">{item.percentageOfTotal}</TableCell>
							<TableCell align="right">
								<Add
									key={'add' + i}
									itemKey={i}
									incrementCount={props.incrementCount}
								/>
							</TableCell>
							<TableCell align="right">
								<Delete
									key={'delete' + i}
									itemKey={i}
									decrementCount={props.decrementCount}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
