import { useState } from "react";
import { SpecialButton } from "./SpecialButton";
import { useMediaQuery } from "@react-hook/media-query";

export type Post = {
  img: string;
  title: string;
  description: string;
};

export function ProductCard(props: Post) {
  const [hover, setHover] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");

  return isMobileOrTablet ? (
    <div className="max-w-full max-h-full bg-dark-bg flex flex-col items-center ">
      <div className="flex flex-col items-center justify-center px-9 py-9 h-full">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white pb-5">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
      <div
        className={`relative`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={props.img} alt="img product" className="w-full h-full" />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-700/[0.6] z-1 ease-linear-400">
            <div className="z-20">
              <SpecialButton content="Shop now" />
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="max-w-full max-h-full bg-dark-bg flex flex-row items-center justify-between">
      <div
        className={`relative`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={props.img} alt="img product" className="w-full h-full" />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-700/[0.6] z-1 ease-linear-400">
            <div className="z-2">
              <SpecialButton content="Shop now" />
            </div>
          </div>
        )}
      </div>
      <div className="w-3/5 flex flex-col items-start  px-10 py-10">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white pb-5">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
}
