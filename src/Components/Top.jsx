import { BiSolidCameraMovie, BiMoviePlay, BiSearch, BiStar, BiSolidUser, BiPlay } from "react-icons/bi"

const Top = () => {
    return (
        <div className='h-screen ml-0 sm:ml-16 sm:w-vw-16 sm:h-[60vh] sm:min-h-[400px]'>
      <nav className='hidden absolute left-0 pt-3 w-16 sm:flex flex-col gap-5 items-center h-[200vh]'>
        <BiSolidCameraMovie className=' w-10 h-10 text-red-600' />
        <BiSearch className=' w-6 h-6 text-white' />
        <BiMoviePlay className=' w-6 h-6 text-white' />
        <BiStar className=' w-6 h-6 text-white' />
        <BiSolidUser className=' w-6 h-6 text-white' />
      </nav>
      <BiSolidCameraMovie className='block absolute left-3 top-3 w-10 h-10 text-red-600 sm:hidden' />
      <div
        className="bg-cover bg-center bg-no-repeat h-2/5 sm:h-[60vh] sm:min-h-[400px]"
        style={{
          backgroundImage: "url('https://hervehubert.tv/wp-content/uploads/2019/10/Logo-full-hd-1.jpg')",
        }}
      ></div>
      <div className='bg-black sm:bg-transparent text-white sm:min-h-[400px] h-3/5 p-5 pb-10 flex flex-col gap-5 sm:absolute sm:top-0 sm:bg-gradient-to-br sm:from-black sm:to-transparent  sm:w-vw-16 sm:h-[60vh]'>
        <h2 className='font-bold text-4xl '>SAM AWAY</h2>
        <p className='text-xs  font-thin text-gray-400'>Adventure, Fantasy  |  2019  |  136 Min.</p>
        <p className='max-w-xs text-md  font-extralight'>When a tornado hits through City of Peaceville, Samantha (Jenny Loifer) and her dog, Ricko, are whisked away in their house to an amazing journey.</p>
        <div>
          <p className='font-thin text-sm'>Director: Todd Burns</p>
          <p className=' font-thin text-sm'>Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.</p>
        </div>
        <button className='hover:bg-red-600 hover:text-white w-36 flex items-center text-red-600 p-5 pt-2 pb-2 border border-red-600 rounded-3xl'>
          <BiPlay className='w-5 h-5 -ml-2' />
          <p>
            Watch Now
          </p>
        </button>
      </div>
    </div>
    )
}

export default Top;