import { useState } from "react";
import { SpecialButton } from "./SpecialButton";

export function ProductCard() {
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-full max-h-full bg-[#c8a485]/60 flex flex-col md:flex-row items-center justify-between mb-20 md:rounded-lg">
      <div
        className="relative object-fill md:px-5 md:py-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="img product"
          className="relative rounded-none md:w-full h-full md:rounded-lg"
        />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center transition delay-200 bg-zinc-700 bg-opacity-60 z-2 mx-5 my-8 rounded-lg">
            <div className="">
              <SpecialButton content="Shop now" />
            </div>
          </div>
        )}
      </div>
      <div className="w-4/5 flex flex-col items-start md:px-10 py-10 md:w-3/5">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white pb-5">
          Exceptional Taste, Pure Style
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Explore excellence with Loki. Our whiskies and distinctive spirits embody refined taste, guiding you through an exceptional experience. Let each sip be an invitation to discover the art of indulging in life's pleasures with style and distinction.         </p>
      </div>
    </div>
  );
}
