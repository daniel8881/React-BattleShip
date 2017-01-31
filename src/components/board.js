import React, { PropTypes } from 'react';
import Square from './square';


const Board = props => {
  const renderSquares = () => {
    let squares = [];
    let key = 0;
    for(let x = 0; x < 10; x++) {
      for(let y = 0; y < 10; y++) {
        squares.push(<Square value={props.value[x][y]} key={key++} onClick={() => props.handleClick(x, y)} />)
      }
    }
    return squares;
  }

  return (
    <div className='board'>
      {renderSquares()}
    </div>
  )
};

Board.propTypes = {
  value: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Board;
