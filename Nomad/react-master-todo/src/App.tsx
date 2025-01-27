import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoList from './TodoList';
import Login from './Login';

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <>
    <GlobalStyle/>
    {/* <TodoList/> */}
    <Login/>
    </>
  );
}

export default App;
