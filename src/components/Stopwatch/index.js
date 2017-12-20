import React, { Component } from 'react';
import { Section, Title, Button } from '../index.styles';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '0',
      running: false
    };
  }

  render() {
    const { duration, running } = this.state;

    const handleRunning = () => {
      this.setState(state => {
        if (state.running) {
          clearInterval(this.timer);
          this.setState({ running: false });
        } else {
          const startTime = Date.now() - this.state.duration;
          this.timer = setInterval(() => {
            this.setState({
              duration: Date.now() - startTime,
              running: true
            });
          });
        }
      });
    };

    const handleClear = () => {
      clearInterval();
      this.setState({ duration: 0, running: false });
    };

    return (
      <Section id="stopwatch">
        <Title>{duration}ms</Title>
        <div>
          <Button onClick={handleRunning}>{running ? 'Stop' : 'Start'}</Button>
          <Button onClick={handleClear}>Clear</Button>
        </div>
      </Section>
    );
  }
}

export default Stopwatch;
