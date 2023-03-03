import React, { Component } from 'react';


import styled from "styled-components";
import backgroundMain from "./files/back5.png";

const Img = styled.img`
width: 40vw;
z-indez: 0;
position: fixed;
`
const Container = styled.section`
width: 100vw;
height: 100vh; 
background-color: #e4342a;
display: flex;
align-items: center;
justify-content: center;
`
const BoxBackground = styled.div`
width: 40vw;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
`
const H2 = styled.h2`
font-size: 3.5em;
color: white;
text-align: center;
`
const BoxView = styled.div`
width: 18vw;
height: 32vh;
border-radius: 2vh;
z-index: 1;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
margin-bottom: 1rem;
`
const BoxNumber = styled.div`
width: 18vw;
height: 13vh;
display: flex;
align-items: center;
justify-content: center;
`

const BoxButtom = styled.div`
width: 18vw;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const ButtonView = styled.button`
width: 3.5vw;
height: 5vh;
font-size: 1.4rem;
text-align: center;
border-radius: 10vh;
background-color: black;
border: solid white;
color: white;
`

class Contador extends Component {
  
  state = {
    numero: 0,
    Arquivos: [
      {
        background: `${backgroundMain}`,
        simboloMais: " + ",
        simboloMenos: " - ",
      }
    ]
  }

 
  adicionar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remover = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

 
  render() {
    return (
      <Container>

        <BoxBackground>
          <Img className="backgroundMain" src={this.state.Arquivos[0].background} alt="" />
          <BoxView>
            <BoxNumber>
              <H2>{this.state.numero}</H2>
            </BoxNumber>

            <BoxButtom>
              <ButtonView onClick={this.adicionar}>+</ButtonView>

              <ButtonView onClick={this.remover}>-</ButtonView>
            </BoxButtom>

          </BoxView>

        </BoxBackground>
      </Container>
    )
  }
} export default Contador