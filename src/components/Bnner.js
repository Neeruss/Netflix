import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'

function Bnner({fetchUrl}) {
    /*console.log(fetchUrl);*/
    const [movie,setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData= async()=>{
        const {data}=await instance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(movie);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        <div className='banner_content'>
            <h1>{movie?.name}</h1>
            <button type="button" class="btn rounded bg-danger" aria-label="Close">play<i class="fa-solid fa-play bg-transparent ms-2 more"></i></button>
            <button type="button" class="btn rounded border-white ms-3 more" aria-label="Close">More Info<i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
            <h2>{movie?.overview.slice(0,200)}........</h2>
        </div>
    </div>
  )
}

export default Bnner