import { useState, useEffect } from "react";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const Popular = () => {
  const { data, isLoading } = useQuery<Movie[]>(
    ["popular_movies", "popular"],
    () => fetchData("popular"),
  );
  if (isLoading) return <div className="text-white">Loading...</div>;
  return (
    <>
      <h1 className="mb-5 text-white">Popular Now</h1>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {data?.slice(0, 12).map((film) => (
          <Link className="relative" key={film.id} to={`/movie/${film.id}`}>
            <img
              key={film.poster_path}
              src={"https://image.tmdb.org/t/p/original" + film.poster_path}
              alt=""
              className=" rounded-lg"
            />
            <div className="absolute top-2 right-2 flex items-center">
              <p className="font-bold text-white">{film.vote_average}</p>
              <BiSolidStar className="text-yellow-400" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Popular;
