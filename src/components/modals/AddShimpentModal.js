import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 60,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
	},
	submit: {
		color: 'white',
		backgroundColor: '#72BDA2',
		'&:hover': {
			color: '#72BDA2',
			backgroundColor: 'white',
		},
	},
	root: {
		margin: 10,
		display: 'flex',
		justifyContent: 'space-between',
	},
});

class AddShipmentModal extends React.Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Button
					variant="contained"
					className={classes.submit}
					onClick={this.handleOpen}>
					Add Shipment
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}>
					<div style={getModalStyle()} className={classes.paper}>
						<Typography variant="h6" id="modal-title">
							Enter tracking number
						</Typography>
						<div onClose={this.handleClose}>
							{this.props.children}
							<div className={classes.root}>
								<Button
									onClick={this.props.addShipment}
									variant="contained"
									className={classes.submit}>
									Add shipment info.
								</Button>
								<Button variant="contained" onClick={this.handleClose}>
									Cancel
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

AddShipmentModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddShipmentModal);
