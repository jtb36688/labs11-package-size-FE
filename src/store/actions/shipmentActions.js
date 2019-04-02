import axios from 'axios';

export const GETTING_SHIPMENTS = 'GETTING_SHIPMENT';
export const GETTING_SHIPMENTS_SUCCESSFUL = 'GETTING_SHIPMENT_SUCCESSFUL';
export const GETTING_SHIPMENTS_FAILURE = 'GETTING_SHIPMENT_FAILURE';

export const ADDING_SHIPMENT = 'ADDING_SHIPMENT';
export const ADDING_SHIPMENT_SUCCESSFUL = 'ADDING_SHIPMENT_SUCCESSFUL';
export const ADDING_SHIPMENT_FAILURE = 'ADDING_SHIPMENT_FAILURE';

export const DELETING_SHIPMENT = 'DELETING_SHIPMENT';
export const DELETING_SHIPMENT_SUCCESSFUL = 'DELETING_SHIPMENT_SUCCESSFUL';
export const DELETING_SHIPMENT_FAILURE = 'DELETING_SHIPMENT_FAILURE';

export const addShipment = (trackingNumber, productId) => dispatch => {
	dispatch({ type: ADDING_SHIPMENT });

	axios
		.add('/shipments/add', trackingNumber, productId)
		.then(res =>
			dispatch({ type: ADDING_SHIPMENT_SUCCESSFUL, payload: res.data }),
		)
		.catch(err =>
			dispatch({ type: ADDING_SHIPMENT_FAILURE, payload: err.data }),
		);
};

export const getShipments = () => dispatch => {
	dispatch({ type: GETTING_SHIPMENTS });
	axios
		.get('/shipments')
		.then(res =>
			dispatch({ type: GETTING_SHIPMENTS_SUCCESSFUL, payload: res.data }),
		)
		.catch(err =>
			dispatch({ type: GETTING_SHIPMENTS_FAILURE, payload: err.data }),
		);
};

export const deleteShipment = uuid => dispatch => {
	dispatch({ type: DELETING_SHIPMENT });
	axios
		.delete(`/shipments/delete/${uuid}`, uuid)
		.then(res =>
			dispatch({ type: DELETING_SHIPMENT_SUCCESSFUL, payload: res.data }),
		)
		.catch(err =>
			dispatch({ type: DELETING_SHIPMENT_FAILURE, payload: err.data }),
		);
};
