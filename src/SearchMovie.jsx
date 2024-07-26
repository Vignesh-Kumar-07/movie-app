/* eslint-disable react/prop-types */

import { useState } from "react";
import { useGetData } from "./useGetData";

function SearchMovie({ searchQuery, setSearchQuery }) {
  
const [enter,setEnter] = useState(true)
  return (
 
    <div className="search">
      <div className="searchContainer" >

        <img src="https://test.create.diagnal.com/images/Back.png" alt="" />
        
{     enter? <img src="https://test.create.diagnal.com/images/search.png" alt="" onMouseEnter={() => setEnter(false)} /> :   <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search posts..."
        onMouseLeave={() => setEnter(true)} 
        />}
      </div>
    <img className="navBar" src="https://test.create.diagnal.com/images/nav_bar.png" alt="" />
    </div>
    

  );
}

export default SearchMovie;
