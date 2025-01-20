import React from 'react';
import ReactDOM from 'react-dom/client';
import { lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import Router from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
