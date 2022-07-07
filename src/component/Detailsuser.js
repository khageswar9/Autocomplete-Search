import React from 'react';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { Searchcontext } from '../context/Searchcontext';

function Detailsuser() {
  const {details , setdetails} = useContext(Searchcontext)
  if(Object.keys(details).length === 0){
    return ;
  }

  return (
    <div className='deatailsDiv'>
        <div className='detailscontent'>
        <span onClick={()=>{setdetails({})}} className="cross">×</span>
            <div className='first'>
                <Avatar alt="Remy Sharp" src={details.obj.image} sx={{ width: 150, height: 150 }}/>
                <div>
                  <h2>{details.obj.name}</h2>
                  <span><span className={details.obj.status === "Alive"?"logged-in":"logged-out"}>●</span><span>{details.obj.status}-{details.obj.species}</span></span>
                </div>
            </div>
            <div className='second'>
                <div>
                  <span>Gender</span>
                  <span><h3>{details.obj.gender}</h3></span>
                </div>
                <div>
                  <span>Location</span>
                  <span><h3>{details.obj.location.name}</h3></span>
                </div>
                <div>
                  <span>Species</span>
                  <span><h3>{details.obj.species}</h3></span>
                </div>
                <div>
                  <span>Origin</span>
                  <span><h3>{details.obj.origin.name}</h3></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detailsuser