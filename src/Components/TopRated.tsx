import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchData from "../helpers/fetch";

const TopRated = () => {
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const { data, isLoading } = useQuery<Movie[]>(["topRated_movies", "top_rated"], () => fetchData("top_rated"));
    useEffect(() => {
        if (data)
            setTopRated(data);
    }, [data])
    if (isLoading)
        return <div></div>
    return <>
        <h1 className="mt-10 mb-5 text-white">Top Rated</h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
            {
                topRated.slice(0, 12).map((film) => (
                    <img key={film.poster_path} src={"https://image.tmdb.org/t/p/original" + film.poster_path} alt="" className=" rounded-lg" />
                ))
            }
        </div>
    </>
}

export default TopRated;