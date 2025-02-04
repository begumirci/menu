import { createContext, useEffect, useState } from 'react';

export const Contextim = createContext();
import { supabase } from './supabase';

export default function Provider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      let { data: menu, error } = await supabase.from('menu').select('*');
      setProducts(menu);

      let { data: categories, error: errorCategory } = await supabase
        .from('categories')
        .select('*');
      setCategories(categories);
    }
    getData();
  }, []);
  return (
    <Contextim.Provider
      value={{ categories, products, filterProducts, setFilterProducts }}
    >
      {children}
    </Contextim.Provider>
  );
}
