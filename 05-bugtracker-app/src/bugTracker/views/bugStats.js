import React from 'react';

let BugStats = ({bugs, bugsCount}) => {
	let closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	return (
		<section className="stats">
			<span className="closed">{closedCount}</span>
			<span> / </span>
			<span>{bugsCount}</span>
		</section>
	)
}
export default BugStats;