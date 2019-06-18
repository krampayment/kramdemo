import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-142316503-1');

ReactDOM.render(<App />, document.querySelector('#root'));