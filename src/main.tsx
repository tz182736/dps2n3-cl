import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
    <CssBaseline /> */}
    <App />
  </ThemeProvider>
  ,
</React.StrictMode>,
)
