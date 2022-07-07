import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Searchcontext } from '../context/Searchcontext';
import { useContext } from 'react';

function Usercard(obj) {
  const {setdetails} = useContext(Searchcontext)
  return (
    <div className='usercard' key={obj.obj.id} >
        <div onClick={()=>{setdetails(obj)}}>
            <Avatar alt="Remy Sharp" src={obj.obj.image} sx={{ width: 30, height: 30 }}/>
            <span className='name'><b>{obj.obj.name}</b></span>
        </div>
        <div>
            <span className={obj.obj.status === "Alive"?"logged-in":"logged-out"}>●</span><span>{obj.obj.status}-{obj.obj.species}</span>
        </div>
    </div>
  )
}
export default Usercard 
