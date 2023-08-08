import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import Nav from "./Nav";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<MovieDetails>(
    ["movieDetails", id],
    () => fetchData(id ? id : "0"),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ooops sorry...!</div>;
  console.log(data)
  return (
    <div className="bg-gray-800">
      <Nav />
      {data?.original_title}
    </div>
  );
};

export default MovieDetails;
