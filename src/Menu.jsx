import { useState } from 'react';
import category from '../category.json';
import data from '../data.json';

export default function Menu() {
  const [products, setProducts] = useState(data);

  return (
    <div className='menu-all'>
      <div>
        <div>
          {category.map((category) => (
            <div key={category.id}>
              <h1 className='category'>{category.name}</h1>
              {products
                .filter((product) => product.category === category.name)
                .map((x) => (
                  <div key={x.id} className='coffe'>
                    <h2 className='name'>{x.name}</h2>
                    <h2 className='price'>{x.price}</h2>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
