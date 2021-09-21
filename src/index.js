import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/font-awesome/4.5.0/css/font-awesome.min.css';
import './assets/css/fonts.googleapis.com.css';
import './assets/css/ace.min.css';
import './assets/css/ace-skins.min.css';
import './assets/css/ace-rtl.min.css';
import './assets/css/styles-app-loading.css';

//store trong redux
import {store } from './app/storeReducer'
import {Provider} from 'react-redux'


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
  
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
