import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ShipmentEditView from '../../containers/shipmentView/ShipmentAddView';
import ProductEditView from '../../containers/productView/productAddView';
import { deleteProduct } from '../../store/actions/productActions';

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
	ProductInputView: {
		display: 'none',
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
});

function Product(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<div className={classes.column}>
						<Typography className={classes.heading}>
							Product Name: {props.product.name}
						</Typography>
					</div>
					<Typography className={classes.heading}>
						Value: {props.product.value}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<div className={classes.column} />
				</ExpansionPanelDetails>

				<ExpansionPanelActions>
					{/* <Typography className={classes.heading}>
							Length: {props.product.length}
							</Typography>
							<Typography className={classes.heading}>
							Width: {props.product.width}
							</Typography>
							<Typography className={classes.heading}>
							Height: {props.product.height}
							</Typography>
							<Typography className={classes.heading}>
							Fragile: {props.product.fragile}
						</Typography> */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							margin: '10px',
						}}>
						<Typography className={classes.heading}>
							Weight: {props.product.weight}
						</Typography>
						<Typography className={classes.heading}>
							Description: {props.product.productDescription}
						</Typography>
					</div>
					<Link to="/shipments/form">
						<Button size="small">Add Shipment</Button>
					</Link>

					<Button size="small" color="primary">
						<span onClick={event => console.log(event)}>Delete</span>
					</Button>
				</ExpansionPanelActions>
				<ProductEditView
					productUuid={props.product.uuid}
					default={props.product}
				/>
			</ExpansionPanel>
		</div>
	);
}

Product.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		products: state.productReducer.products,
	};
};

export default connect(
	mapStateToProps,
	{ deleteProduct },
)(withStyles(styles)(Product));
