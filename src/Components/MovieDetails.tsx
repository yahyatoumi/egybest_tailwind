import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetch";
import { useQuery } from "@tanstack/react-query";
import Nav from "./Nav";
import { BsShareFill } from "react-icons/bs";
import { TbListSearch } from "react-icons/tb";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<MovieDetails>(
    ["movieDetails", id],
    () => fetchData(id ? id : "0"),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ooops sorry...!</div>;
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  console.log(data);
  return (
    <div className="bg-[#222]">
      <Nav />
      <div className="my-0 mx-auto my-2 w-full max-w-[1300px]">
        <div className="flex h-10 items-center justify-end gap-6 px-5 text-white lg:px-10">
          <div className="hidden items-center gap-3 lg:flex">
            <div className="cursor-pointer hover:border-b">Cast & crew</div>
            <span className="pb-2">.</span>
            <div className="cursor-pointer hover:border-b">User reviews</div>
            <span className="pb-2">.</span>
            <div className="cursor-pointer hover:border-b">Trivia</div>
          </div>
          <div className="hidden cursor-pointer hover:border-b lg:block">
            IMDBPro
          </div>
          <div className="flex cursor-pointer items-center justify-center rounded px-3 hover:bg-white hover:bg-opacity-10">
            <div className="justify-left flex h-8 w-8 items-center">
              <TbListSearch className="h-6 w-6" />
            </div>
            <span>All topics</span>
          </div>
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl hover:bg-white hover:bg-opacity-10">
            <BsShareFill className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="my-0 mx-auto my-2 mt-5 flex w-full max-w-[1300px] justify-between px-5 text-white lg:px-10">
        <div>
          <div className="text-5xl">{data?.original_title}</div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>{data?.release_date.slice(0, 4)}</span>
            <span className="pb-2">.</span>
            <span>R</span>
            <span className="pb-2">.</span>
            <span>
              {Math.floor(data?.runtime ? data?.runtime / 60 : 0).toString() +
                "h " +
                (data?.runtime && data?.runtime % 60
                  ? (data?.runtime % 60) + "m"
                  : "")}
            </span>
          </div>
        </div>
        <div className="hidden mr-4 lg:flex gap-4">
          <div className="w-28 text-center">
            <span className="text-sm tracking-wider text-gray-300">
              API RATING
            </span>
            <div className="flex h-12 items-center justify-around bg-white-300 opacity-40">
              <AiFillStar className="h-8 w-8 text-yellow-500" />
              <div className="flex flex-col  text-left">
                <span>{data?.vote_average.toFixed(2)}<span className="text-gray-400 text-sm">/10</span></span>
                <span className="text-gray-400 text-sm">
                  {formatNumber(data?.vote_count ? data.vote_count : 0)}
                </span>
              </div>
            </div>
          </div>
          <div className="w-28 text-center">
            <span className="text-sm tracking-wider text-gray-300">
              YOUR RATING
            </span>
            <div className="flex h-12 items-center justify-center gap-2 text-blue-500">
              <AiOutlineStar className="h-8 w-8" />
              <span className="text-lg">Rate</span>
            </div>
          </div>
          <div className="w-28 text-center">
            <span className="text-sm tracking-wider text-gray-300">
              BUDGET
            </span>
            <div className="flex h-12 items-center justify-around">
              <MdMoneyOff className="h-8 w-8 text-yellow-600" />
              <span>{formatNumber(data?.budget ? data?.budget : 0) + " $"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
