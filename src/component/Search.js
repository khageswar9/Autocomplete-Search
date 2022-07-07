import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { Searchcontext } from '../context/Searchcontext';

function Search() {
  const {settext} = useContext(Searchcontext)
  return (
    <div className='searchHeader'>
      <div className='SearchDiv'>
        <SearchIcon />
        <input type="text" placeholder='Search for a content' onChange={(e)=>{settext(e.target.value)}}/>
      </div>
    </div>
  )
}

export default Search