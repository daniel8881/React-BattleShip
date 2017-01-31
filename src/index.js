/** @file index.js
    @brief a simple react battleship game

    @author Daniel Lin
    @date Jan/21/2017 */



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import components
import Header from './components/header';
import Board from './components/board';
import Scoreboard from './components/scoreboard';
import ShipsList from './components/shipslist';

// import JSON data
import data from './data';

// import helper function
import { calculateWinScore, generateBoard, setUpBoard, generateShipSize } from './helper';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: setUpBoard(generateBoard(), data),
      totalScore: 0,
      shipScore: generateShipSize(data)
    }
    
    this.winScore = calculateWinScore(data);
    
    // make sure all the context is correct
    this.handleClick = this.handleClick.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart() {
    const newState = {
      board: setUpBoard(generateBoard(), data),
      totalScore: 0,
      shipScore: generateShipSize(data)
    }
    this.setState(newState);
  }

  handleClick(x, y) {
    // avoid state mutation
    const board = this.state.board.slice();
    const newShipScore = Object.assign({}, this.state.shipScore);
    const value = board[x][y];
    
    if(this.state.totalScore === this.winScore) {
      return;
    }

    if(value && value !== 'miss') {
      if(value === 'hit'){
        return;
      }

      newShipScore[value]--;
      let newScore = this.state.totalScore + 1;
      
      board[x][y] = 'hit';
      
      this.setState({
        board,
        shipScore: newShipScore,
        totalScore: newScore,
      })

    } else {
      board[x][y] = 'miss';
      this.setState({ board });
    }    
  }

  render() {

    let msg = 'Welcome to BattleShip';
    if(this.state.totalScore === this.winScore) {
      msg = 'You Win'
    }

    return (
      <div>
        <Header msg={msg} restart={this.restart} />
        <div className='game'>      
           <Board value={this.state.board} handleClick={this.handleClick}/>
          <div className='info'>
            <Scoreboard score={this.state.totalScore} />
            <ShipsList shipscore={this.state.shipScore}  />
          </div>

        </div>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
