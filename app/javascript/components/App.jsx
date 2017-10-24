import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import {Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			newDate: '',
			birthDate: '01-02-1996'


		}
	}


	changeBirthday(){
		console.log(this.state);
		this.setState({ birthDate: this.state.newDate})
	}

	render(){
		return(
			<section className="App">
				<Form inline>
				   <h2>Age Teller App</h2>
				   
				   <FormControl 
				   	type="date"
				   	onChange= {(event) => this.setState({ newDate: event.target.value})}
				   	>
				   </FormControl>
				   {'   '}
				   <Button onClick= {() => this.changeBirthday()}> Submit </Button>
				   </Form>	
			</section>
			)
	}

}


export default App;