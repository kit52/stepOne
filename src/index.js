import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import state from './State/State';
ReactDOM.render(<App props={state} />, document.getElementById('root'));
registerServiceWorker();
