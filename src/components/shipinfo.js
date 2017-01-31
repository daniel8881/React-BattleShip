import React, { Component, PropTypes } from 'react';

class ShipInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.score
    }
  }

  renderHitted() {
    let imgList = [];
    let i = 0;
    let j = 0;
    let nextId = 0;
    for(i = 0; i < this.props.score; i++) {
      imgList.push(<img src={`/img/point.png`} key={nextId++} alt='remain ship size'/>);
    }
 
    for(j = 0; j < this.state.size - i; j++) {
      imgList.unshift(<img src={`/img/hit.png`} key={nextId++} alt='numbers of hitted'/>);
    }
    
    return imgList;
  };
  
  render() {
    return (
      <div className='info__shipinfo'>
        <div className='info__shipinfo__image'>
          <img src={`/img/${this.props.shipname}.png`} alt={this.props.shipname} />
        </div>
        <div className='info__shipinfo__hitted'>
          {this.renderHitted()}
        </div>
      </div>
    )
  }
}

ShipInfo.propTypes = {
  shipname: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};


export default ShipInfo;