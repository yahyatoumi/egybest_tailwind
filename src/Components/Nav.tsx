import { useState, useRef } from "react";
import { BiSolidCameraMovie, BiCaretDown, BiSearch } from "react-icons/bi";
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"

const Nav = () => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputRef0 = useRef<HTMLInputElement | null>(null);
    const [search, setSearch] = useState(false);
    const handleSearchIconClick = () => {
        setSearch(true);
        inputRef.current?.focus();
    };
    return (
        <nav className="h-14 w-screen bg-black lg:pl-10 lg:pr-10 pr-5 pl-5 flex justify-between">
            <div className="flex items-center lg:w-40 w-32 h-full justify-center lg:justify-center lg:gap-2 gap-2 lg:flex-row flex-row-reverse">
                <BiSolidCameraMovie className="w-10 h-10 text-red-600 cursor-pointer" />
                <div className="flex items-center justify-center gap-1 hover:bg-white hover:bg-opacity-10 rounded-md w-12 lg:w-24 h-12 lg:h-8 cursor-pointer">
                    <div className="w-5 h-4 flex justify-around flex-col">
                        <div className="w-full h-0.5 bg-white"></div>
                        <div className="w-full h-0.5 bg-white"></div>
                        <div className="w-full h-0.5 bg-white"></div>
                    </div>
                    <span className="hidden lg:block text-white font-bold">Menu</span>
                </div>
            </div>
            <div className="hidden relative sm:flex w-full h-full justify-center items-center pl-5 pr-5">
                <div className="w-12 bg-gray-100 h-3/6 text-center leading-relaxed font-semibold rounded-l border-r border-gray-500">All</div>
                <input ref={inputRef0} type="text" placeholder="Search IMDB" className="text-sm text-gray-600 w-full outline-0 pl-2 h-3/6 rounded-r" />
                <BiSearch className="text-black h-5 absolute right-10 top-2/4 -mt-2.5 cursor-pointer"
                    onClick={() => inputRef0?.current?.focus()} />
            </div>
            <div className="flex items-center min-w-[175px] lg:min-w-[350px] h-full justify-between lg:justify-center lg:gap-2 gap-2 flex-row">
                <div className="hidden sm:flex justify-between items-center w-1 lg:w-3/5">
                    <div className="hidden lg:flex hover:bg-white hover:bg-opacity-10 rounded cursor-pointer h-8 pl-2 pr-2  gap-1 justify-center items-center">
                        <BiSolidCameraMovie className="w-4 h-4 text-red-600 cursor-pointer" />
                        <span className="text-lg font-bold text-white">Pro</span>
                    </div>
                    <div className="w-0.5 bg-gray-500 h-8"></div>
                    <div className="hidden lg:flex hover:bg-white hover:bg-opacity-10 rounded cursor-pointer h-8 pl-2 pr-2 justify-center gap-1 items-center">
                        <BsFillBookmarkPlusFill className="w-4 h-4 text-white cursor-pointer" />
                        <span className="text-sm font-bold text-white">Watchlist</span>
                    </div>
                </div>
                <div className="hover:bg-gray-500 rounded cursor-pointer sm:hidden h-8 w-10 flex justify-center items-center"
                    onClick={handleSearchIconClick}>
                    <BiSearch className="text-white h-5" />
                </div>
                {search ? <div className="absolute flex left-0 w-full h-14 bg-gray-500">
                    <input ref={inputRef} autoFocus type="text" className="w-full bg-gray-500 outline-0 ml-5" placeholder="Search IMDB" />
                    <div className="hover:bg-gray-800 rounded-2xl cursor-pointer h-8 w-8 absolute top-2/4 -mt-4 right-4 flex justify-center items-center"
                        onClick={() => setSearch(false)}>
                        <IoMdClose className="h-6 w-6 text-white " />
                    </div>
                </div> : ""
                }
                <div className="flex  justify-center items-center w-11/12 lg:w-3/5">
                    <div className="hover:bg-white hover:bg-opacity-10 w-3/5 rounded cursor-pointer h-8 pl-1 pr-1 flex justify-center items-center">
                        <span className="text-sm font-bold text-white w-full text-center">Sign in</span>
                    </div>
                    <div className="hover:bg-white hover:bg-opacity-10 w-2/5 rounded cursor-pointer h-8 pl-1 pr-1 flex justify-center items-center">
                        <span className="text-sm font-bold text-white">EN</span>
                        <BiCaretDown className="w-4 h-4 text-white cursor-pointer ml-2" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;