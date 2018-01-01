import React from 'react';
import { Container, Section, Title, NavBar, Link } from '../index.styles';
import Stopwatch from '../Stopwatch/Stopwatch';
import Countdown from '../Countdown/Countdown';
import Todo from '../Todo/Todo';
import Youtube from '../Youtube/Youtube';
import Menu from '../Menu/Menu';
import Autocomplete from '../Autocomplete/Autocomplete';
import Form from '../Form/Form';
import ShoppingList from '../ShoppingList/ShoppingList';
import Tilt from '../Tilt/Tilt';

const Home = () => {
  return (
    <Container>
      <Section>
        <Tilt>
          <Title>Reactwonderland</Title>
        </Tilt>
        <NavBar>
          <Link href="#stopwatch">Stopwatch</Link>
          <Link href="#countdown">Countdown</Link>
          <Link href="#todo">Todo</Link>
          <Link href="#youtube">Youtube</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#autocomplete">Autocomplete</Link>
          <Link href="#form">Form</Link>
          <Link href="#shoppinglist">Shopping List</Link>
        </NavBar>
      </Section>
      <Stopwatch />
      <Countdown />
      <Todo />
      <Youtube />
      <Menu />
      <Autocomplete />
      <Form />
      <ShoppingList />
    </Container>
  );
};

export default Home;
