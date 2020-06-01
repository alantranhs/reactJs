import React, {Component} from 'react';
import ProductItem from './ProductItems'

export default class ProductList extends Component {
  render() {
    const products = [
      {title: 'iPad 4 Mini', prices: '$500'},
      {title: 'iPad 3 Mini', prices: '$300'},
      {title: 'iPad 2 Mini', prices: '$100'}
    ];

    return (
      <div>
        { products.map(product =>
          (<ProductItem title={product.title} prices={product.prices}/>)
          )
        }
      </div>

    )
  }
}
