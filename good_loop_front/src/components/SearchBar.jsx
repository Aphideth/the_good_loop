import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [brands, setBrands] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/brands').then((response) => {
      setBrands(response.data);
    });
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = brands.filter((brand) => {
        const regularExpression = new RegExp(`${text}`, 'gi');
        return brand.name.match(regularExpression);
      });
    }
    console.log('matches', matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Rechercher une marque"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
      </div>
      {suggestions &&
        suggestions.map((suggestion, index) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={index}
            className="suggestion"
            onClick={() => onSuggestHandler(suggestion.name)}
          >
            {suggestion.name}
          </div>
        ))}
    </div>
  );
};

export default SearchBar;
