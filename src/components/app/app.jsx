import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Welcome from '../welcome/welcome.jsx';
import GenreQuestion from '../genre-question/genre-question.jsx';
import ArtistQuestion from '../artist-question/artist-question.jsx';

import {Type} from '../../mocks/questions';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGame() {
    const {errorQuantity, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step < 0 || step >= questions.length) {
      return (
        <Welcome
          errorQuantity={errorQuantity}
          onButtonClick={() => this.setState({step: 0})}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case Type.ARTIST:
          return (
            <ArtistQuestion
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({step: prevState.step + 1}));
              }}
            />
          );

        case Type.GENRE:
          return (
            <GenreQuestion
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({step: prevState.step + 1}));
              }}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    const firstArtistQuestion = questions.find((question) => question.type === Type.ARTIST);
    const firstGenreQuestion = questions.find((question) => question.type === Type.GENRE);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGame()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestion
              question={firstArtistQuestion}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestion
              question={firstGenreQuestion}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorQuantity: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
