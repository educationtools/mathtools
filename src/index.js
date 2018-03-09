import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppController from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <AppController/>
</BrowserRouter>, document.getElementById('root'));
