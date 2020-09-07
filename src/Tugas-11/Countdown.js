import React, { Component } from 'react';

class Countdown extends Component {
  componentWillUnmount() {
    console.log('Bye Countdown');
  }
  
  render() {
    return (
      <div style={{ textAlign: 'right' }}>
        {`Hitung Mundur : ${this.props.countdown}`}
      </div>
    );
  }
}

export default Countdown;
