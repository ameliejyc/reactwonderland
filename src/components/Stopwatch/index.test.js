import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stopwatch />, div);
});
