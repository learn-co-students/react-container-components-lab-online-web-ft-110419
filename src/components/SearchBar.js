import React from 'react';

const SearchBar = ({handleSearch, handleChange, search}) =>
  <form onSubmit={handleSearch}>
    <input onChange={handleChange} type='text' value={search} />
    <input type='submit' value='Search' />
  </form>
export default SearchBar