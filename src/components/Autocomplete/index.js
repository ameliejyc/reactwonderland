import React, { Component } from 'react';
import { Section, Title, Input } from '../index.styles';

class Autocomplete extends Component {
  render() {
    return (
      <Section id="autocomplete">
        <Title>Autocomplete</Title>
        <Title small>Search for a poem</Title>
        <Input long />
      </Section>
    );
  }
}

export default Autocomplete;
