import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref )=> {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="p-2 cursor-pointer  transition-all duration-500 ease-in-out transform sm:hover:scale-105 sm:hover:z-50 font-sans  group">
      <Image
        layout="responsive"
        // className="object-contain"
        src={`${BASE_URL}${result.backdrop_path}`}
        height={1080}
        width={1980}
        className="shadow-2xl filter grayscale group-hover:grayscale-0 rounded-md opacity-70 group-hover:opacity-80"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-2 text-white text-2xl transition-all duration-500 ease-in-out group-hover:font-bold ">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
          {result.media_type && `${result.media_type} * `}{" "}
          {result.release_date || result.first_air_date} *{" "}
          <ThumbUpIcon className="h-5 mx-2" />
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
