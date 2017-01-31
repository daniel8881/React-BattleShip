import React, { PropTypes } from 'react';

const Header =  props => {
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
};

Header.propTypes = {
  msg: PropTypes.string.isRequired,
  restart: PropTypes.func.isRequired
};

export default Header;