import React, { Component } from 'react';

export class Produto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teclado:{name:'Teclado', estoque:10, preco:41},
			qt:this.props.qt,
		};
	}
	
	render() {
		return (
			<div className="container">

				<div className="left">
					<div className="produto">
						<strong>{this.state.teclado.name}</strong>
						<p>Estoque: {this.state.teclado.estoque}</p>
						<div class="preco">
							<strong>R$ {this.state.teclado.preco}</strong>
						</div>
						<button>Adicionar ao carrinho</button>
					</div>
				</div>

				<div className="cart">
					<div className="prods">
						<div>
							<strong>Pega nome do prod add ao clicar em add</strong>
							<p>Qtde: pega a qtde do prod add</p>
						</div>
						<div>
							<strong>R$ pega o preço do prod add</strong>
						</div>
					</div>
					<div className="line"></div>
					<div className="total">Total R$ Pega a soma dos prods</div>
				</div>
				
			</div>
			
		);
	}
}