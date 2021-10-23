import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  countLetters = event => {
    const lettersInput = event.target.value
    this.setState({lettersCount: lettersInput.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="letters-calculator-bcg-container">
        <div className="letters-calculator-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="stop-watch-with-calculator-image"
          />
          <div className="letters-calculator-card-container">
            <h1 className="letters-calculator-card-container-heading">
              {' '}
              Calculate the Letters you enter
            </h1>
            <label
              htmlFor="inputLetter"
              className="letters-calculator-card-container-label"
            >
              {' '}
              Enter the phrase{' '}
            </label>
            <input
              type="text"
              className="input-letters-element"
              onChange={this.countLetters}
              placeholder="Enter the phrase"
              id="inputLetter"
            />
            <div className="letters-count-container">
              <p className="letters-count-text">
                {' '}
                No.of letters: {lettersCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
