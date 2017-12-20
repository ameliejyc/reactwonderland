import React, { Component } from 'react';
import { Input } from '../index.styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    const onInputChange = term => {
      this.setState({ term });
      this.props.onSearchTermChange(term);
    };

    return (
      <div>
        <Input
          long
          value={this.state.term}
          onChange={e => onInputChange(e.target.value)}
          placeholder="Search for a video"
        />
      </div>
    );
  }
}

export default Search;
