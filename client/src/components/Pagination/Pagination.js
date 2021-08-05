import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumbers } from '../../actions';
import './Pagination.css';

const Pagination = () => {
	const dispatch = useDispatch();
	const searchResults = useSelector(state => state.searchResults);
	const resultsPerPage = useSelector(state => state.resultsPerPage);
	const currentPage = useSelector(state => state.currentPage);
	const pageNumbers = [];

	if (searchResults.length === 0) return <div></div>;
	for (
		let i = 1;
		i <= Math.ceil(searchResults.length / resultsPerPage);
		i++
	) {
		pageNumbers.push(i);
		console.log(i);
	}

	return (
		<nav className='pagination-container'>
			<ul>
				<li className='btn prev'>
					<span>Prev</span>
				</li>
				{pageNumbers.map(number => (
					<li
						className={`numb ${
							number === currentPage ? 'active' : ''
						}`}
						key={number}
					>
						<span>{number}</span>
					</li>
				))}
				<li className='btn next'>
					<span>Next</span>
				</li>
			</ul>
		</nav>
	);
};
export default Pagination;
