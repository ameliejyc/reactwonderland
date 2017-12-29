import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  background-color: #d8962e;
  background-image: linear-gradient(
    180deg,
    #d8962e 0%,
    #d0663f 60%,
    #ad0e0e 100%
  );
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${props => (props.small ? '1em' : '3em')};
  text-align: center;
  color: white;
  margin-bottom: 0.5em;
`;

export const Link = styled.a`
  color: white;
  font-size: 2em;
  margin: 0 0.5em;

  &:hover {
    color: lightpink;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  font-size: ${props => (props.long ? '1.5em' : '2em')};
  text-align: center;
  width: ${props => (props.long ? '70vw' : '2em')};
  margin: 0.5em;
  padding: 0.5em;
  border: 2px white solid;

  &:focus {
    background-color: lemonchiffon;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  font-size: 2em;
  padding: 1em;
  margin: 0.5em;
  border: 8px white solid;
  background-color: lightpink;
`;

export const List = styled.li`
  font-size: 1em;
  color: lightpink;
  margin: 0.5em;
`;

export const VideoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const VideoItem = styled.div`
  margin: 1em;
  border: white;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Chevron = styled.img`
  width: 50px;
  color: white;
  margin-left: 1em;
  transform: ${props => (props.isClosed ? 'none' : 'rotate(180deg)')};
  transition: transform 0.6s;
`;

export const MenuList = styled.ul`
  display: ${props => (props.isClosed ? 'none' : 'block')};
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
`;
