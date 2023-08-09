import trailer from "../imgs/trailer.jpg";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

interface Props {
  data: MovieDetails;
}

const MovieMedia: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="relative mx-auto flex max-w-[1300px] gap-1 px-5 pb-5 lg:px-10">
        <div className="relative hidden h-full w-5/12 border sm:flex lg:w-3/12">
          <img
            src={"https://image.tmdb.org/t/p/original" + props.data.poster_path}
            alt=""
          />
        </div>
        <div className="w-full sm:w-9/12 lg:w-7/12">
          <iframe
            className="min-h-[250px]  w-full sm:h-full"
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
        <div className="absolute -bottom-5 left-0 flex w-full  gap-1 px-5 lg:hidden text-white block lg:hidden">
          <div className="h-full w-3/6 bg-gray-400 hover:bg-opacity-40 cursor-pointer">
            <div className="flex items-center justify-center gap-1 p-1">
              <MdOutlineVideoLibrary className="h-4 w-4" />
              <span>9 videos</span>
            </div>
          </div>
          <div className="h-full w-3/6 bg-gray-400 hover:bg-opacity-40 cursor-pointer">
            <div className="flex items-center justify-center gap-1 p-1">
              <AiOutlinePicture className="h-4 w-4" />
              <span>9 pictures</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-16 bg-white">drama</div>
    </div>
  );
};

export default MovieMedia;
