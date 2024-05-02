import React, { useState } from 'react';

function Header({ onLocationChange, error }) {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    onLocationChange(location);
  };



  return (
    <div className='header'>
      <p id='error-msg'>{error}</p>
      <div className="search-loc">
        <input
          id='input-field'
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Header

