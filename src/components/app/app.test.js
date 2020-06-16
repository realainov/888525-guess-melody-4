import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import {expect, it} from '@jest/globals';

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App errorQuantity={3}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
