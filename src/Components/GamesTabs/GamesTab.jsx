import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, selectActiveTab } from '../../Store/Slices/TabSlice';

const GamesTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const tabs = [
    'Football',
    'Tennis',
    'Cricket',
    'Esoccer',
    'Horse Racing',
    'Table Tennis',
    'Greyhound Racing',
    'Basketball',
    'Volleyball',
    'Kabaddi',
    'Badminton',
    'American Football',
    'Futsal',
    'E Games',
    'Snooker',
  ];

  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
  };

  return (
    <div className="flex mt-3 addinSamall flex-wrap ">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer px-1 py-1 text-sm  border-2 rounded ${activeTab === index ? 'text-white bg-[#04A1A6]' : 'bg-gray-300'}`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default GamesTab;
