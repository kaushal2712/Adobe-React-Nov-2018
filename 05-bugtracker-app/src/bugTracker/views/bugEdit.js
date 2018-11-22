import React, { Component } from 'react';

class BugEdit extends Component {
	newBugName = '';
	render(){
		let { addNew } = this.props;
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={evt => this.newBugName = evt.target.value} />
				<input type="button" value="Add New" onClick={() => addNew(this.newBugName)}/>
			</section>
		)
	}
}
export default BugEdit;