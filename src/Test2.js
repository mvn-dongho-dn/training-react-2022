import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    console.log('alo');
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    console.log('out');
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>Clock: {this.state.date.toLocaleTimeString()}</div>
    )
  }
}
