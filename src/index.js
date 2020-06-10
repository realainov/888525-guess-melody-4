import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';

const Settings = {
  ERROR_QUANTITY: 3
};

ReactDOM.render(
    <App
      errorQuantity={Settings.ERROR_QUANTITY}
    />,
    document.querySelector(`#root`)
);
