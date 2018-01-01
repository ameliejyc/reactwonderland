import React, { Component } from 'react';
import {
  Section,
  Title,
  ShoppingContainer,
  Select,
  Textarea,
  Input,
  Button,
} from '../index.styles';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        'aubergine',
        'beetroot',
        'cashews',
        'damsons',
        'endives',
        'fennel',
        'grapefruit',
        'horchata',
        'imperator carrots',
      ],
      selections: '',
      extras: '',
    };
  }

  render() {
    const { options, selections, extras } = this.state;

    const handleSelectedOptions = event => {
      const selectedOptions = Array.from(event.target.selectedOptions).map(
        option => option.value
      );
      this.setState({
        selections: selections + selectedOptions + '\n',
      });
    };

    const handleExtraItems = event => {
      this.setState({
        extras: event.target.value,
      });
    };

    const handleSubmit = event => {
      console.log(this.state.extras);
      event.preventDefault();
      this.setState({
        options: [...options, extras],
        extras: '',
      });
    };

    return (
      <Section id="shoppinglist">
        <Title>Shopping List</Title>
        <ShoppingContainer>
          <label style={{ margin: '0 1em', color: 'pink' }}>
            Choose from the following:
            <Select
              multiple
              size={options.length}
              onChange={handleSelectedOptions}
            >
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </label>
          <label style={{ margin: '0 1em', color: 'pink' }}>
            Your list:
            <Textarea value={selections} rows={options.length + 1} />
          </label>
        </ShoppingContainer>
        <label style={{ color: 'pink' }}>
          Add another option:
          <Input long value={extras} onChange={handleExtraItems} />
        </label>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Section>
    );
  }
}

export default ShoppingList;
