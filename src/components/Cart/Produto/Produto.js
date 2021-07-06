import React from 'react';

export class Produto extends React.Component {
  
	adicionar = ()=> {
    alert('clicou '+this.props.name+'estoque: '+this.props.stock+ 'preço: '+this.props.price);
  }

  render() {
    return (
      <div className="produto">
        <h4>{this.props.name}</h4>
        <h5>Estoque: {this.props.stock}</h5>
				<p>R$ {this.props.price}</p>	
				<button onClick={this.adicionar}>Adicionar ao Carrinho</button>
      </div>
    );
  }
}
export class Produtos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos:[
        {id:1, name:'Teclado', stock:10, price:199},
        {id:2, name:'Mouse', stock:11, price:29},
        {id:3, name:'Monitor', stock:12, price:399.00},
        {id:4, name:'CPU', stock:13, price:49},
      ]
    };
  }

  render() {
    return (
    <div className="produtos">
      {this.state.produtos.map((item)=>
        <Produto key={item.id} name={item.name} stock={item.stock} price={item.price} />
      )}
    </div>
    );
  }
}