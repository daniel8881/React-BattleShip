import React from 'react';


export default ({score}) => {
  return (
    <div className='info__scoreboard'>
      <div className='info__panel--orange info__panel'>
        <div className='info__score'>
          <h1>{score > 10 ? score : `0${score}`}</h1>
        </div>
        <div>
          <h2>player 1</h2>
        </div>
      </div>
      <div className='info__panel--green info__panel'>
        <div className='info__score'>
          <h1>00</h1>
        </div>
        <div>
          <h2>player 2</h2>
        </div>
      </div>
    </div>
  )
}