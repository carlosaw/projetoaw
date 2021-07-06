import React, { Component } from 'react';
import { Produtos } from '../../components/Cart/Produto/Produto';


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
			<div className="cart">
				<Produtos />

				<div className="compra">
					<div className="head">
						<div className="nomeProduto"><strong>Produto</strong></div>
						<div className="qtProduto">(Qt:...)</div>
					</div>
					<div className="precoProduto"><strong>Preço</strong></div>
				</div>

			</div>
		);		
	}
}