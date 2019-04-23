import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProducts, addProduct } from "../../store/actions/productActions";
import classNames from "classnames";
import AddProductModal from "../modals/AddProductModal";
import ImgUploader from "../imgUploader/ImgUploader";
import { deleteSelectedProduct, deleteAllSelected } from "../../store/actions/shipmentActions";

import Product from "./Product";

const drawerWidth = 275;

const styles = theme => ({
  root: {
    width: "auto",
    display: "flex",
    flexWrap: "wrap"
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dimensions: {
    flexBasis: 200
  },
  margin: {
    margin: theme.spacing.unit
  },
  drawer: {
    paddingTop: theme.spacing.unit * 3,
    width: drawerWidth,
	flexShrink: 0,
	marginTop: "17vh",
	height: "84vh"
  },
  drawerPaper: {
	marginTop: 15,
	width: drawerWidth,
	height: "84vh",
	marginTop: "17vh",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
    // margin: 'auto',
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
    // marginLeft: 'auto',
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  container: {
    marginBottom: 25,
    flexDirection: "column",
    display: "flex"
  },
  headingContainer: {
    justifyContent: "space-between",
    alignItems: "baseline",
    display: "flex"
  },
  searchContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 500
  },
  WholeList: {
	height: "90%",
	display: "flex",
	flexFlow: "column wrap"
  },
  WholeListPaper: {
	  height: "98%",

  }
});

class ProductList extends Component {
  state = {
    open: true
  };

  handleDeleteSelected = uuid => {
    // this.setState({
    // 	...this.state,
    // 	selectedProduct: uuid,
    // });
    this.props.deleteSelectedProduct(uuid);
  };

  handleDrawerOpen = () => {
    return;
  };

  // handleRenderList = () => {
  // 	if (this.props.selectedProducts.length) {
  // 		return (
  // 			<Drawer
  // 				className={this.props.classes.drawer}
  // 				variant="persistent"
  // 				classes={{
  // 					paper: this.props.classes.drawerPaper,
  // 				}}
  // 				anchor="right"
  // 				open={true}>
  // 				<Paper>
  // 					<List>
  // 						<Typography>List</Typography>
  // 						{this.props.selectedProducts.map((prod, i) => (
  // 							<ListItem key={i}>
  // 								<ListItemText
  // 									onClick={() => this.handleDeleteSelected(prod.uuid)}
  // 									primary={prod.name}
  // 								/>
  // 							</ListItem>
  // 						))}
  // 					</List>
  // 					<Divider />
  // 					<Button onClick={this.handlePackit}>Pack It</Button>
  // 				</Paper>
  // 			</Drawer>
  // 		);
  // 	} else {
  // 		return null;
  // 	}
  // };

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.headingContainer}>
          <Typography gutterBottom variant="h5" component="h2">
            Products
          </Typography>

          <AddProductModal
            getThumbnail={this.getThumbnail}
            addImgs={this.addImgs}
            addProduct={() => this.props.addProduct(this.props.product)}
          >
            <form className={this.props.classes.container} autocomplete="off">
              <div className={this.props.classes.container}>
                <Typography gutterBottom variant="h5" component="h2">
                  Product Detail
                </Typography>
                <TextField
                  required
                  id="standard-name"
                  name="name"
                  label="Product Name"
                  className={this.props.classes.textField}
                  value={this.props.product.name}
                  onChange={this.props.handleChange}
                  margin="normal"
                />
                <TextField
                  onChange={this.props.handleChange}
                  name="productDescription"
                  value={this.props.product.productDescription}
                  label="Description"
                  className={this.props.classes.textField}
                  inputProps={{
                    "aria-label": "Description"
                  }}
                />
                <TextField
                  onChange={this.props.handleChange}
                  name="value"
                  value={this.props.product.value}
                  label="Value"
                  className={this.props.classes.textField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                />
              </div>
              <div className={this.props.classes.container}>
                <Typography gutterBottom variant="h5" component="h2">
                  Dimensions
                </Typography>
                <TextField
                  onChange={this.props.handleChange}
                  name="height"
                  value={this.props.product.height}
                  label="Height"
                  className={classNames(
                    this.props.classes.margin,
                    this.props.classes.textField
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />

                <TextField
                  onChange={this.props.handleChange}
                  name="length"
                  value={this.props.product.length}
                  label="Length"
                  className={classNames(
                    this.props.classes.margin,
                    this.props.classes.textField
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />

                <TextField
                  onChange={this.props.handleChange}
                  name="width"
                  value={this.props.product.width}
                  label="Width"
                  className={classNames(
                    this.props.classes.margin,
                    this.props.classes.textField
                  )}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    )
                  }}
                />
                <TextField
                  className={classNames(
                    this.props.classes.margin,
                    this.props.classes.textField
                  )}
                  onChange={this.props.handleChange}
                  name="weight"
                  value={this.props.product.weight}
                  label="Weight"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lb</InputAdornment>
                    )
                  }}
                />
                <ImgUploader
                  getThumbnail={this.props.getThumbnail}
                  addImgs={this.props.addImgs}
                  deleteImgFromProdList={this.props.deleteImg}
                  thumbnail={this.props.thumbnail}
                />
              </div>
            </form>
          </AddProductModal>
        </div>

        <div
          className={classNames(this.props.classes.content, {
            [this.props.classes.contentShift]: this.state.open
          })}
        >
          <div className={this.props.classes.drawerHeader} />
          <div>
            <div className={this.props.classes.searchContainer}>
              <TextField
                name="search"
                value={this.props.searchTerm}
                onChange={this.props.updateSearch}
                id="filled-full-width"
                label="Search by name..."
                margin="normal"
                fullWidth
                variant="filled"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>

            <div className={this.props.classes.root}>
              {this.props.products ? (
                this.props.products.map(product => {
                  return (
                    <div key={product.uuid}>
                      <Product
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column"
                        }}
                        openDrawer={this.handleDrawerOpen}
                        selectProduct={this.props.selectProduct}
                        editProduct={this.props.editProduct}
                        handleChange={this.props.handleChange}
                        trackingNumber={this.props.trackingNumber}
                        deleteProduct={this.props.deleteProduct}
                        updateState={this.props.updateState}
                        addShipment={this.props.addShipment}
                        product={product}
                        updatedProduct={this.props.product}
                        name={this.props.name}
                        productDescription={this.props.productDescription}
                        weight={this.props.width}
                        thumbnail={this.props.thumbnail}
                        length={this.props.length}
                        width={this.props.width}
                        height={this.props.height}
                        value={this.props.value}
                        getDetail={this.props.getDetail}
                        addPackage={this.props.addPackage}
                      />
                    </div>
                  );
                })
              ) : (
                <div>no list yet</div>
              )}
            </div>
          </div>
        </div>

        {!!this.props.selectedProducts.length && (
          <Drawer
            className={this.props.classes.drawer}
            variant="persistent"
            classes={{
              paper: this.props.classes.drawerPaper
            }}
            anchor="right"
            open={true}
          >
            <Divider />
            <Paper className={this.props.classes.WholeListPaper}>
              <List className={this.props.classes.WholeList}>
                {this.props.selectedProducts.map((prod, i) =>
                  prod.name.length > 24 ? (
                    <ListItem key={i}>
                      <ListItemText
                        disableTypography={true}
                        className={this.props.classes.root}
                        onClick={() => this.handleDeleteSelected(i)}
                        primary={prod.name.slice(0, 23)}
                        style={{ fontSize: "12px", textAlign: "center" }}
                      />
                    </ListItem>
                  ) : (
                    <ListItem key={i}>
                      <ListItemText
                        disableTypography={true}
                        className={this.props.classes.root}
                        onClick={() => this.handleDeleteSelected(i)}
                        primary={prod.name}
                        style={{ fontSize: "12px", textAlign: "center" }}
                      />
                    </ListItem>
                  )
                )}
              </List>

              <Divider />
              <div style={{display: "flex", justifyContent: "space-evenly"}}>
					<Button onClick={this.handlePackit}>Pack It</Button>
					<Button onClick={() => this.props.deleteAllSelected()}>Clear All</Button>
</div>
            </Paper>
          </Drawer>
        )}
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { getProducts, addProduct, deleteSelectedProduct, deleteAllSelected }
  )(withStyles(styles)(ProductList))
);
