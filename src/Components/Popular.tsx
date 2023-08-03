import axios from "axios";
import { useState, useEffect } from 'react';
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import React from "react";

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


const Popular = () => {
    const [popular, setPopular] = useState<Movie[]>([]);
    const { data } = useQuery<Movie[]>(["git branch -M main","popular"], () => fetchData("popular"));
    useEffect(() => {
        if (data)
            setPopular(data);
    }, [data])
    console.log("hohohohoyy");
    return <>
        <h1 className="mb-5 text-white">Popular Now</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
            {
                popular.slice(0, 12).map((film) => (
                    <img key={film.poster_path} src={"https://image.tmdb.org/t/p/original" + film.poster_path} alt="" className=" rounded-lg" />
                ))
            }
        </div>
    </>
}

export default Popular;