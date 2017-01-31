import React, { PropTypes } from 'react';
import ShipInfo from './shipinfo';

const ShipList =  props => {
  const renderShipInfo = () => {
    const ships = Object.keys(props.shipscore);
    return ships.map(ship => {
      return <ShipInfo shipname={ship} key={ship} score={props.shipscore[ship]} />
    });
  }

  return (
    <div className='info__shiplist'>
      {renderShipInfo()}
    </div>
  )
}

ShipList.propTypes = {
  shipscore: PropTypes.object.isRequired
};

export default ShipList;