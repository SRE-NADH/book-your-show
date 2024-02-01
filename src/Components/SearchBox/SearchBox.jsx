import React from 'react';
import "./style.css";
import { IoIosSearch } from "react-icons/io";
const SearchBox = ({setSearchValue}) => {
  return (
    <div className='search-box'>
     <p><IoIosSearch/></p>
     <input type='text' onChange={(e)=>{setSearchValue(e.target.value)}} placeholder='Search Movies...' />
    </div>
  )
}

export default SearchBox