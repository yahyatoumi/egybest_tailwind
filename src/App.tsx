import React from 'react';
import './App.css';
import img from "./imgs/cover.jpg"
import Top from './Components/Top';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchData from './helpers/fetch';
import Popular from './Components/Popular';
import TopRated from './Components/TopRated';



interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function App() {
  
  console.log("zzz");
  return (
    <div className='bg-[#333333]'>
      <Top />
      <div className="mt-10 p-5 sm:ml-16 bg-[#333333]">
        <Popular />
        <TopRated />
      </div>
    </div>
  );
}

export default App;