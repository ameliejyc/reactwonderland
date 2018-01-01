import React, { Component } from 'react';
import {
  Section,
  MenuContainer,
  Title,
  Chevron,
  MenuList,
  List,
} from '../index.styles';

class Menu extends Component {
  state = {
    isClosed: true,
  };
  render() {
    const { isClosed } = this.state;

    const Toggle = () => {
      this.setState({ isClosed: !isClosed });
    };

    return (
      <Section id="menu">
        <div>
          <MenuContainer onClick={Toggle}>
            <Title>Menu</Title>
            <Chevron src="chevron.svg" isClosed={isClosed} />
          </MenuContainer>
          <MenuList isClosed={isClosed}>
            <List>About</List>
            <List>People</List>
            <List>Contact</List>
          </MenuList>
        </div>
      </Section>
    );
  }
}

export default Menu;
