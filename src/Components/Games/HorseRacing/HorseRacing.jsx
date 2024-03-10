import { useState } from "react";

const HorseRacing = () => {
  const data = {
    GB: [
      { place: 'Wolverhampton', time: '12:00 PM' },
      { place: 'Manchester', time: '2:30 PM' },
      // Add more data for GB
    ],
    In: [
      { place: 'Mumbai', time: '3:30 PM' },
      { place: 'Delhi', time: '5:45 PM' },
      // Add more data for In
    ],
    Fr: [
      { place: 'Paris', time: '6:45 PM' },
      { place: 'Marseille', time: '8:15 PM' },
      // Add more data for Fr
    ],
    Ie: [
      { place: 'Dublin', time: '2:15 PM' },
      { place: 'Cork', time: '4:00 PM' },
      // Add more data for Ie
    ],
    Au: [
      { place: 'Sydney', time: '9:00 AM' },
      { place: 'Melbourne', time: '10:30 AM' },
      // Add more data for Au
    ],
  };

  const [activeTab, setActiveTab] = useState('GB');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="w-[80%]">
        <div className="flex ml-5  px-5 py-2  text-white">
          {/* Add tabs here with onClick event */}
          {Object.keys(data).map((tab) => (
            <div
              className={`cursor-pointer py-2 px-5 ${
                activeTab === tab ? 'bg-[#04A1A6]' : 'bg-[#CCCCCC]'
              }`}
              key={tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="min-h-[20vh] p-5">
          {/* Render content based on the selected tab */}
          <table className="table-auto text-left w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Place</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {data[activeTab].map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="px-4 py-2">{item.place}</td>
                  <td className="px-4 py-2">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HorseRacing;
