import React from 'react';

export default props => {
  return (
    <div className='header'>
      <h2 className='header__msg'>{props.msg}</h2>
      <div 
        onClick={() => props.restart()}
        className='header__restart'>
        Restart
      </div>
    </div>
  )
}