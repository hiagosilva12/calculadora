import React, { Component } from "react";
import styled from "styled-components";
import Img from "./lixeira.png";

const BoxConteudo = styled.div `
background-color: #FFDEAD	;
display:flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 20%;
`

const Title = styled.h1`
  color: green;
  display: flex;
  justify-content: center;
`;
const BoxBotao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Imagem = styled.img`
  width: 60px;
`;

const Botao = styled.button `
  display: flex;
  font-size: 30px;
  -webkit-border-radius: 80px;
-moz-border-radius: 80px;
border-radius: 80px;
color: blue;
margin: 0.4rem;
text-tranform: uppercase;
&:hover {
  background-color: aqua;
}
`

const Elementos = styled.input `
  display: flex;
  justify-content: center;
  width: $input-width;
      height: 100%;
      padding-left: $space-xl * 1.2;
      padding-right: $space-m;
      font-size: $font-m;
      border-radius: $input-radius;
      border: $input-border;
      font-family: SemplicitaPro;
      color: $motif-base;
      caret-color: $grey-base;
      outline: none;
      box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.05);
`

class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  divisao = () => {
    this.setState({
      res: this.state.n1 / this.state.n2
    });
  };

  multiplicacao = () => {
    this.setState({
      res: this.state.n1 * this.state.n2
    });
  };
  subtracao = () => {
    this.setState({
      res: this.state.n1 - this.state.n2
    });
  };
  soma = () => {
    this.setState({
      res: this.state.n1 + this.state.n2
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      res: ""
    });
  };
  
  render() {
    return (
      <BoxConteudo>
        <Title>Calc App VnW</Title>
        <Elementos value={this.state.n1} onChange={this.handleChange1} />
        <Elementos value={this.state.n2} onChange={this.handleChange2} />
        <BoxBotao>
          <Botao onClick={this.divisao}>/</Botao>
          <Botao onClick={this.multiplicacao}>*</Botao>
          <Botao onClick={this.subtracao}>-</Botao>
          <Botao onClick={this.soma}>+</Botao>

          <Imagem onClick={this.clear} src={Img} />
        </BoxBotao>
        <h2>{this.state.res}</h2>
      </BoxConteudo>
    );
  }
}

export default App;
