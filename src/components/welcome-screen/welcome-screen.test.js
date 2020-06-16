import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

import {expect, it} from '@jest/globals';

const welcomeButtonClickHandler = () => {};

it(`WelcomeScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          errorQuantity={3}
          buttonClickHandler={welcomeButtonClickHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
