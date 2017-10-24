import React, { Component } from 'react';


class DisplayAge extends Component {
	render(){
		return (
			<div>
				<h1>{this.props.date}</h1>	
			</div>
			)

	}

} 


export default DisplayAge;