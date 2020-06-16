import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

import {expect, it} from '@jest/globals';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`WelcomeButton should be pressed correctly`, () => {
  const welcomeButtonClickHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorQuantity={3}
        buttonClickHandler={welcomeButtonClickHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
});
