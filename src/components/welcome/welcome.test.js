import React from "react";
import renderer from "react-test-renderer";
import Welcome from "./welcome.jsx";

it(`Welcome should render correctly`, () => {
  const tree = renderer
    .create(
        <Welcome
          errorQuantity={3}
          onButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
