const bordertoprightreducer = (state = '', action)=>{
	switch (action.type) {
		case "TOP_RIGHT_BORDER_SMALL":
			return state = action.sbr;
			break;
		case "TOP_RIGHT_BORDER_MEDIUM":
			return state = action.mbr;
			break;
		case "TOP_RIGHT_BORDER_LARGE":
			return state = action.lbr;
			break;
		case "TOP_RIGHT_BORDER_XLARGE":
			return state = action.xlbr;
			break;
		default:
			return state
			break;
	}
}
export default bordertoprightreducer;