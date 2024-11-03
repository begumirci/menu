import { Link } from 'react-router-dom';
import categories from '../category.json';
import products from '../data.json';
import Header from './Header';
export default function Buttons() {
  return (
    <div className='categories'>
      <Header />
      {categories.map((category) => (
        <Link
          to={`${category.name}`}
          key={category.id}
          className={` category-btn ${category.id % 2 == 0 && 'bg'}`}
        >
          <h1>{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
