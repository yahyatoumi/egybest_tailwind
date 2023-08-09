import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { BiSolidCameraMovie, BiCaretDown, BiSearch } from "react-icons/bi";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import searchData from "../helpers/searchFetch";
import { Link } from "react-router-dom";

const Nav = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRef0 = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState(false);
  const [search0, setSearch0] = useState(false);
  const [query, setQuery] = useState("");
  const { data } = useQuery<Movie[]>(["search", query], () =>
    searchData(query),
  );
  console.log(data);
  const handleSearchIconClick = () => {
    setSearch(true);
    inputRef.current?.focus();
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".search")) {
        setSearch(false);
        setSearch0(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="w-screen bg-black">
      <nav className="my-0 mx-auto flex  h-14 w-screen max-w-[1300px] justify-between pr-5 pl-5 lg:pl-10 lg:pr-10">
        <div className="justify-right -ml-10 flex h-full w-32 flex-row-reverse items-center gap-2 sm:ml-0 lg:w-40 lg:flex-row lg:justify-center lg:gap-2">
          <BiSolidCameraMovie className="h-10 w-10 cursor-pointer text-red-600" />
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center gap-1 rounded-md hover:bg-white hover:bg-opacity-10 lg:h-8 lg:w-24">
            <div className="flex h-4 w-5 flex-col justify-around">
              <div className="h-0.5 w-full bg-white"></div>
              <div className="h-0.5 w-full bg-white"></div>
              <div className="h-0.5 w-full bg-white"></div>
            </div>
            <span className="hidden font-bold text-white lg:block">Menu</span>
          </div>
        </div>
        <div className="relative hidden h-full w-full items-center justify-center pl-5 pr-5 sm:flex">
          <div className="h-3/6 w-12 rounded-l border-r border-gray-500 bg-gray-100 text-center font-semibold leading-relaxed">
            All
          </div>
          <input
            ref={inputRef0}
            type="text"
            placeholder="Search IMDB"
            className="h-3/6 w-full rounded-r pl-2 text-sm text-gray-600 outline-0"
            onClick={() => setSearch0(true)}
            onChange={() =>
              setQuery(inputRef0.current?.value ? inputRef0.current?.value : "")
            }
          />
          <BiSearch
            className="absolute right-10 top-2/4 -mt-2.5 h-5 cursor-pointer text-black"
            onClick={() => {
              inputRef0?.current?.focus();
              setSearch0(true);
            }}
          />
          {search || search0 ? (
            <div className="search absolute top-14 z-10 w-full px-5">
              {data?.slice(0, 5).map((film) => (
                <Link
                  className="flex cursor-pointer border-b bg-black p-5 text-white hover:bg-gray-900"
                  to={`/movie/${film.id}`}
                  key={film.id}
                >
                  <div className="w-12">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" + film.poster_path
                      }
                      alt=""
                    />
                  </div>
                  <div className="items-left ml-2 flex flex-col justify-center">
                    <span>{film.title}</span>
                    <span>{film.release_date.slice(0, 4)}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex h-full min-w-[175px] flex-row items-center justify-between gap-2 lg:min-w-[350px] lg:justify-center lg:gap-2">
          <div className="hidden w-1 items-center justify-between sm:flex lg:w-3/5">
            <div className="hidden h-8 cursor-pointer items-center justify-center gap-1 rounded pl-2 pr-2  hover:bg-white hover:bg-opacity-10 lg:flex">
              <BiSolidCameraMovie className="h-4 w-4 cursor-pointer text-red-600" />
              <span className="text-lg font-bold text-white">Pro</span>
            </div>
            <div className="h-8 w-0.5 bg-gray-500"></div>
            <div className="hidden h-8 cursor-pointer items-center justify-center gap-1 rounded pl-2 pr-2 hover:bg-white hover:bg-opacity-10 lg:flex">
              <BsFillBookmarkPlusFill className="h-4 w-4 cursor-pointer text-white" />
              <span className="text-sm font-bold text-white">Watchlist</span>
            </div>
          </div>
          <div
            className="flex h-8 w-10 cursor-pointer items-center justify-center rounded hover:bg-gray-500 sm:hidden"
            onClick={handleSearchIconClick}
          >
            <BiSearch className="h-5 text-white" />
          </div>
          {search ? (
            <div className="absolute left-0 flex h-14 w-full bg-gray-500">
              <input
                ref={inputRef}
                autoFocus
                type="text"
                className="search ml-5 w-full bg-gray-500 outline-0"
                placeholder="Search IMDB"
                onChange={() =>
                  setQuery(
                    inputRef.current?.value ? inputRef.current?.value : "",
                  )
                }
              />
              {search || search0 ? (
                <div className="search absolute top-14 z-10 w-full px-5">
                  {data?.slice(0, 5).map((film) => (
                    <Link
                      className="flex cursor-pointer border-b bg-black p-5 text-white hover:bg-gray-900"
                      to={`/movie/${film.id}`}
                      key={film.id}
                    >
                      <div className="w-12">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            film.poster_path
                          }
                          alt=""
                        />
                      </div>
                      <div className="items-left ml-2 flex flex-col justify-center">
                        <span>{film.title}</span>
                        <span>{film.release_date.slice(0, 4)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                ""
              )}
              <div
                className="absolute top-2/4 right-4 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl hover:bg-gray-800"
                onClick={() => setSearch(false)}
              >
                <IoMdClose className="h-6 w-6 text-white " />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex  w-11/12 items-center justify-center lg:w-3/5">
            <div className="flex h-8 w-3/5 cursor-pointer items-center justify-center rounded pl-1 pr-1 hover:bg-white hover:bg-opacity-10">
              <span className="w-full text-center text-sm font-bold text-white">
                Sign in
              </span>
            </div>
            <div className="flex h-8 w-2/5 cursor-pointer items-center justify-center rounded pl-1 pr-1 hover:bg-white hover:bg-opacity-10">
              <span className="text-sm font-bold text-white">EN</span>
              <BiCaretDown className="ml-2 h-4 w-4 cursor-pointer text-white" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
