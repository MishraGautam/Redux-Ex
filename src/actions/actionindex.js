import axios from 'axios'

export const apisuccess = (users)=>{
	return{
		type : 'API_SUCCESS',
		payload : users
	}
}

export const apifailure = (errormsg)=>{
	return{
		type : 'API_FAILURE',
		payload : errormsg
	}
}

export const fetchapi = ()=>{
	return (dispatch)=>{
		axios.get("https://jsonplaceholder.typicode.com/users")
	    .then(response => {
	    	const users = response.data
	    	dispatch(apisuccess(users))
	    })
	    .catch(error => {
	    	const errormsg = error.message
	    	dispatch(apifailure(errormsg))
	    })
	}
}

export const lighttheme = ()=>{
	const payload = {
		color : 'black',
		background : 'white'
	}
	return {
		type : 'LIGHT_THEME',
		payload
	}
}

export const darktheme = ()=>{
	const payload = {
		color : 'white',
		background : 'black'
	}
	return {
		type : 'DARK_THEME',
		payload
	}
}

export const smallsize = ()=>{
	return {
		type : 'SMALL_SIZE',
		fontsize : '10px'
	}
}

export const mediumsize = ()=>{
	return {
		type : 'MEDIUM_SIZE',
		fontsize : '20px'
	}
}

export const largesize = ()=>{
	return {
		type : 'LARGE_SIZE',
		fontsize : '30px'
	}
}

export const topleftbordersmall = ()=>{
	return {
		type : 'TOP_LEFT_BORDER_SMALL',
		sbr : "0px"		
	}	
}

export const topleftbordermedium = ()=>{
	return {
		type : 'TOP_LEFT_BORDER_MEDIUM',
		mbr : "16px"		
	}	
}

export const topleftborderlarge = ()=>{
	return {
		type : 'TOP_LEFT_BORDER_LARGE',
		lbr : "32px"		
	}	
}

export const topleftborderxlarge = ()=>{
	return {
		type : 'TOP_LEFT_BORDER_XLARGE',
		xlbr : "50px"		
	}	
}

export const toprightbordersmall = ()=>{
	return {
		type : 'TOP_RIGHT_BORDER_SMALL',
		sbr : "0px"		
	}	
}

export const toprightbordermedium = ()=>{
	return {
		type : 'TOP_RIGHT_BORDER_MEDIUM',
		mbr : "16px"		
	}	
}

export const toprightborderlarge = ()=>{
	return {
		type : 'TOP_RIGHT_BORDER_LARGE',
		lbr : "32px"		
	}	
}

export const toprightborderxlarge = ()=>{
	return {
		type : 'TOP_RIGHT_BORDER_XLARGE',
		xlbr : "50px"		
	}	
}

export const bottomleftbordersmall = ()=>{
	return {
		type : 'BOTTOM_LEFT_BORDER_SMALL',
		sbr : "0px"		
	}	
}

export const bottomleftbordermedium = ()=>{
	return {
		type : 'BOTTOM_LEFT_BORDER_MEDIUM',
		mbr : "16px"		
	}	
}

export const bottomleftborderlarge = ()=>{
	return {
		type : 'BOTTOM_LEFT_BORDER_LARGE',
		lbr : "32px"		
	}	
}

export const bottomleftborderxlarge = ()=>{
	return {
		type : 'BOTTOM_LEFT_BORDER_XLARGE',
		xlbr : "50px"		
	}	
}

export const bottomrightbordersmall = ()=>{
	return {
		type : 'BOTTOM_RIGHT_BORDER_SMALL',
		sbr : "0px"		
	}	
}

export const bottomrightbordermedium = ()=>{
	return {
		type : 'BOTTOM_RIGHT_BORDER_MEDIUM',
		mbr : "16px"		
	}	
}

export const bottomrightborderlarge = ()=>{
	return {
		type : 'BOTTOM_RIGHT_BORDER_LARGE',
		lbr : "32px"		
	}	
}

export const bottomrightborderxlarge = ()=>{
	return {
		type : 'BOTTOM_RIGHT_BORDER_XLARGE',
		xlbr : "50px"		
	}	
}