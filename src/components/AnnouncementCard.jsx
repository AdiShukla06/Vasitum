import React, { useState } from 'react';
import Card from './Card';
import { TfiPinAlt } from "react-icons/tfi";

const AnnouncementCard = ({ announcements }) => {
  // Initialize an array of state values for the pin icons
  const [pinned, setPinned] = useState(
    Array(announcements.length).fill(false)
  );

  // Function to toggle the pin state
  const togglePin = (index) => {
    setPinned((prev) =>
      prev.map((pin, i) => (i === index ? !pin : pin))
    );
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Announcement</h3>
        <input
          type="date"
          defaultValue="2021-09-13"
          className="text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1"
        />
      </div>
      <ul className="space-y-4 ">
        {announcements.map((announcement, index) => (
          <li key={index} className="flex justify-between items-start bg-gray-200 rounded-md p-2">
            <div >
              <p className="font-medium text-sm text-gray-800">{announcement.title}</p>
              <p className="text-sm text-gray-500">{announcement.time}</p>
            </div>
            <div className="flex items-center space-x-2">
              <TfiPinAlt
                className={`cursor-pointer ${
                  pinned[index] ? 'text-gray-800' : 'text-gray-400'
                } hover:text-gray-600`}
                onClick={() => togglePin(index)}
              />
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        <button className="text-red-500 font-medium">See All Announcements</button>
      </div>
    </Card>
  );
};

export default AnnouncementCard;
