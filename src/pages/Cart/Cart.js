import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Produto } from '../../components/Cart/Produto/Produto';

export class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Produto />
			</div>
		);		
	}
}