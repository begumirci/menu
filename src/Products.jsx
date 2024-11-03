import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const { id } = useParams();
  const [filterProducts, setFilterProducts] = useState([]);

  const filterData = data.filter((dat) => dat.category == id);

  console.log(id);
  return (
    <div>
      <div className='header'>
        <Link to={'/'}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 14 12'
            fill='#7f1d1d'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.8332 6H1.99987M6.16654 1L1.7558 5.41074C1.43036 5.73618 1.43036 6.26382 1.7558 6.58926L6.16654 11'
              stroke='#3333'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
        </Link>

        <h1 className='category-head'>{id}</h1>
      </div>

      <div className='category-header'>
        <h1 className='category'></h1>
        <img src='/public/small.png' className='small' alt='' />
        <img src='/public/big.png' className='big' alt='' />
      </div>
      {filterData.map((product) => (
        <div key={product.id} className='coffe'>
          <h2 className='name'>{product.name}</h2>
          <h2 className='price'>
            {product.sizes ? `${product.sizes.S}₺` : ''}
          </h2>

          <h2 className='price'>
            {product.sizes ? product.sizes.M : product.price}₺
          </h2>
        </div>
      ))}
    </div>
  );
}
