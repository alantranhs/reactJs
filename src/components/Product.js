import React, {Component} from 'react';

export default class Product extends Component {
  render() {
    const { prices, title } = this.props;
    return (
      <div>
        <div>{title}</div>
        <button>{prices}</button>
      </div>
    )
  }
}
