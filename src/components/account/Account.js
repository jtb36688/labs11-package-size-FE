import React from 'react';
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
	root: {
		width: '100%',
	},
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	icon: {
		verticalAlign: 'bottom',
		height: 20,
		width: 20,
	},
	details: {
		alignItems: 'center',
	},
	column: {
		flexBasis: '33.33%',
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
});

function Account(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.column}>
				<Typography className={classes.heading}>
					First Name: {props.user.firstName}
				</Typography>
				<Typography className={classes.heading}>
					Last Name: {props.user.lasttName}
				</Typography>
				<Typography className={classes.heading}>
					Address 1: {props.user.address1}
				</Typography>
				<Typography className={classes.heading}>
					Address 2: {props.user.address2}
				</Typography>
				<Typography className={classes.heading}>
					City: {props.user.city}
				</Typography>
				<Typography className={classes.heading}>
					State: {props.user.state}
				</Typography>
				<Typography className={classes.heading}>
					Zip Code: {props.user.zip}
				</Typography>
				<Typography className={classes.heading}>
					Country: {props.user.country}
				</Typography>
				<Typography className={classes.heading}>
					Email Address: {props.user.emailAddress}
				</Typography>
			</div>

			<Button size="small" color="primary">
				Edit
			</Button>
			{/* <Link to={`/edit/${id}`}>
            	<h4  className="edit-link">Edit</h4>
          	</Link> */}

		</div>
	);
}

Account.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
