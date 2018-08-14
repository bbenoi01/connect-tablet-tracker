import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './indexes/appIndex';
import rootStore from './rootStore';

render(
    <Provider store = { rootStore }>
        <App />
    </Provider>,
    document.getElementById('root')
);