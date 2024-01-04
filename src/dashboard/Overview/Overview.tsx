import PiechartGender from "./PiechartGender";
import AreachartSales from "./AreachartSales";
import BarchartProva from "./BarchartProva";

export default function Overview() {
  return (
    <div className="w-screen bg-our-black">
      <h2 className="flex items-center text-5xl font-bold dark:text-white mb-6">
        Overview
      </h2>
      <div className="flex flex-col	justify-around w-full h-[88%]">
        <AreachartSales />
        <div className="flex w-full h-3/6">
          <PiechartGender />
          <BarchartProva />
        </div>
      </div>
    </div>
  );
}
