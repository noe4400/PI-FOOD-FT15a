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
			.catch(err => console.log('err', err.response.status));
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
			.catch(err => {
				if ((err.response.status = '404')) {
					return dispatch({
						type: 'FOUND_RESULTS',
					});
				}
				dispatch({
					type: 'FOUND_RESULTS',
				});
			});
	};
}

export function postRecipe(obj) {
	return function (dispatch) {
		return axios
			.post('http://localhost:3001/recipe', {
				name: obj.name,
				summary: obj.summary,
				score: obj.score,
				healthscore: obj.healthscore,
				steps: obj.steps,
				dietTypes: obj.dietTypes,
			})
			.then(res => {
				console.log(res);
			});
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

export function setCurrentPage(currentPage) {
	return function (dispatch) {
		dispatch({
			type: 'SET_CURRENT_PAGE',
			payload: currentPage,
		});
	};
}
