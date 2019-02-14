import React, { Component } from 'react';
import styled from 'styled-components';
import { complement } from 'polished';
import combinations from './combinations';

const Container = styled.section`
  background-color: #${props => props.backgroundColor};
  color: #${props => props.color};
  height: 100%;
  font-size: 10px;

  font-family: 'Scope One', serif;

  * {
    &::selection {
      background-color: ${props => complement(`#${props.backgroundColor}`)};
    }
  }
`;

export default class extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      currentIndex: props.combination
        ? parseInt(props.combination)
        : Math.floor(Math.random() * combinations.length)
    };
  }

  getNewColorCombination() {
    if (this.state.currentIndex === combinations.length - 1) {
      return 0;
    }

    return this.state.currentIndex + 1;
  }

  render() {
    const currentCombination = combinations[this.state.currentIndex];

    const { Page } = this.props;

    return (
      <Container
        backgroundColor={currentCombination[0]}
        color={currentCombination[1]}
      >
        <Page
          currentCombination={currentCombination}
          nextCombination={this.getNewColorCombination()}
        />
      </Container>
    );
  }
}
