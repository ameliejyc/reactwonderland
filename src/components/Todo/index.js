import React, { Component } from 'react';
import { Section, Title, List, Input, Button } from '../index.styles';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: ['have a gr8 time with react']
    };
  }
  render() {
    const { text, items } = this.state;

    const handleInput = text => {
      this.setState({ text });
    };
    const handleClick = e => {
      e.preventDefault();
      this.setState({
        text: '',
        items: [...items, text]
      });
    };

    return (
      <Section id="todo">
        <Title>What to do?</Title>
        {this.state.items.map((item, index) => {
          return <List key={index}>{item}</List>;
        })}
        <Input
          todo
          value={this.state.text}
          onChange={e => handleInput(e.target.value)}
          placeholder="type here"
        />
        <Button onClick={handleClick}>Add it to the list</Button>
      </Section>
    );
  }
}

export default Todo;
