import { useEffect, useState } from 'react';
import MagnifyingGlass from '../../assets/magnifying-glass.svg';
import './Search.css';

const Search = ({ resultsCount, onChangeSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => setSearch(event.target.value);

  useEffect(() => {
    const searchTimeout = setTimeout(() => onChangeSearch(search), 500);

    return () => clearTimeout(searchTimeout);
  }, [search]);

  return (
    <section className="search">
      <MagnifyingGlass aria-hidden="true" className="search__icon" />
      <input
        type="text"
        className="reset-input search__input"
        placeholder="Search a character..."
        value={search}
        onChange={handleChange}
      />
      <p className="search__results">{resultsCount} results</p>
    </section>
  );
};

export default Search;
