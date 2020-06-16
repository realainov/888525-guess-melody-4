import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const welcomeButtonClickHandler = () => {};

const App = (props) => {
  const {errorQuantity} = props;

  return (
    <WelcomeScreen
      errorQuantity={errorQuantity}
      buttonClickHandler={welcomeButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorQuantity: PropTypes.number.isRequired
};

export default App;
