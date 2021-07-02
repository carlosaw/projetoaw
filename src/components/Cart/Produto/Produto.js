import React, { Component } from 'react';

export class Produto extends Component {

	render() {
		return (
			<div className="container">
				<div className="left">
					<div className="produto disabled">
						<strong>Teclado</strong>
						<p>Estoque: 2</p>
						<div class="preco">
							<strong>R$ 28,00</strong>
						</div>
						<button>Adicionar ao carrinho</button>
					</div>

					<div className="produto">
						<strong>Mouse</strong>
						<p>Estoque: 5</p>
						<div class="preco">
							<strong>R$ 36,00</strong>
						</div>
						<button>Adicionar ao carrinho</button>
					</div>

					<div className="produto">
						<strong>Monitor</strong>
						<p>Estoque: 3</p>
						<div class="preco">
							<strong>R$ 299,99</strong>
						</div>
						<button>Adicionar ao carrinho</button>
					</div>

					<div className="produto">
						<strong>CPU</strong>
						<p>Estoque: 0</p>
						<div class="preco">
							<strong>R$ 1.099,00</strong>
						</div>
						<button>Adicionar ao carrinho</button>
					</div>
				</div>

				<div className="cart">
					<div className="prods">
						<div>
							<strong>Teclado</strong>
							<p>(Qt:3)</p>
						</div>
						<div>
							<strong>R$ 39,00</strong>
						</div>
					</div>
					<div className="line"></div>
					<div className="total">Total R$ </div>
				</div>
				
			</div>
			
		);
	}
}