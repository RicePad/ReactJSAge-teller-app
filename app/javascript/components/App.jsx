import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import {Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {

	render(){
		return(
			<section className="App">
				<Form inline>
				   <h2>Age Teller App</h2>
				   
				   <FormControl type="date">
				   </FormControl>
				   {'   '}
				   <Button> Submit </Button>
				   </Form>	
			</section>
			)
	}

}


export default App;