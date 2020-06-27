import React from "react";
import renderer from "react-test-renderer";

import GenreQuestion from "./genre-question";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    }
  ]
};

it(`GenreQuestion should render correctly`, () => {
  const tree = renderer
    .create(
        <GenreQuestion
          question={question}
          onAnswer={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
