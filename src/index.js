import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Root from 'root';
import App from 'components/App';

ReactDOM.render(
    <Root >
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);