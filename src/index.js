import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {questions} from './mocks/questions';

const ERROR_QUANTITY = 3;

ReactDOM.render(
    <App
      errorQuantity={ERROR_QUANTITY}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
