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
			result : []
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
		if (Object.keys(results).length && results.length) {
			return (
			<div>
		      {this.state.results.map((value,index) => {
	          	return (
	                <div className="content">
	                <p>
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
    return (
      <div>
      	<Container>
      	<h1>My name is gautam mishra</h1>
          <Row>
            <Col><Button color="primary">Dark Theme</Button></Col>
      	    <Col><Button color="danger">Light Theme</Button></Col>
            <Col><Slider min={10} max={30} marks={{ 10: "1x", 20: "2x", 30: "3x" }} step={null} /></Col>
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
          <Col>{this.renderSearchResults}</Col>
        </Row>
      </div> 
    );
}}

const Reduxwithclass = connect()(MainClass);

export default Reduxwithclass;
