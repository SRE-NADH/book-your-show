import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import MovieCard from '../Components/MovieCard/MovieCard';
import axios from 'axios';

const Home = () => {
    const [shows,setShows] = useState([]);
    const [searchValue,setSearchValue] = useState("");

  useEffect(()=>{
    // fetch api response
    async function fetchShows(){
        try{
         const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        setShows(response.data);
        }
        catch(error){
            console.log(error)
        }
    }

    fetchShows();
  
  },[]);

// filter shows according to search value
  const filteredShows = shows.filter(item => item.show.name.toLowerCase().includes(searchValue.toLowerCase()));

 



  return (
    <>
     <Header setSearchValue={setSearchValue}/>
    <div className='shows-container'>
    {filteredShows.length>0 && filteredShows.map((item,index)=>(
        <div key={index}>
            <MovieCard item={item} />
        </div>
    ))}
    </div> 
    </>
  )
}

export default Home;