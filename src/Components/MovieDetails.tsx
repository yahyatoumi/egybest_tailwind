import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<MovieDetails>(
    ["movieDetails", id],
    () => fetchData(id ? id : "0"),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ooops sorry...!</div>;
  return (
    <div>
      <nav className="h-14 w-screen bg-[#333333]"></nav>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        {data?.original_title}
      </button>
    </div>
  );
};

export default MovieDetails;
