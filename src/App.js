import React from 'react';
import "./App.css";
import { CgSearch } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";



const App = () => {

  return(
      <div className="App">
        <div class="wrapper">
        <div class="sidebar">
            <header>
            <h1 className='Dh'>Dev<span className='hire'>Hire</span></h1>
            </header>
            <ul className='nav'>
              <li className='sea'><CgSearch className='search'/>Home</li>
              <li className='fav'><MdFavoriteBorder className='search'/>Favorites</li>
            </ul>
       </div>
        
    </div>
      </div>
    
  );
}

export default App;