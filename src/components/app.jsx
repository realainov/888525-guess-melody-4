import React from 'react';

import WelcomeScreen from './welcome-screen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorQuantity} = props;

  return (
    <WelcomeScreen
      errorQuantity={errorQuantity}
    />
  );
};

export default App;
