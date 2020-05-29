import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {lighttheme, darktheme, smallsize, mediumsize, largesize, topleftbordersmall, topleftbordermedium, topleftborderlarge, topleftborderxlarge, toprightbordersmall,
toprightbordermedium, toprightborderlarge, toprightborderxlarge, bottomleftbordersmall, bottomleftbordermedium, bottomleftborderlarge, bottomleftborderxlarge,
bottomrightbordersmall, bottomrightbordermedium, bottomrightborderlarge, bottomrightborderxlarge} from './actions/actionindex'
import {Form, FormGroup, Input, Label, Row, Col, Container, Button} from 'reactstrap'
import axios from 'axios'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './App.css'



function Reduxwithfunction(){
	const [results, setResults] = useState({})
	const themecolor = useSelector(state => state.themereducer)
	const themebackground = useSelector(state => state.themereducer)
	const fontsizesmall = useSelector(state => state.sizereducer)
	const topleft = useSelector(state=> state.bordertopleftreducer)
	const topright = useSelector(state=> state.bordertoprightreducer)
	const bottomleft = useSelector(state=> state.borderbottomleftreducer)
	const bottomright = useSelector(state=> state.borderbottomrightreducer)
	const dispatch = useDispatch();


	useEffect(()=>{ 
	    axios("https://jsonplaceholder.typicode.com/users")
	    .then(response => {setResults(response.data);})
	    .catch(error => {console.log(error)})
	},[])

	const renderSearchResults = () => {
		if (Object.keys(results).length && results.length) {
			return (
			<div>
		      {results.map((value,index) => {
	          	return (
	                <div className="content" style={{borderTopLeftRadius : topleft, borderTopRightRadius : topright, borderBottomLeftRadius : bottomleft, borderBottomRightRadius : bottomright}}>
	                <p style={{fontSize : fontsizesmall}}>
			  			Username : {value.username}<br/>
			            Name : {value.name}<br/>
			            Email :{value.email}<br/>
			            Address : City : {value.address.city}, Street : {value.address.street}, Zip Code : {value.address.zipcode}<br/>
			            Phone : {value.phone}
		            </p></div>
	            );
		       })}
			</div>
			);
	}};

	const handleSize = (value)=>{
		if(value === 10) dispatch(smallsize())
			else if(value === 20) dispatch(mediumsize())
				else if(value===30) dispatch(largesize())
	}

	const handleTopLeft = (value)=>{
		if(value === 0) dispatch(topleftbordersmall())
			else if(value === 16) dispatch(topleftbordermedium())
				else if(value===32) dispatch(topleftborderlarge())
					else if(value===50) dispatch(topleftborderxlarge())
	}

	const handleTopRight = (value)=>{
		if(value === 0) dispatch(toprightbordersmall())
			else if(value === 16) dispatch(toprightbordermedium())
				else if(value===32) dispatch(toprightborderlarge())
					else if(value===50) dispatch(toprightborderxlarge())
	}

	const handleBottomLeft = (value)=>{
		if(value === 0) dispatch(bottomleftbordersmall())
			else if(value === 16) dispatch(bottomleftbordermedium())
				else if(value===32) dispatch(bottomleftborderlarge())
					else if(value===50) dispatch(bottomleftborderxlarge())
	}

	const handleBottomRight = (value)=>{
		if(value === 0) dispatch(bottomrightbordersmall())
			else if(value === 16) dispatch(bottomrightbordermedium())
				else if(value===32) dispatch(bottomrightborderlarge())
					else if(value===50) dispatch(bottomrightborderxlarge())
	}

    return (
      <div style={{color : themecolor.color, background : themebackground.background}}>
        <Container>
          <Row>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleTopLeft} /></h1></Col>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleTopRight}/></h1></Col>
          </Row>
          <Row>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleBottomLeft}/></h1></Col>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleBottomRight}/></h1></Col>
          </Row>
          <br/><br/>
          <Row>
            <Col><Button color="primary" onClick={()=>dispatch(darktheme())}>Dark Theme</Button></Col>
      	    <Col><Button color="danger" onClick={()=>dispatch(lighttheme())}>Light Theme</Button></Col>
            <Col><Slider min={10} max={30} marks={{ 10: "1x", 20: "2x", 30: "3x" }} onChange={handleSize} step={null} /></Col>
          </Row>
        </Container>
        <br/><br/>
        <Row className="ml-5">
          <Col sm={2}>
           <Form>
            <FormGroup check><Label check><Input type="checkbox" />{' '}Name</Label></FormGroup><br/>
            <FormGroup check><Label check><Input type="checkbox" />{' '}Username</Label></FormGroup><br/>
            <FormGroup check><Label check><Input type="checkbox" />{' '}Address</Label></FormGroup><br/>
           </Form>
          </Col>
          <Col>{renderSearchResults()}</Col>
        </Row>
      </div> 
    );
}


export default Reduxwithfunction;
