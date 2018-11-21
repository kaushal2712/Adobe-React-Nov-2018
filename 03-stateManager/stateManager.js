var SM = (function(){
	var _state = null,
		_reducer = null,
		_listenerFns = [],
		__init_action = '@@INIT_ACTION';

	function getState(){
		return _state;
	}

	function subscribe(listenernFn){
		if (typeof listenernFn === 'function')
			_listenerFns.push(listenernFn);
	}

	function triggerChange(){
		_listenerFns.forEach(listenernFn => listenernFn());
	}

	function dispatch(action){
		var newState = _reducer(_state, action);
		if (newState === _state) return;
		_state = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_state = reducer(undefined, __init_action);
		return { getState, subscribe, dispatch };
	}

	return { createStore };
})();