// src/App.js

import React, { useState } from 'react';
import MovieList from './components/MovieList';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

function App() {
  const [search, setSearch] = useState('')
  console.log({search})
  return (
    <div className="App">
           <div className="header">
        <h1 className="title">Wookie Movies</h1>
        <div className="searchContainer">
          <i className="fas fa-search searchInput"></i>
          <input type="text"  onChange={(text)=> {
            setSearch(text.target.value)
          }} />
        </div>
      </div>
      <MovieList  search={search} />
    </div>
  );
}

export default App;
