import React from 'react';
import './Searchbar.scss'

export const Searchbar = () => {
  return (
    <header className="Searchbar">
  <form className="form">
    <button type="submit" className="form-button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  );
}

