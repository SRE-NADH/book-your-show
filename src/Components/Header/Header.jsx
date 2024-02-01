import React from 'react';
import "./style.css";
import { FiAlignJustify } from "react-icons/fi";
import SearchBox from '../SearchBox/SearchBox';


const Header = ({setSearchValue}) => {
  return (
    <div className='header'>
        <div className='logo'>BYS</div>
        <SearchBox setSearchValue={setSearchValue} />
        <div className='menu' ><FiAlignJustify/></div>
    </div>
  )
}

export default Header