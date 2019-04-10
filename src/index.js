import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from "./components/error-boundry";
import { ApiServiceProvider } from './components/api-service-context';
import {BrowserRouter as Router} from "react-router-dom";
import ApiService from "./services/api-service";

const apiService = new ApiService();

ReactDOM.render(
    <ErrorBoundry>
        <ApiServiceProvider value={apiService}>
            <Router>
                <App />
            </Router>
        </ApiServiceProvider>
    </ErrorBoundry>

    , document.getElementById('root'));
serviceWorker.unregister();
