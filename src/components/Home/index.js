import React from 'react';
import { Container, Section, Title, NavBar, Link } from '../index.styles';
import Stopwatch from '../Stopwatch';
import Countdown from '../Countdown';
import Todo from '../Todo';
import Youtube from '../Youtube';
import Menu from '../Menu';
import Autocomplete from '../Autocomplete';
import Form from '../Form';
import ShoppingList from '../ShoppingList/ShoppingList';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Reactwonderland</Title>
        <NavBar>
          <Link href="#stopwatch">Stopwatch</Link>
          <Link href="#countdown">Countdown</Link>
          <Link href="#todo">Todo</Link>
          <Link href="#youtube">Youtube</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#autocomplete">Autocomplete</Link>
          <Link href="#form">Form</Link>
          <Link href="#shoppinglist">ShoppingList</Link>
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
