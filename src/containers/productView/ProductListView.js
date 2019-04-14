import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { Redirect, withRouter } from 'react-router-dom';

import ProductList from '../../components/product/ProductList';
import {
	getProducts,
	addProduct,
	editProduct,
	deleteProduct,
} from '../../store/actions/productActions';
import { addShipment } from '../../store/actions/shipmentActions';
import { compose } from 'redux';

const styles = theme => ({
	mainContainer: {
		marginTop: 30,
		maxWidth: 'auto',
	},
});

class ProductListView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			product: {
				name: '',
				productDescription: '',
				weight: '',
				length: '',
				width: '',
				height: '',
				value: '',
				images: [],
			},
			trackingNumber: '',
			searchTerm: '',
		};
	}

	componentDidMount = () => {
		this.props.getProducts();
	};

	updateModalState = item => {
		this.setState({
			product: {
				name: item.name,
				productDescription: item.productDescription,
				weight: item.weight,
				value: item.value,
			},
		});
	};

	updateSearch = e => {
		this.setState({ searchTerm: e.target.value });
	};

	filteredProducts = () => {
		return this.props.products.filter(product => {
			return (
				product.name
					.toLowerCase()
					.indexOf(this.state.searchTerm.toLowerCase()) !== -1
			);
		});
	};

	productAdd = prod => {
		this.props.addProduct(prod);
		this.setState({
			product: {
				name: '',
				productDescription: '',
				weight: '',
				length: '',
				width: '',
				height: '',
				value: '',
				images: [],
			},
		});
	};

	addShipment = (tracId, prod) => {
		this.props.addShipment(tracId, prod);
		this.setState({
			trackingNumber: '',
		});
		this.props.history.push('/');
	};

	deleteProduct = id => {
		this.props.deleteProduct(id);
		return <Redirect to="/products" />;
	};

	editProduct = (id, prod) => {
		this.props.editProduct(id, prod);
		this.setState({
			product: {
				name: '',
				productDescription: '',
				weight: '',
				length: '',
				width: '',
				height: '',
				value: '',
				thumbnail: '',
				images: [],
			},
		});
		this.props.history.push('/');
	};

	deleteImg = imgId => {
		let updatedImages = Object.assign([], this.state.images);
		updatedImages.splice(imgId, 1);

		this.setState({
			product: {
				images: updatedImages,
			},
		});
	};

	getThumbnail = url => {
		this.setState({
			product: {
				...this.state.product,
				thumbnail: url,
			},
		});
	};

	addImgs = files => {
		this.setState({
			product: {
				...this.state.product,
				images: [...this.state.product.images, files.secure_url],
			},
		});
	};

	handleInputChange = event => {
		this.setState({
			product: {
				...this.state.product,
				[event.target.name]: event.target.value,
			},
		});
	};

	render() {
		return (
			<div className={this.props.classes.mainContainer}>
				<div>
					<ProductList
						getThumbnail={this.getThumbnail}
						loadMore={this.props.getProducts}
						addImgs={this.addImgs}
						deleteImg={this.deleteImg}
						updateModalState={this.updateModalState}
						editProduct={this.editProduct}
						deleteProduct={this.deleteProduct}
						addShipment={this.addShipment}
						products={
							this.state.searchTerm
								? this.filteredProducts()
								: this.props.products
						}
						handleChange={this.handleInputChange}
						trackingNumber={this.state.trackingNumber}
						name={this.state.product.name}
						productDescription={this.state.product.productDescription}
						weight={this.state.product.weight}
						length={this.state.product.length}
						thumbnail={this.state.thumbnail}
						width={this.state.product.width}
						height={this.state.product.height}
						value={this.state.product.value}
						product={this.state.product}
						addProduct={this.productAdd}
						searchTerm={this.state.searchTerm}
						updateSearch={this.updateSearch}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.productsReducer.products,
	};
};

export default compose(
	withRouter(
		connect(
			mapStateToProps,
			{ getProducts, addProduct, editProduct, deleteProduct, addShipment },
		)(withStyles(styles)(ProductListView)),
	),
);
