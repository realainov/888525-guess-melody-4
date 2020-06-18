import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`WelcomeScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          errorQuantity={3}
          onButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
