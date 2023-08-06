import { useState, useEffect } from 'react';
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";


const Popular = () => {
    const [popular, setPopular] = useState<Movie[]>([]);
    const { data } = useQuery<Movie[]>(["git branch -M main","popular"], () => fetchData("popular"));
    useEffect(() => {
        if (data)
            setPopular(data);
    }, [data])
    return<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
            {
                popular.slice(0, 12).map((film) => (
                    <img key={film.poster_path} src={"https://image.tmdb.org/t/p/original" + film.poster_path} alt="" className=" rounded-lg" />
                ))
            }
        </div>
}

export default Popular;