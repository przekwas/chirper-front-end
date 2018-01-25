import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//Render the app to the page!
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();