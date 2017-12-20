import React from 'react';
import { Container, Section, Title, Link } from '../index.styles';
import Stopwatch from '../Stopwatch';
import Countdown from '../Countdown';
import Todo from '../Todo';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Welcome to Reactworld</Title>
        <div>
          <Link href="#stopwatch">Stopwatch</Link>
          <Link href="#countdown">Countdown</Link>
          <Link href="#todo">Todo</Link>
        </div>
      </Section>
      <Stopwatch />
      <Countdown />
      <Todo />
    </Container>
  );
};

export default Home;
