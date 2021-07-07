import React, { Component } from 'react';
import { Produtos } from '../../components/Cart/Produto/Produto';
import { Cart } from '../../components/Cart/Produto/Produto';

export class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	
	render() {
		return (
			<div className="cart">
				<Produtos />

				<Cart />

			</div>
		);		
	}
}