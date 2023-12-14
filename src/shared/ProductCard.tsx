

import { useState } from "react";
import { SpecialButton } from "./SpecialButton";

export type Post = {
  img: string;
  title: string;
  description: string;
};

export function ProductCard(props: Post) {
  const [hover, setHover] = useState(false);
  return (
    <div className="max-w-full bg-dark-bg flex flex-row items-center justify-between">
      <div
        className={`relative w-2/5 max-h-fit `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={props.img} alt="img product" className="w-full h-full" />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center bg-amber-700/[0.6] z-1">
            <div className="z-20">
              <SpecialButton content="Shop now" />
            </div>
          </div>
        )}
      </div>
      <div className="w-3/5 flex flex-col items-start  px-10">
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
