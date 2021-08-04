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
			.cath(err => console.log(err));
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
			.cath(err => console.log(err));
	};
}
