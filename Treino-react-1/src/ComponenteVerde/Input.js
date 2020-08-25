import React from 'react';
import styled from 'styled-components';

const InputQueImprime = styled.input.attrs ({
    type:"text",
})`
    border-style: none;
    padding: 5px;
    margin: 5px;
    border-radius: 6px;
`
const BotaoQueImprime = styled.button `
    border-style: none;
    padding: 5px;
    margin: 5px;
    border-radius: 6px;
    cursor: pointer;
    color: whitesmoke;
    background-color: purple;
    border: 2px solid purple;
    
:active {
    box-shadow: 5px 10px 20px red inset;
}
:hover{
    background-color: blueviolet;
}
`
const Parag = styled.p `
    margin: 10px;
    padding: 10px;
`


class Input extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             textoDigitado: ""
         };
     }

     updateTextoDigitado = event => {
         this.setState({textoDigitado: event.target.value})
     }
     onClickAdicionar = () => {
         const novoTexto = this.state.textoDigitado;
         this.setState({ textoDigitado: novoTexto })
         
     }

    render () {
      const textoInserido = this.state.textoDigitado 
            
    return    <div>
    <InputQueImprime 
    value={this.state.textoDigitado}
    onChange={this.updateTextoDigitado}
    />
    <BotaoQueImprime onClick={this.onClickAdicionar}>Imprime</BotaoQueImprime>
    <br/>
    <Parag>{textoInserido}</Parag> 
   </div>
   }
}

export default Input;