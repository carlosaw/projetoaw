import React from 'react';
export class Produto extends React.Component {
  render() {
    return (
      <div className="produto">
        <h4>{this.props.nome}</h4>
        <h5>Estoque: {this.props.estoque}</h5>
				<p>R$ {this.props.price}</p>	
				<button>Adicionar ao Carrinho</button>
      </div>
    );
  }
}
export class Produtos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos:[
        {id:1, nome:'Teclado', estoque:10, price:199},
        {id:2, nome:'Mouse', estoque:11, price:29},
        {id:3, nome:'Monitor', estoque:12, price:399.00},
        {id:4, nome:'CPU', estoque:13, price:49},
      ]
    };
  }

  render() {
    return (
    <div className="produtos">
      {this.state.produtos.map((item)=>
        <Produto key={item.id} nome={item.nome} estoque={item.estoque} price={item.price} />
      )}
    </div>
    );
  }
}