// import React, { Component } from 'react'

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }

//   componentDidMount() {
//     this.clockID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     console.log('out');
//     clearInterval(this.clockID);
//   }

//   tick() {
//     console.log('zooo');
//     this.setState({
//       date: new Date()
//     });
//   }
  
//   render() {
//     return (
//       <h2>Clock: {this.state.date.toLocaleTimeString()}</h2>
//     )
//   }
// }

import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      console.log(1);
      return setDate(new Date());
    }, 1000);
    
    return () => {
      clearInterval(id);
    }
  });

  return (
    <h2>Clock: {date.toLocaleTimeString()}</h2>
  )
}
