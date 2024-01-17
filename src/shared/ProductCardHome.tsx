import { SpecialButton } from "./SpecialButton";

export default function ProductCardHome({ img = true, h = 60, p = true }) {
  return (
    <div className="flex flex-rowmax-h-lg bg-[url('https://r4.wallpaperflare.com/wallpaper/275/469/224/germany-watzmann-sky-mountain-wallpaper-29a068dd511aad3b0677384f8041b69d.jpg')]">
      {/* da controllare il padding */}
      <div className={`w-4/4 max-h-30 pl-10 py-${h} pr-10  tablet:w-2/4`}>
        <h1 className="font-bold text-s tablet:font-bold text-3xl pb-6 text-white ">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </h1>
        {p && (
          <p className="text-s tablet:text-l pb-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        )}
        <SpecialButton content="Shop now" />
      </div>
      {img && (
        <img
          src="https://pngimg.com/d/whisky_PNG85.png"
          className="w-[40%] m-auto opacity-80 rotate"
        />
      )}
    </div>
  );
}
