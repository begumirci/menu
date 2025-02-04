import { Link } from 'react-router-dom';

import Header from './Header';
import { useContext } from 'react';
import { Contextim } from './Provider';
export default function Buttons() {
  const { categories } = useContext(Contextim);

  return (
    <div className='categories'>
      <Header />
      {categories.map(
        (category) =>
          category.category_name !== 'Esnaf Menüleri' && (
            <Link
              to={`${category.category_name}`}
              key={category.id}
              className={` category-btn ${category.id % 2 == 0 && 'bg'}`}
            >
              <h1>{category.category_name}</h1>
            </Link>
          )
      )}
    </div>
  );
}
