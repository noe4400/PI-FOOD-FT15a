import React, { useEffect } from 'react';
import './FilterBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderBy, setFilter } from '../../actions';

const FilterBar = () => {
	const dispatch = useDispatch();
	const dietTypes = useSelector(state => state.dietTypes);
	const dietTypesOpt = dietTypes?.map((diet, index) => (
		<option value={diet}>{diet}</option>
	));

	const changeOrder = e => {
		dispatch(setOrderBy(e.target.value));
	};
	const changeFilter = e => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<div className='filterNav'>
			<div>
				<h5>Filtrar por tipo de dieta</h5>
				<select onChange={changeFilter}>
					<option value='ALL'>All</option>
					{dietTypesOpt}
				</select>
			</div>
			<div>
				<h5>Ordernar de manera:</h5>
				<select onChange={changeOrder}>
					<option value='ASC'>Ascendente</option>
					<option value='DESC'>Descendente</option>
					<option value='GS'>Greater Score</option>
					<option value='LS'>Less Score</option>
				</select>
			</div>
		</div>
	);
};
export default FilterBar;
