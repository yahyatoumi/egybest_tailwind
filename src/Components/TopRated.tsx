import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../helpers/fetch";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const { data, isLoading } = useQuery<Movie[]>(
    ["topRated_movies", "top_rated"],
    () => fetchData("top_rated"),
  );
  useEffect(() => {
    if (data) setTopRated(data);
  }, [data]);
  if (isLoading) return <div></div>;
  return (
    <>
      <h1 className="mt-10 mb-5 text-white">Top Rated</h1>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6">
        {topRated.slice(0, 12).map((film) => (
          <Link
            className="relative"
            key={film.poster_path}
            to={`/movie/${film.id}`}
          >
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

export default TopRated;
