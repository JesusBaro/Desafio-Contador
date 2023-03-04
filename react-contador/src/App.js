//As partes comentadas são experimentos, porém as partes do desafio está completo.
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2




import React, { Component } from 'react';
import styled from "styled-components";
import backgroundMain from "./files/back5.png";

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
background-image:url(${backgroundMain});
background-size:contain;
background-position: center;
background-repeat: no-repeat;
`
const H2 = styled.h2`
font-size: 3.5em;
color: white;
text-align: center;`

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
height: 20vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap:wrap;
`
const ButtonView = styled.button`

  width: 7vw;
  height: 5.5vh;
  font-size: 1rem;
  text-align: center;
  border-radius: 10vh;
  background-color: black;
  border:transparent;
  color: white;
  transition: all 0.5s ease-in-out;

  &:focus {
    color: tomato;
    opacity: 0.9;
  }`

class Contador extends Component {

  state = {
    numero: 0
  }


  adicionar = () => {
    const reset = setInterval(() => {
      if (this.state.numero < 10) {
        this.setState({
          numero: this.state.numero + 1
        });
      }

    }, 1000);
    this.reset = () => {
      clearInterval(reset)
      this.setState({
        numero: this.state.numero
      });
    }

  };

  return = () => {
    setInterval(() => {
      if (this.state.numero > 0) {
        this.setState({
          numero: this.state.numero - 1
        });
      }
    }, 1000);    
  }


  //------
  //TENTANDO FAZER COM QUE QUANDO A FUNÇÃO CHEGAR A ZERO ELA PARE SÓZINHA

  // return = () => {
  //   setInterval(() => {
  //     if (this.state.numero > 0) {
  //       this.setState({
  //         numero: this.state.numero - 1
  //       });
  //       if (this.state.numero = 0) {
  //         this.setState({
  //           numero: "finalizado"
  //         });
  //       }
  //     }
  //   }, 1000);
  // }




  render() {
    return (
      <Container>

        <BoxBackground>
          <BoxView>
            <BoxNumber>
              <H2>{this.state.numero}</H2>
            </BoxNumber>

            <BoxButtom>
              <ButtonView onClick={this.adicionar}>Go</ButtonView>
              <ButtonView onClick={this.return}>Return</ButtonView>
              <ButtonView onClick={this.reset}>Stop</ButtonView>
              {/* <ButtonView >Clear</ButtonView>*/}

            </BoxButtom>
          </BoxView>

        </BoxBackground>
      </Container>
    )
  }
} export default Contador