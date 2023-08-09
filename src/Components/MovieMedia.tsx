import trailer from "../imgs/trailer.jpg";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdMoneyOff } from 'react-icons/md';

interface Props {
  data: MovieDetails;
}

const MovieMedia: React.FC<Props> = (props) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  return (
    <div className="mt-5 z-1">
      <div className="relative z-1 mx-auto flex max-w-[1300px] gap-1 px-5 pb-5 lg:px-10">
        <div className="relative hidden h-full w-5/12 sm:flex lg:w-3/12">
          <img
            src={"https://image.tmdb.org/t/p/original" + props.data.poster_path}
            alt=""
          />
        </div>
        <div className="w-full z-1 sm:w-9/12 lg:w-7/12">
          <iframe
            className="min-h-[250px] z-1  w-full sm:h-full"
            width=""
            height=""
            src="https://www.youtube.com/embed/SUXWAEX2jlg"
            title="YouTube video player"
            //   frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //   allowfullscreen
          ></iframe>
        </div>
        <div className="hidden w-2/12  lg:flex lg:flex-col lg:gap-1">
          <div className="flex h-1/2 w-full cursor-pointer items-center justify-center bg-gray-400 hover:bg-opacity-40">
            <div className="flex flex-col items-center justify-center">
              <MdOutlineVideoLibrary className="h-8 w-8" />
              <span>9 videos</span>
            </div>
          </div>
          <div className="flex h-1/2 w-full cursor-pointer items-center justify-center bg-gray-400 hover:bg-opacity-40">
            <div className="flex flex-col items-center justify-center">
              <AiOutlinePicture className="h-8 w-8" />
              <span>9 pictures</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 left-0 block flex  w-full gap-1 px-5 text-white lg:hidden lg:hidden">
          <div className="h-full w-3/6 cursor-pointer bg-gray-400 hover:bg-opacity-40">
            <div className="flex items-center justify-center gap-1 p-1">
              <MdOutlineVideoLibrary className="h-4 w-4" />
              <span>9 videos</span>
            </div>
          </div>
          <div className="h-full w-3/6 cursor-pointer bg-gray-400 hover:bg-opacity-40">
            <div className="flex items-center justify-center gap-1 p-1">
              <AiOutlinePicture className="h-4 w-4" />
              <span>9 pictures</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-[1300px]  gap-3 px-5  py-2 text-white lg:mt-0 lg:px-10">
        <div className="w-[120px] min-w-[120px] sm:hidden">
          <img
            className="w-full"
            src={"https://image.tmdb.org/t/p/original" + props.data.poster_path}
            alt=""
          />
        </div>
        <div>
          <div className="flex max-w-2xl flex-wrap gap-1">
            {props.data?.genres.map((genre) => (
              <div className="cursor-pointer rounded-2xl border border-white px-5 py-1 hover:bg-white hover:bg-opacity-10">
                <span>{genre.name}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl pt-5 text-white">
            <span>{props.data.overview}</span>
          </div>
        </div>
      </div>
      <div className="mr-4 flex lg:hidden items-center justify-start gap-0 text-white w-full px-5">
        <div className="w-36 text-center text-sm">
          <div className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded font-semibold hover:bg-white hover:bg-opacity-10">
            <AiFillStar className="h-6 w-6 text-yellow-500" />
            <div className="flex gap-2 items-center justify-start text-left">
              <span className="text-base">
                {props.data?.vote_average.toFixed(1)}
                <span className="text-xs text-gray-300">/10</span>
              </span>
              <span className="mb-2">
              .
              </span>
              <span className="text-sm text-gray-400">
                {formatNumber(
                  props.data?.vote_count ? props.data.vote_count : 0,
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-24 flex-col items-center text-center text-xs">
          <div className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded px-2 font-semibold text-blue-500 hover:bg-white hover:bg-opacity-10">
            <AiOutlineStar className="h-6 w-6" />
            <span className="text-lg">Rate</span>
          </div>
        </div>
        <div className="flex w-20 flex-col items-center text-center  text-xs font-semibold">
          <div className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded hover:bg-white hover:bg-opacity-10">
            <MdMoneyOff className="h-6 w-6 text-yellow-600" />
            <span>
              {formatNumber(props.data?.budget ? props.data?.budget : 0) + " $"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieMedia;
