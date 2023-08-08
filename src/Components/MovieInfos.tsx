import React from 'react';
import { BsShareFill } from 'react-icons/bs';
import { TbListSearch } from 'react-icons/tb';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdMoneyOff } from 'react-icons/md';

interface Props {
    data: MovieDetails;
}

const MovieInfos: React.FC<Props> = (props) => {
    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        } else {
            return num.toString();
        }
    };

    return (
        <>
            <div className="my-0 mx-auto w-full max-w-[1300px]">
                <div className="flex h-10 items-center justify-end gap-6 px-5 text-white lg:px-10 text-sm font-semibold">
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
            <div className="my-0 mx-auto flex w-full max-w-[1300px] justify-between px-5 text-white lg:px-10">
                <div>
                    <div className="text-5xl">{props.data?.original_title}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span>{props.data?.release_date.slice(0, 4)}</span>
                        <span className="pb-2">.</span>
                        <span>R</span>
                        <span className="pb-2">.</span>
                        <span>
                            {Math.floor(props.data?.runtime ? props.data?.runtime / 60 : 0).toString() +
                                "h " +
                                (props.data?.runtime && props.data?.runtime % 60
                                    ? (props.data?.runtime % 60) + "m"
                                    : "")}
                        </span>
                    </div>
                </div>
                <div className="hidden mr-4 lg:flex gap-2 items-center">
                    <div className="w-28 text-center text-sm">
                        <span className="text-xs tracking-widest  text-white opacity-50 font-bold">
                            API RATING
                        </span>
                        <div className="cursor-pointer flex h-10 items-center justify-center gap-2 rounded hover:bg-white hover:bg-opacity-10 font-semibold">
                            <AiFillStar className="h-6 w-6 text-yellow-500" />
                            <div className="flex flex-col text-left justify-start">
                                <span className='text-base'>{props.data?.vote_average.toFixed(2)}<span className="text-gray-300 text-xs">/10</span></span>
                                <span className="text-gray-400 text-xs">
                                    {formatNumber(props.data?.vote_count ? props.data.vote_count : 0)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-28 text-center text-xs">
                        <span className=" tracking-widest  text-white opacity-50 font-bold">
                            YOUR RATING
                        </span>
                        <div className="cursor-pointer w-fit px-2 flex h-10 items-center justify-center gap-2 text-blue-500 rounded hover:bg-white hover:bg-opacity-10 font-semibold">
                            <AiOutlineStar className="h-6 w-6" />
                            <span className="text-lg">Rate</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-28 text-center  font-semibold text-xs">
                        <span className="text-xs tracking-widest  text-white opacity-50  font-bold">
                            BUDGET
                        </span>
                        <div className="cursor-pointer w-fit flex gap-2 h-10 items-center justify-center rounded hover:bg-white hover:bg-opacity-10">
                            <MdMoneyOff className="h-6 w-6 text-yellow-600" />
                            <span>{formatNumber(props.data?.budget ? props.data?.budget : 0) + " $"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieInfos;