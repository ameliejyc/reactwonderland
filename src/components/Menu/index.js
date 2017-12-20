import React, { Component } from 'react';
import { Section, Title, Chevron, MenuList, List } from '../index.styles';

class Menu extends Component {
  state = {
    isClosed: true
  };
  render() {
    const { isClosed } = this.state;

    const Toggle = () => {
      this.setState({ isClosed: !isClosed });
    };

    return (
      <Section id="menu">
        <div onClick={Toggle}>
          <Title>Menu</Title>
          <Chevron src="./chevron.svg" isClosed={isClosed} />
        </div>
        <MenuList isClosed={isClosed}>
          <List>About</List>
          <List>People</List>
          <List>Contact</List>
        </MenuList>
      </Section>
    );
  }
}

export default Menu;
