import React from "react";
import renderer from "react-test-renderer";

import ArtistQuestion from "./artist-question.jsx";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const question = {
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
};

it(`ArtistQuestion should render correctly`, () => {
  const tree = renderer
    .create(
        <ArtistQuestion
          question={question}
          onAnswer={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
