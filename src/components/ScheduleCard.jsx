import React from 'react';
import Card from './Card';

const ScheduleCard = ({ schedules }) => {
  // Assuming the first schedule is the priority and the rest are others
  const [prioritySchedule, ...otherSchedules] = schedules;

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Schedule</h3>
        <input
          type="date"
          defaultValue="2021-09-13"
          className="text-xs text-gray-500 border border-gray-300 rounded-md px-2 py-1"
        />
      </div>

      {/* Priority Section */}
      <h4 className="text-sm font-semibold text-gray-500 mb-2">Priority</h4>
      <ul className="space-y-4">
        <li className="flex justify-between items-start bg-red-200 p-1 rounded-md px-2">
          <div>
            <p className="font-medium text-gray-800">{prioritySchedule.title}</p>
            <p className="text-xs mt-1 text-gray-500">{prioritySchedule.time}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">•••</button>
        </li>
      </ul>

      {/* Other Section */}
      <h4 className="text-sm font-semibold text-gray-500 mt-6 mb-2">Other</h4>
      <ul className="space-y-4">
        {otherSchedules.map((schedule, index) => (
          <li key={index} className="flex justify-between items-start bg-gray-200 p-1 rounded-md px-2">
            <div>
              <p className="font-medium text-gray-800">{schedule.title}</p>
              <p className="text-xs mt-1 text-gray-500">{schedule.time}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-center">
        <button className="text-red-500 font-medium">Create a New Schedule</button>
      </div>
    </Card>
  );
};

export default ScheduleCard;
