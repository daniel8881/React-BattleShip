import React from 'react';

export default props => { 
  return (
    <div className='board__square' onClick={() => props.onClick()}>
      {props.value && (props.value === 'hit' || props.value === 'miss') ? 
        <img src={`/img/${props.value}.png`} alt='fire mark'/> : ''
      } 
    </div>
  )
}

