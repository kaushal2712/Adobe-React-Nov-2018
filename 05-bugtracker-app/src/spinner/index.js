import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var spinnerActionCreators = {
	up(value=1){
		let action = { type : 'UP', payload : value };
		return action;
	},
	down(value=1){
		let action = { type : 'DOWN', payload : value };
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLEUP'};
		return action;
	}
}

class Spinner extends Component{
	txtDeltaRef = React.createRef();
	render(){
		let { value, up, down, doubleUp } = this.props;
		return(
			<div>
				<input type="number" ref={this.txtDeltaRef} />
				<br/>
				<input type="button" value="DOWN" onClick={() => down(this.txtDeltaRef.current.valueAsNumber || 1)}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={() => up(this.txtDeltaRef.current.valueAsNumber || 1)}/>
				<input type="button" value="DOUBLE-UP" onClick={() => doubleUp()}/>
			</div>
		);
	}
}

/* Data Extraction from state for spinner*/
function mapStateToSpinnerProps(appState){
	let value = appState.spinnerData;
	return { value : value };
}

/* Action Creation for Spinner*/
function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);	
	return spinnerActions;
}
export default connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);
