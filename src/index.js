import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This wraps the App component with this Provider component
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(

  <Provider store={StoreInstance}>
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
