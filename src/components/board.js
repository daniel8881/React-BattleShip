import React from 'react';
import Square from './square';


export default props => {
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
