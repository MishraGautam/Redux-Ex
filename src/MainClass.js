import React, {Component} from 'react';
import {connect} from 'react-redux';
import {lighttheme, darktheme, smallsize, mediumsize, largesize, topleftbordersmall, topleftbordermedium, topleftborderlarge, topleftborderxlarge, toprightbordersmall,
toprightbordermedium, toprightborderlarge, toprightborderxlarge, bottomleftbordersmall, bottomleftbordermedium, bottomleftborderlarge, bottomleftborderxlarge,
bottomrightbordersmall, bottomrightbordermedium, bottomrightborderlarge, bottomrightborderxlarge} from './actions/actionindex'
import {Form, FormGroup, Input, Label, Row, Col, Container, Button} from 'reactstrap'
import axios from 'axios'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './App.css'


class MainClass extends Component{
	constructor(props){
		super(props);
		this.state={
			results : [],
		}
	}

	componentDidMount() {
		const {results}= this.state;
	    axios("https://jsonplaceholder.typicode.com/users")
	    .then(response => {this.setState({results : response.data})})
	    .catch(error => {console.log(error)})
	}

	renderSearchResults = () => {
		const {results} = this.state;
		const {fontsize, topleft, topright, bottomleft, bottomright} = this.props;
		if (Object.keys(results).length && results.length) {
			return (
			<div>
		      {this.state.results.map((value,index) => {
	          	return (
	                <div className="content" style={{borderTopLeftRadius : topleft, borderTopRightRadius : topright, borderBottomLeftRadius : bottomleft, borderBottomRightRadius : bottomright}}>
	                <p style={{fontSize : fontsize}}>
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

	render(){
		const {theme, updateDarkTheme, updateLightTheme, handleSize, handleTopLeft,handleBottomLeft,handleTopRight,handleBottomRight } = this.props;
    return (
      <div style={{color : theme.color, background : theme.background}}>
        <Container>
          <Row>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleTopLeft}/></h1></Col>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleTopRight}/></h1></Col>
          </Row>
          <Row>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleBottomLeft}/></h1></Col>
            <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handleBottomRight}/></h1></Col>
          </Row>
          <br/><br/>
          <Row>
            <Col><Button color="primary" onClick={updateDarkTheme}>Dark Theme</Button></Col>
      	    <Col><Button color="danger" onClick={updateLightTheme}>Light Theme</Button></Col>
            <Col><Slider min={10} max={30} marks={{ 10: "1x", 20: "2x", 30: "3x" }} step={null} onChange={handleSize}/></Col>
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
          <Col>{this.renderSearchResults()}</Col>
        </Row>
      </div> 
    );
}}

const mapStateToProps = (state) => {
    return {theme: state.themereducer,
    		fontsize : state.sizereducer,
    		topleft : state.bordertopleftreducer,
    		topright : state.bordertoprightreducer,
    		bottomleft : state.borderbottomleftreducer,
    		bottomright : state.borderbottomrightreducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDarkTheme: ()=> dispatch(darktheme()),
        updateLightTheme : ()=>dispatch(lighttheme()),
        handleSize : (value)=>{
		if(value === 10) dispatch(smallsize())
			else if(value === 20) dispatch(mediumsize())
				else if(value===30) dispatch(largesize())
		},
		handleTopLeft : (value)=>{
		if(value === 0) dispatch(topleftbordersmall())
			else if(value === 16) dispatch(topleftbordermedium())
				else if(value===32) dispatch(topleftborderlarge())
					else if(value===50) dispatch(topleftborderxlarge())
		},

		handleTopRight : (value)=>{
		if(value === 0) dispatch(toprightbordersmall())
			else if(value === 16) dispatch(toprightbordermedium())
				else if(value===32) dispatch(toprightborderlarge())
					else if(value===50) dispatch(toprightborderxlarge())
		},

		handleBottomLeft : (value)=>{
		if(value === 0) dispatch(bottomleftbordersmall())
			else if(value === 16) dispatch(bottomleftbordermedium())
				else if(value===32) dispatch(bottomleftborderlarge())
					else if(value===50) dispatch(bottomleftborderxlarge())
		},

		handleBottomRight : (value)=>{
		if(value === 0) dispatch(bottomrightbordersmall())
			else if(value === 16) dispatch(bottomrightbordermedium())
				else if(value===32) dispatch(bottomrightborderlarge())
					else if(value===50) dispatch(bottomrightborderxlarge())
		}
	}
}

const Reduxwithclass = connect(mapStateToProps, mapDispatchToProps)(MainClass);

export default Reduxwithclass;
