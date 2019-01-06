import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import usImage from './us.jpg';

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Ariel % Isabel</Title>
        <Regram>
          <img src={usImage} alt="us" />
          <div>
            <Hashtag
              href="https://www.instagram.com/cositawedding/"
              target="_blank"
            >
              #cositawedding
            </Hashtag>
          </div>
        </Regram>

        <Section>
          <Subtitle>SAVE THE DATE</Subtitle>

          <Address>
            Sábado, 20 de abril (4/20, yes!)
            <br /> Filadelfia, PA
          </Address>

          <div>
            RSVP antes del 5 de marzo a:
            <br />
            <a href="mailto:cositawedding@gmail.com">cositawedding@gmail.com</a>
          </div>
        </Section>
      </Container>
    );
  }
}

export default App;

const Section = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

const Hashtag = styled.a`
  font-size: 1.5rem;
  color: black !important;
  text-decoration: none;
  text-align: right;
  display: inline-block;
`;

const Regram = styled.div`
  position: relative;

  img {
    max-width: 100%;
  }

  div {
    position: absolute;
    line-height: 1;
    bottom: 3px;
    background-color: white;
    border-top-right-radius: 8px;
    padding-right: 4px;
    padding-top: 4px;
  }
`;

const Address = styled.address`
  margin-bottom: 10px;
`;
