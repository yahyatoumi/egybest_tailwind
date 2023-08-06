import React from "react";
import {useState, useEffect} from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchData from "../helpers/fetch";

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

interface MyComponentProps {
    topRatedMovies: Movie[];
}

const TopRated = () => {
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const { data: data2 } = useQuery<Movie[]>(["topRated_movies", "top_rated"], () => fetchData("top_rated"));
    useEffect(() => {
        if (data2)
            setTopRated(data2);
    }, [data2])
    console.log("hohohohoxx");
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