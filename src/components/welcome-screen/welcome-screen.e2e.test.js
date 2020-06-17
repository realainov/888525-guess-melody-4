import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`WelcomeButton should be pressed correctly`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorQuantity={3}
        buttonClickHandler={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
