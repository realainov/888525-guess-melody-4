import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const onWelcomeButtonClick = () => {};

it(`WelcomeScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          errorQuantity={3}
          buttonClickHandler={onWelcomeButtonClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
