import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Welcome from "./welcome.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`WelcomeButton should be pressed correctly`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <Welcome
        errorQuantity={3}
        onButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
});
