import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: moment()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    console.log('im about to die :(');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      clock: moment()
    });
  }

  render() {
    const { clock } = this.state;
    return (
      <div>
        {
          `Sekarang Jam : ${clock.format('H:mm:ss A')}`
        }
      </div>
    );
  }
}

export default Clock;
