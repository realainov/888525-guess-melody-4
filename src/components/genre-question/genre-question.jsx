import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Type} from '../../mocks/questions';

class GenreQuestion extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {answers} = this.state;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="timer"
            viewBox="0 0 780 780"
          >
            <circle
              className="timer__line" cx="390" cy="390" r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}
            />
          </svg>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {question.genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();

              onAnswer(question, this.state.answers);
            }}
          >
            {question.answers.map((answer, i) => (
              <div className="track" key={`${answer.src}-${i}`}>
                <button
                  className="track__button track__button--play"
                  type="button"
                />
                <div className="track__status">
                  <audio />
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    checked={answers[i]}
                    onChange={(evt) => {
                      const userAnswer = evt.currentTarget.checked;

                      this.setState({
                        answers: [...answers.slice(0, i), userAnswer, ...answers.slice(i + 1)]
                      });
                    }}
                  />
                  <label
                    className="game__check"
                    htmlFor={`answer-${i}`}
                  >Отметить</label>
                </div>
              </div>
            ))}

            <button
              className="game__submit button"
              type="submit"
            >Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestion.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf([Type.GENRE]),
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GenreQuestion;
