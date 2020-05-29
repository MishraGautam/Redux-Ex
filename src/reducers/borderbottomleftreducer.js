
const borderbottomleftreducer = (state = '', action)=>{
	switch (action.type) {
		case "BOTTOM_LEFT_BORDER_SMALL":
			return state = action.sbr;
			break;
		case "BOTTOM_LEFT_BORDER_MEDIUM":
			return state = action.mbr;
			break;
		case "BOTTOM_LEFT_BORDER_LARGE":
			return state = action.lbr;
			break;
		case "BOTTOM_LEFT_BORDER_XLARGE":
			return state = action.xlbr;
			break;
		default:
			return state
			break;
	}
}
export default borderbottomleftreducer;


