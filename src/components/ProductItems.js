import React, {Component} from 'react';
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { title, prices } = this.props;
    return (
      <Product title={title} prices={prices}/>
    )
  }
}
