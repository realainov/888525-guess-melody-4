import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestion from './genre-question.jsx';

configure({adapter: new Adapter()});

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

it(`Form should't sent when input changing`, () => {
  const onAnswer = jest.fn();

  const genreQuestionScreen = shallow(
      <GenreQuestion
        question={question}
        onAnswer={onAnswer}
      />
  );

  const inputSecondElement = genreQuestionScreen.find(`input`).at(1);

  inputSecondElement.simulate(`change`, {currentTarget: {checked: true}});

  expect(onAnswer).toHaveBeenCalledTimes(0);
});

it(`Input should call the callback correctly`, () => {
  const onAnswer = jest.fn();
  const userAnswer = [true, false, false, false];

  const genreQuestionScreen = shallow(
      <GenreQuestion
        question={question}
        onAnswer={onAnswer}
      />
  );

  const formElement = genreQuestionScreen.find(`form`);
  const inputFirstElement = genreQuestionScreen.find(`input`).at(0);

  inputFirstElement.simulate(`change`, {currentTarget: {checked: true}});
  formElement.simulate(`submit`, {preventDefault: () => {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(
      genreQuestionScreen.find(`input`).map((inputElement) => inputElement.prop(`checked`))
  ).toEqual(userAnswer);
});
