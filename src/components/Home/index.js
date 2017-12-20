import React from 'react';
import { Container, Section, Title, Link } from '../index.styles';
import Stopwatch from '../Stopwatch';
import Countdown from '../Countdown';
import Todo from '../Todo';
import Youtube from '../Youtube';
import Menu from '../Menu';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Reactwonderland</Title>
        <div>
          <Link href="#stopwatch">Stopwatch</Link>
          <Link href="#countdown">Countdown</Link>
          <Link href="#todo">Todo</Link>
          <Link href="#youtube">Youtube</Link>
          <Link href="#menu">Menu</Link>
        </div>
      </Section>
      <Stopwatch />
      <Countdown />
      <Todo />
      <Youtube />
      <Menu />
    </Container>
  );
};

export default Home;
