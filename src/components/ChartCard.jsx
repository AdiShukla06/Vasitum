import React from "react";
import Card from "./Card";


const ChartCard = ({ title, value, chart, subtext, men, women, img }) => {
  return (
    <Card>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-xs mt-3 text-gray-500 font-semibold">{`${men} Men`}</p>
          <p className="text-xs text-gray-500 font-semibold">{`${women} Women`}</p>
        </div>

        <div className="h-20 flex flex-col">
          <img src={img} alt="Chart" />
          <p className="text-gray-800 font-semibold text-xs text-center bg-orange-100 p-0.5">
            {subtext}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ChartCard;
