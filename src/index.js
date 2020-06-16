import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const ERROR_QUANTITY = 3;

ReactDOM.render(
    <App
      errorQuantity={ERROR_QUANTITY}
    />,
    document.querySelector(`#root`)
);
