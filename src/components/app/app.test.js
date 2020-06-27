import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questions = [
  {
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
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/A`,
        artist: `John Snow`
      }, {
        picture: `${AVATAR_URL}/AB`,
        artist: `Jack Daniels`
      }, {
        picture: `${AVATAR_URL}/AC`,
        artist: `Jim Beam`
      }
    ]
  }
];

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          errorQuantity={3}
          questions={questions}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
