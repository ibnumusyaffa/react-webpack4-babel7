import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Container = styled.div`
  color: red;
`;
class App extends Component {
  render() {
    return <Container>App component</Container>;
  }
}

export default hot(module)(App);
