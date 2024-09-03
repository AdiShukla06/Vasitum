import React from "react";
import StatCard from "./StatCard.jsx";
import ChartCard from "./ChartCard";
import AnnouncementCard from "./AnnouncementCard";
import ScheduleCard from "./ScheduleCard";
import Card from "./Card";

import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";

const Dashboard = () => {
  const announcements = [
    { title: "Outing schedule for every department", time: "5 minutes ago" },
    { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    {
      title: "IT Department needs two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];

  const schedules = [
    { title: "Review candidate applications", time: "Today - 11:30 AM" },
    { title: "Interview with candidates", time: "Today - 10:30 AM" },
    {
      title: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Available Position"
              value="24"
              subtext="4 Urgently needed"
              color="bg-red-100"
              subtextColor="text-red-600"
            />
            <StatCard
              title="Job Open"
              value="10"
              subtext="4 Active hiring"
              color="bg-blue-100"
              subtextColor="text-blue-600"
            />
            <StatCard
              title="New Employees"
              value="24"
              subtext="4 Departments"
              color="bg-pink-100"
              subtextColor="text-pink-600"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartCard
              title="Total Employees"
              value="216"
              subtext="+2% Past month"
              men="120"
              women="96"
              img={graph1}
            />
            <ChartCard
              title="Talent Request"
              value="16"
              subtext="+5% Past month"
              men="6"
              women="10"
              img={graph2}
            />
          </div>
          <AnnouncementCard announcements={announcements} />
        </div>
        {/* Right Side */}
        <div className="space-y-6">
          <Card className="bg-indigo-950 text-white p-4">
            <h3 className="text-lg font-semibold mb-2">Recently Activity</h3>

            {/* Random time, day, date, year */}
            <p className="text-xs mb text-gray-300">
              10:30 AM, Tue 7 Sep 2021
            </p>

            <p className="mb-4 font-bold mt-2">You Posted a New Job</p>
            <p className="text-xs text-gray-300 mb-4">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>

            {/* Container to hold the activities and button side by side */}
            <div className="flex justify-between items-center">
              <p className="text mb-2">Today you made 12 Activities</p>
              <button className="bg-red-500 text-white px-2 py-2 rounded text-xs">
                See All Activity
              </button>
            </div>
          </Card>

          <ScheduleCard schedules={schedules} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
