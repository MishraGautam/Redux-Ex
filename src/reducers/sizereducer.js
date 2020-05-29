
const sizereducer = (state = '', action)=>{
	switch (action.type) {
		case "SMALL_SIZE":
			return state = action.fontsize;
			break;
		case "MEDIUM_SIZE":
			return state = action.fontsize;
			break;
		case "LARGE_SIZE":
			return state = action.fontsize;
			break;
		default:
			return state
			break;
	}
}

export default sizereducer;