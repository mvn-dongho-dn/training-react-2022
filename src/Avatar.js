import React, { Component } from 'react'

export default class Avatar extends Component {
  render() {
    const { src, name } = this.props;
    return (
      <div style={{paddingTop: 20}}>
        <img width="120" style={{borderRadius: '50%'}} src={src} alt="Avatar" />
        <h3 style={{marginTop: 10, fontSize: 20}}>{name}</h3>
      </div>
    )
  }
}
