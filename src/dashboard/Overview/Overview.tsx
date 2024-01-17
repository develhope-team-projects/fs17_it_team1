import PiechartGender from "./PiechartGender";
import AreachartSales from "./AreachartSales";
import BarchartProva from "./BarchartProductSales";
import { useContext } from "react";
import { userContext } from "../../loginESubscription/AuthContext";

export default function Overview() {
  const contesto = useContext(userContext);

  return (
    <div className="w-screen bg-light-bg">
      <h2 className="flex items-center text-5xl font-bold dark:text-white">
        Overview idUtente:{contesto}
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
