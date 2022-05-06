import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../../../components/HeroBanner';

const Home = () => {
  const [prods] = useState([
    {
      id: 1,
      favs: false
    },
    {
      id: 2,
      favs: false
    },
    {
      id: 3,
      favs: false
    },
    {
      id: 4,
      favs: false
    }
  ]);

  return (
    <div>
      <HeroBanner />
      <div className="container">
        <h2>Product Latest</h2>
        <ul className="product-list row">
          {
            prods.map(e => (
              <li key={e.id} className="product-item col-medium-3">
                <Link to={`/products/${e.id}`} className="product-img">
                  <img src="https://picsum.photos/id/237/300/300" alt="product" />
                </Link>
                <h4 className="product-name"><Link to={`/products/${e.id}`}>Product 1</Link></h4>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button type="button">Add to cart</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Home;
