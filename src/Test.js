import React, { Component } from 'react'

export default class Avatar extends Component {
  render() {
    const { src, name } = this.props;
    return (
      <div className="avatar">
        <img width="150" style={{borderRadius: '50%'}} src={src} alt="asasd" />
        <h3>{name}</h3>
      </div>
    )
  }
}
