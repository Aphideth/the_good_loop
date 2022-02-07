import { useState, useEffect } from 'react';
import Weartype from './Weartype';
import axios from 'axios';
import '../styles/homeFilter.css';

const HomeFilter = () => {
  const [weartypes, setWeartypes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/weartypes').then((response) => {
      setWeartypes(response.data);
    });
  };
  return (
    <div className="m-10">
      <div className="homefilter">
        <h2 className="my-5 pl-20">De quoi-as-tu besoin ?</h2>
        <div className="homefilter_block">
          <div className="flex flex-row justify-between justify-items-center">
            {weartypes?.map((weartype) => (
              <Weartype key={weartype.id} weartype={weartype} />
            ))}
          </div>
        </div>
      </div>
      <div className="homefilter_div_button">
        <button className="homefilter_button">Afficher tout</button>
      </div>
    </div>
  );
};

export default HomeFilter;
