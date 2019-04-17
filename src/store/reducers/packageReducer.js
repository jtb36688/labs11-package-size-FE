import {
	GETTING_PACKAGES,
	GETTING_PACKAGES_SUCCESSFUL,
	GETTING_PACKAGES_FAILURE,
	ADDING_PACKAGE,
	ADDING_PACKAGE_SUCCESSFUL,
	ADDING_PACKAGE_FAILURE,
	SELECTED_PRODUCT,
	DELETE_SELECTED,
} from '../actions/packageActions';

const initialState = {
	shipments: [],
	packages: [],
	data: [],
	addedPackages: [],
	duplicatePackages: [],
	previewBoxes: [],
	selectedProducts: [],
	fetching: false,
	adding: false,
	editing: false,
	deleting: false,
	success: false,
	failure: false,
	error: null,
};

const packageReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_PACKAGES:
			return {
				...state,
				fetching: true,
				error: null,
			};
		case GETTING_PACKAGES_SUCCESSFUL:
			return {
				...state,
				packages: action.payload,
				fetching: false,
				success: true,
				error: null,
			};

		case GETTING_PACKAGES_FAILURE:
			return {
				...state,
				fetching: false,
				success: false,
				failure: true,
				error: action.payload,
			};

		case SELECTED_PRODUCT:
			return {
				...state,
				selectedProducts: [...state.selectedProducts, action.payload],
				failure: false,
				error: null,
			};

		case DELETE_SELECTED:
			return {
				...state,
				selectedProducts: state.selectedProducts.filter(
					prod => prod.uuid !== action.payload,
				),
				failure: false,
				error: null,
			};

		case ADDING_PACKAGE:
			return {
				...state,
				adding: true,
				failure: false,
				error: null,
			};
		case ADDING_PACKAGE_SUCCESSFUL:
			return {
				...state,
				packages: action.payload,
				selectedProducts: [],
				fetching: false,
				adding: false,
				success: true,
				failure: false,
				error: null,
			};
		case ADDING_PACKAGE_FAILURE:
			return {
				...state,
				fetching: false,
				success: false,
				failure: true,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default packageReducer;
