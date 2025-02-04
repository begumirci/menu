import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Contextim } from './Provider';

export default function Products() {
  const { filterProducts, products } = useContext(Contextim);
  const { id } = useParams();

  const filterData = products.filter((dat) => dat.category == id);

  console.log(id);
  const groupedProducts = filterData.reduce((acc, product) => {
    if (!acc[product.name]) {
      acc[product.name] = { name: product.name, S: null, M: null };
    }
    acc[product.name][product.size] = product.price;
    return acc;
  }, {});
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
        {id !== 'Tatlılar' && (
          <>
            <img src='/small.png' className='small' alt='' />
            <img src='/big.png' className='big' alt='' />
          </>
        )}
      </div>
      {Object.values(groupedProducts).map((product) => (
        <div key={product.name} className='coffe'>
          <h2 className='name'>{product.name}</h2>
          <h2 className='price'>{product.S !== null ? `${product.S}₺` : ''}</h2>
          <h2 className='price'>{product.M !== null ? `${product.M}₺` : ''}</h2>
        </div>
      ))}
    </div>
  );
}
