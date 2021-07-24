import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../src/styles/globalStyles';
import App from './Main';
import { Provider } from 'react-redux';
import store from './store/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
