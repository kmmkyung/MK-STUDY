import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';
import styled, { createGlobalStyle } from 'styled-components';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
  a {
    text-decoration:none;
    color: inherit;
  }
  /* html { font-size: 62.5%;} */
`;

const ThemeBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  font-size: 25px;
  border-radius: 50%;
  position: fixed;
  left: 20px;
  bottom: 20px;
`;

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <>
      <ThemeProvider theme={theme ? light : dark}>
        <GlobalStyle />
        <Outlet context={{ theme }} />
        <ThemeBtn onClick={() => setTheme((current) => !current)}>
          {theme ? '🌝':'🌞'}
        </ThemeBtn>
        </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen={true}/> */}
    </>
  );
}

export default App;


