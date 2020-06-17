import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const onWelcomeButtonClick = () => {};

const App = (props) => {
  const {errorQuantity} = props;

  return (
    <WelcomeScreen
      errorQuantity={errorQuantity}
      buttonClickHandler={onWelcomeButtonClick}
    />
  );
};

App.propTypes = {
  errorQuantity: PropTypes.number.isRequired
};

export default App;
