import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

const Shipment = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Avatar alt="" src="" className={classes.bigAvatar} />
					<div className={classes.column}>
						<Typography className={classes.heading}>
							Customer Name: Paul Walker
						</Typography>

						<Typography className={classes.heading}>
							Product Name: Beach ball
						</Typography>

						<Typography className={classes.heading}>
							Destination: 123 main st
						</Typography>

						<Typography className={classes.heading}>
							Shipment Date: Fed 12, 2019
						</Typography>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<div className={classes.column} />
				</ExpansionPanelDetails>

				<ExpansionPanelActions>
					<div className={classes.column}>
						<Typography className={classes.heading}>
							Tracking Number: 23456789sdozxjhbgvy
						</Typography>
					</div>
					<Button size="small" color="primary">
						Edit
					</Button>
				</ExpansionPanelActions>
			</ExpansionPanel>
		</div>
	);
};

Shipment.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shipment);
