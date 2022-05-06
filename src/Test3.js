import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <li key={id}>{title}</li>
    )
  }
}
