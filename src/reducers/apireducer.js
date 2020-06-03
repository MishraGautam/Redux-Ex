const initialstate = {
	users : [],
	error : ''
}

const apireducer = (state = initialstate, action) => {
	switch(action.type){
		case 'API_SUCCESS':
		return {
			users : action.payload,
			error : ''
		}
		case 'API_FAILURE':
		return {
			users : [],
			error : action.payload
		}
		default : return state
	}
}

export default apireducer;