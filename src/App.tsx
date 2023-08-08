import React from "react";
import "./App.css";
import img from "./imgs/cover.jpg";
import Top from "./Components/Top";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./helpers/fetch";
import Popular from "./Components/Popular";
import TopRated from "./Components/TopRated";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#333333]">
              <Top />
              <div className="mt-10 bg-[#333333] pr-5 pl-5 sm:pl-0 pb-5 sm:ml-16">
                <Popular />
                <TopRated />
              </div>
            </div>
          }
        />
        <Route path="/movie/:id" element={
          <div className="w-screen bg-[#222]">
            <MovieDetails />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
