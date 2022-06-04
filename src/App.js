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
            <h1>Dev<span className='hire'>Hire</span></h1>
            </header>
            <ul className='nav'>
              <li><CgSearch/>Home</li>
              <li><MdFavoriteBorder />Favorites</li>
            </ul>
       </div>
        
    </div>
      </div>
    
  );
}

export default App;