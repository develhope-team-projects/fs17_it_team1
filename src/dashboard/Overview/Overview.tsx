import PiechartProva from "./PiechartProva";
import AreachartProva from "./AreachartProva";
import BarchartProva from "./BarchartProva";

export default function Overview() {
  return (
    <div className="w-screen bg-our-black">
      <h2 className="flex items-center text-5xl font-bold dark:text-white mb-8">
        Overview
      </h2>
      <div className="flex flex-col	justify-around w-full h-[88%]">
        <AreachartProva />
        <div className="flex w-full h-3/6">
          <PiechartProva />
          <BarchartProva />
        </div>
      </div>
    </div>
  );
}
