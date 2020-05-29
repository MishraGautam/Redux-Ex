
const themereducer = (state = '', action)=>{
	switch (action.type) {
		case "DARK_THEME":
			return state = action.payload;
			break;
		case "LIGHT_THEME":
		return state = action.payload
		break;
		default:
			return state
			break;
	}
}

export default themereducer;