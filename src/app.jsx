import React from 'react';
import { connect } from 'react-redux';

import { Match } from './components';

import actions from './actions';

const App = ({loading, error, results, searchByCountry}) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		let _searchCountry = e.target.searchValue.value.toUpperCase();
		if(_searchCountry)
			searchByCountry(_searchCountry);
	}

	return <div className="fifa-search">
		<div className="search-form-wrapper">
			<form className="search-form" onSubmit={handleFormSubmit}>
				<i className="fa fa-search" />
				<input type="text" name="searchValue" autoFocus placeholder="Search countries by FIFA code..." />
				<input type="submit" value="Search" />
			</form>
		</div>
		<div className="search-result-wrapper">
			{
				loading && (
					<div className="loader-wrapper">
						<div className="loader-circle">
						</div>
					</div>
				)
			}
			{
				!loading && error && (
					<div className="error-wrapper">
						<div className="status-code">Oops... ;(</div>
						<div className="status-text">
							{ error + '' }
						</div>
					</div>
				)
			}
			{
				!loading && !error && (
					<div className="search-result-items">
						{
							results && results.map((item,i) => {
								return <Match data={item} key={i} />
							})
						}
					</div>
				)
			}
		</div>
	</div>
};

const mapStateToProps = (state, props) => {
	return {
		...state.search
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		searchByCountry: url => dispatch(actions.searchByCountry(url))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
