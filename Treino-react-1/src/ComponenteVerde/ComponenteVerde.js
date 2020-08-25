import React from 'react';
import styled from 'styled-components';
import Input from './Input'

const FundoVerde = styled.div `
    background-color: green;

`
function ComponenteVerde() {
    return <FundoVerde>
    <h1>Treino React</h1>
    <Input />

    </FundoVerde>
}

export default ComponenteVerde;