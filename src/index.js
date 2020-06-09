import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorCount={Settings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
