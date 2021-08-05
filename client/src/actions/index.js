import axios from 'axios';

export function getDietTypes() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3001/types')
			.then(response => {
				dispatch({
					type: 'GET_DIET_TYPES',
					payload: response.data,
				});
			})
			.catch(err => console.log(err));
	};
}

export function searchByName(name) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3001/recipes?name=${name}`)
			.then(response => {
				dispatch({
					type: 'GET_SEARCH_RESULTS',
					payload: response.data,
				});
			})
			.catch(err => console.log(err));
	};
}

export function setLoading(param) {
	return function (dispatch) {
		dispatch({
			type: 'CHANGE_LOADING',
			payload: param,
		});
	};
}

export function setPageNumbers(array) {
	return function (dispatch) {
		dispatch({
			type: 'SET_PAGE_NUMBERS',
			payload: array,
		});
	};
}
