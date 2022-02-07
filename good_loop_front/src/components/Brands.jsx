import { useContext } from 'react';
import BrandContext from '../contexts/BrandContext';

const Brands = () => {
  const { brands } = useContext(BrandContext);
  console.log('Brands', brands);

  return <p>Brands</p>;
};

export default Brands;
