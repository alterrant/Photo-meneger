import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { store } from "./store";

import {AppContainer} from "./app-container";

import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
