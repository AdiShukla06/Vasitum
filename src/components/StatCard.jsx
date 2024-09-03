import React from 'react';
import Card from './Card';

const StatCard = ({ title, value, subtext, color, subtextColor }) => {
  return (
    <Card className={`${color} text-black border-none`}>
      <h3 className="text font-semibold mb-1">{title}</h3>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className={`text-xs font-semibold opacity-100 ${subtextColor}`}>{subtext}</p>
    </Card>
  );
};

export default StatCard;