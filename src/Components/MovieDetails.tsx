import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import { BiSolidCameraMovie, BiCaretDown, BiSearch } from "react-icons/bi";
import { BsFillBookmarkPlusFill } from "react-icons/bs"

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
      <nav className="h-14 w-screen bg-[#333333] lg:pl-10 lg:pr-10 pr-5 pl-5 flex justify-between">
        <div className="flex items-center lg:w-40 w-32 h-full justify-center lg:justify-center lg:gap-2 gap-2 lg:flex-row flex-row-reverse">
          <BiSolidCameraMovie className="w-10 h-10 text-red-600 cursor-pointer" />
          <div className="flex items-center justify-center gap-1 hover:bg-gray-600 rounded-md w-12 lg:w-24 h-12 lg:h-8 cursor-pointer">
            <div className="w-5 h-4 flex justify-around flex-col">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
            <span className="hidden lg:block text-white font-bold">Menu</span>
          </div>
        </div>
        <div className="hidden sm:flex w-full h-full justify-center items-center pl-5 pr-5">
          <div className="w-12 bg-gray-100 h-3/6 text-center leading-relaxed rounded-l border-r border-gray-500">All</div>
          <input type="text" className="w-full  h-3/6 rounded-r" />
        </div>
        <div className="flex items-center min-w-[175px] lg:min-w-[350px] h-full justify-between lg:justify-center lg:gap-2 gap-2 flex-row">
          <div className="hidden sm:flex justify-between items-center w-1 lg:w-3/5">
            <div className="hidden lg:flex hover:bg-gray-600 rounded cursor-pointer h-8 pl-2 pr-2  gap-1 justify-center items-center">
              <BiSolidCameraMovie className="w-4 h-4 text-red-600 cursor-pointer" />
              <span className="text-lg font-bold text-white">Pro</span>
            </div>
            <div className="w-0.5 bg-gray-500 h-8"></div>
            <div className="hidden lg:flex hover:bg-gray-600 rounded cursor-pointer h-8 pl-2 pr-2 justify-center gap-1 items-center">
              <BsFillBookmarkPlusFill className="w-4 h-4 text-white cursor-pointer" />
              <span className="text-sm font-bold text-white">Watchlist</span>
            </div>
          </div>
          <div className="hover:bg-gray-500 rounded cursor-pointer sm:hidden h-8 w-8 flex justify-center items-center">
            <BiSearch className="text-white w-6 h-6"/>
          </div>
          <div className="flex  justify-center items-center w-11/12 lg:w-3/5">
            <div className="hover:bg-gray-600 w-3/5 rounded cursor-pointer h-8 pl-1 pr-1 flex justify-center items-center">
              <span className="text-sm font-bold text-white w-full text-center">Sign in</span>
            </div>
            <div className="hover:bg-gray-600 w-2/5 rounded cursor-pointer h-8 pl-1 pr-1 flex justify-center items-center">
              <span className="text-lg font-bold text-white">EN</span>
              <BiCaretDown className="w-4 h-4 text-white cursor-pointer ml-2" />
            </div>
          </div>
        </div>
      </nav>
      {data?.original_title}
    </div>
  );
};

export default MovieDetails;
