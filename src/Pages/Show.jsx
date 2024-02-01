import React, { useEffect, useRef, useState } from 'react'
import { json } from 'react-router';
import PopUpModel from '../Components/PopUpModel/PopUpModel';

const Show = () => {

    const [show,setShow] = useState(null);
    const [summary,setSummary] = useState("");
    const [showPopUp,setShowPopUp] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        let item = localStorage.getItem('show');
        if(item){
            setShow(JSON.parse(item));
        }
    },[]);

    useEffect(()=>{
        if(show){
         filterSummery();
        }
    },[show]);

   function filterSummery(){
    const doc = new DOMParser().parseFromString(show.summary, 'text/html');
    // exrtract text content without the HTML tags.
    const textContent = doc.body.textContent || "";
    setSummary(textContent);
   }
   

 if(show===null){
    return (
        <div>failed to fetch data...</div>
    )
 }
  return (
   <>
    <div className='show' >
     <img src={show.image? show.image.original:"https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg?w=740&t=st=1706769770~exp=1706770370~hmac=504af2ed71881c22da5cbb4c6d5fd6365b1bf0d4182a95d9a7ed07ec80b3247e"}/>
     <div className='show-content'>
     <h1 style={{fontSize:"2.5rem"}}>{show.name}</h1>
     <p style={{color:"#cccc"}}>{show.language}</p>
     <p style={{fontSize:'20px'}} >{show.genres.map(element=>(
            `${element} `
        ))}</p>
     <button onClick={()=>setShowPopUp(true)} >book ticket</button>
     </div>
   
    </div>
    <div ref={ref} className='show-summery' >
     <h1>About the movie</h1>
      <p>{summary}</p>
    </div>
    {showPopUp &&   <div className='pop-up'>
        <PopUpModel setShowPopUp={setShowPopUp} show={show} />
    </div>}
  
   </>
  )
}

export default Show