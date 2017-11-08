import React from 'react';

const Match = ({data}) => (
	<li className="match">
		<span className="match-number">{ data.match_number }</span>
		<h3>{ data.away_team.country } <span>vs</span> { data.home_team.country } </h3>
		<p>
			on <span className="match-time"> { data.datetime.split('T')[0] } </span> 
			at <span className="match-location">{ data.location }</span>
		</p>
		<div className={'match-result ' + (data.winner === 'Draw' ? 'match-draw' : '')}>
			{
				data.winner === 'Draw' ?
				<span>Draw</span> :
				<span>Winner: { data.winner }</span>
			}
		</div>
	</li>
);

export default Match;