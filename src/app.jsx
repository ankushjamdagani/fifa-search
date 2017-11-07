import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

const App = ({loading, error, results}) => {
	return <div className="fifa-search">
		<div className="search-form-wrapper">
			<form className="search-form">
				<i className="fa fa-search" />
				<input type="text" placeholder="Search countries by FIFA code..." />
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
						<div className="status-code">
							{ error.statusCode }
						</div>
						<div className="status-text">
							{ error.statusText }
						</div>
					</div>
				)
			}
			{
				!loading && !error && (
					<div className="search-result-wrapper">
						{
							results && results.map((item,i) => {
								<li key={i}>
									{ item.location }
								</li>
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
		...state,
		...props
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		searchByCountry: dispatch(actions.searchByCountry)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
