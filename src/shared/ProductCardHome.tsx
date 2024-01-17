import { SpecialButton } from "./SpecialButton";

export default function ProductCardHome(){
  return (
    <div className="flex flex-rowmax-h-lg bg-[url('https://r4.wallpaperflare.com/wallpaper/275/469/224/germany-watzmann-sky-mountain-wallpaper-29a068dd511aad3b0677384f8041b69d.jpg')]">
      {/* da controllare il padding */}
      <div className="w-4/4 max-h-50 pl-10 pt-16 pb-12 pr-10  tablet:w-2/4 pt-36 pb-56 ">
        <h1 className="font-bold text-s tablet:font-bold text-3xl pb-6 text-white ">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </h1>
        <p className="text-s tablet:text-l pb-6 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <SpecialButton content="Shop now" />
      </div>
      {/* <img
        src="https://i.ibb.co/71FJL25/pexels-charlotte-may-5947113-Photo-Room-png-Photo-Room.png"
        className="absolute right-20 top-80 h-4/6 w-1/3 "
      /> */}
    </div>
  );
}