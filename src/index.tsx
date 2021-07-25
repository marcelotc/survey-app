import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../src/styles/globalStyles';
import App from './Main';
import { Provider } from 'react-redux';
import store from './store/';

window.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  root.id = "root";

  document.body.appendChild(root);

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </React.StrictMode>,
    root
  );
});
