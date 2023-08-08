import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import Nav from "./Nav";
import MovieInfos from "./MovieInfos";
// import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<MovieDetails>(
    ["movieDetails", id],
    () => fetchData(id ? id : "0"),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ooops sorry...!</div>;
  console.log(data);
  return (
    <div className="bg-[#222]">
      <Nav />
      {data ? 
      <MovieInfos data={data}/>
    : ""}
    </div>
  );
};

export default MovieDetails;
