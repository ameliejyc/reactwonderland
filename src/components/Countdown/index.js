import React, { Component } from 'react';
import { Section, Input, Button } from '../index.styles';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 60,
      active: false
    };
  }
  render() {
    const onMinutesInput = minutes => {
      this.setState({ minutes });
    };

    const onSecondsInput = seconds => {
      this.setState({ seconds });
    };

    const handleClick = () => {
      if (this.state.active) {
        this.setState({ active: false });
        clearInterval(this.timer);
      } else {
        this.setState({ active: true });
        this.timer = setInterval(() => {
          handleCountdown(this.state.minutes, this.state.seconds);
        }, 1000);
      }
    };

    const handleCountdown = (minutes, seconds) => {
      if (seconds === 0 && minutes === 0) {
        clearInterval();
      } else if (seconds === 0 && minutes !== 0) {
        this.setState({
          minutes: minutes - 1,
          seconds: '59'
        });
      } else {
        this.setState({
          seconds: seconds - 1
        });
      }
    };

    return (
      <Section id="countdown">
        <div>
          <Input
            type="number"
            value={this.state.minutes}
            onChange={e => onMinutesInput(e.target.value)}
            min="0"
            max="999"
          />
          <strong>minutes</strong>
          <Input
            type="number"
            value={this.state.seconds}
            onChange={e => onSecondsInput(e.target.value)}
            min="0"
            max="60"
          />
          <strong>seconds</strong>
        </div>
        <Button onClick={handleClick}>
          {this.state.active ? 'Stop' : 'Start'} the countdown
        </Button>
      </Section>
    );
  }
}

export default Countdown;
