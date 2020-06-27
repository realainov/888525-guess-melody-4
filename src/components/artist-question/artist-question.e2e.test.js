import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestion from './artist-question';

configure({adapter: new Adapter()});

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

it(`Input should call the callback correctly`, () => {
  const onAnswer = jest.fn();
  const [userAnswer] = question.answers;

  const artistQuestionScreen = shallow(
      <ArtistQuestion
        question={question}
        onAnswer={onAnswer}
      />
  );

  const inputElement = artistQuestionScreen.find(`input`).first();

  inputElement.simulate(`change`, {preventDefault: () => {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
