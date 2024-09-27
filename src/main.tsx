import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App.tsx';
import './index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')!,
);
