import React, { useEffect } from 'react';
import './FilterBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderASC, setOrderBy } from '../../actions';

const FilterBar = () => {
	const dispatch = useDispatch();
	const searchResults = useSelector(state => state.searchResults);
	const orderBy = useSelector(state => state.orderBy);

	useEffect(() => {
		dispatch(orderASC(searchResults, orderBy));
	}, [dispatch, orderBy]);

	const changeOrder = e => {
		dispatch(setOrderBy(e.target.value));
	};
	return (
		<div className='filterNav'>
			<div>
				<h5>Filtrar por tipo de dieta</h5>
				<select></select>
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
