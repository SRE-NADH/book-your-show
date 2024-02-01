import React from 'react';
import "./style.css";
import { IoMdStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router';

const MovieCard = ({item}) => {

    const navigate = useNavigate();

// function for handling onclick
function handleClick(e){
  localStorage.setItem('show',JSON.stringify(item.show));
  navigate("/show");
 }


     return (
    <div className='card-container'>
        <div className='movie-card' style={{backgroundImage: item.show.image? `url(${item.show.image.medium})`:'url(https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?w=740&t=st=1706769770~exp=1706770370~hmac=504af2ed71881c22da5cbb4c6d5fd6365b1bf0d4182a95d9a7ed07ec80b3247e)'}} >
  
      <div className='button' onClick={handleClick} >
        SHOW INFO
      </div>
      </div>
      <div className='content'>
        <p style={{fontSize:'30px',fontWeight:"700"}} >{item.show.name} </p>
        <p style={{fontSize:'20px'}} >{item.show.genres.map(element=>(
            `${element} `
        ))}</p>
        {item.show.rating.average &&  <p style={{fontSize:'15px'}} > <IoMdStarOutline/>{item.show.rating.average}</p> }
      </div>
    </div>    
  
  )
}

export default MovieCard