import {
  BiSolidCameraMovie,
  BiMoviePlay,
  BiSearch,
  BiStar,
  BiSolidUser,
  BiPlay,
} from "react-icons/bi";

const Top = () => {
  return (
    <div className="ml-0 h-screen sm:ml-16 sm:h-[60vh] sm:min-h-[400px] sm:w-vw-16">
      <nav className="absolute left-0 hidden h-[200vh] w-16 flex-col items-center gap-5 pt-3 sm:flex">
        <BiSolidCameraMovie className=" h-10 w-10 text-red-600" />
        <BiSearch className=" h-6 w-6 text-white" />
        <BiMoviePlay className=" h-6 w-6 text-white" />
        <BiStar className=" h-6 w-6 text-white" />
        <BiSolidUser className=" h-6 w-6 text-white" />
      </nav>
      <BiSolidCameraMovie className="absolute left-3 top-3 block h-10 w-10 text-red-600 sm:hidden" />
      <div
        className="h-2/5 bg-cover bg-center bg-no-repeat sm:h-[60vh] sm:min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://hervehubert.tv/wp-content/uploads/2019/10/Logo-full-hd-1.jpg')",
        }}
      ></div>
      <div className="flex h-3/5 flex-col gap-5 bg-black p-5 pb-10 text-white sm:absolute sm:top-0 sm:h-[60vh] sm:min-h-[400px] sm:w-vw-16 sm:bg-transparent sm:bg-gradient-to-br  sm:from-black sm:to-transparent">
        <h2 className="text-4xl font-bold ">SAM AWAY</h2>
        <p className="text-xs  font-thin text-gray-400">
          Adventure, Fantasy | 2019 | 136 Min.
        </p>
        <p className="text-md max-w-xs  font-extralight">
          When a tornado hits through City of Peaceville, Samantha (Jenny
          Loifer) and her dog, Ricko, are whisked away in their house to an
          amazing journey.
        </p>
        <div>
          <p className="text-sm font-thin">Director: Todd Burns</p>
          <p className=" text-sm font-thin">
            Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.
          </p>
        </div>
        <button className="flex w-36 items-center rounded-3xl border border-red-600 p-5 pt-2 pb-2 text-red-600 hover:bg-red-600 hover:text-white">
          <BiPlay className="-ml-2 h-5 w-5" />
          <p>Watch Now</p>
        </button>
      </div>
    </div>
  );
};

export default Top;
