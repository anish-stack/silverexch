import Football from "../../Components/Games/Football/Football";
import GreyHoundRaces from "../../Components/Games/GreyHoundRaces/GreyHoundRaces";
import GamesTab from "../../Components/GamesTabs/GamesTab";
import {  useSelector } from 'react-redux';
import { selectActiveTabContent } from "../../Store/Slices/TabSlice";
import Tennis from "../../Components/Games/Tenis/Tennis";
import Badmintion from "../../Components/Games/Badmintion/Badmintion";
import Cricket from "../../Components/Games/Cricket/Cricket";
import EGames from "../../Components/Games/E-Games/EGames";
import Esscocer from "../../Components/Games/Essocer/Esscocer";
import HorseRacing from "../../Components/Games/HorseRacing/HorseRacing";
import Kabbaddi from '../../Components/Games/Kabbaddi/Kabbaddi';
import Snokker from '../../Components/Games/Snooker/Snokker';
import TableTennis from '../../Components/Games/TableTennis/TableTennis';
import AmericanFootball from '../../Components/Games/American Football/AmericanFootball';
import VolleyBall from '../../Components/Games/VolleyBall/VolleyBall';
import Futsal from '../../Components/Games/Futsal/Futsal';

import BasketBall from '../../Components/Games/BasketBall/BasketBall';
import GameCard from "../../Components/AllGameCards/GameCard";
import SideBars from "../../Components/SideBars/SideBars";













const Tables = () => {
    const activeTabContent = useSelector(selectActiveTabContent);

    return (
        <div className="w-full min-h-screen">
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-[15%] Onhidden ">
                    <SideBars/>
                </div>
                <div className="w-[85%] onshow ">
                    <GamesTab />
                    {activeTabContent === 'Football' && <Football />}
                    {activeTabContent === 'Greyhound Racing' && <GreyHoundRaces />}
                    {activeTabContent === 'Tennis' && <Tennis />}
                    {activeTabContent === 'Badminton' && <Badmintion />}
                    {activeTabContent === 'Cricket' && <Cricket />}
                    {activeTabContent === 'E Games' && <EGames />}
                    {activeTabContent === 'Esoccer' && <Esscocer />}
                    {activeTabContent === 'Horse Racing' && <HorseRacing />}
                    {activeTabContent === 'American Football' && <AmericanFootball />}
                    {activeTabContent === 'Kabaddi' && <Kabbaddi />}
                    {activeTabContent === 'Snooker' && <Snokker />}
                    {activeTabContent === 'Table Tennis' && <TableTennis />}
                    {activeTabContent === 'Volleyball' && <VolleyBall />}
                    {activeTabContent === 'Basketball' && <BasketBall />}
                    {activeTabContent === 'Futsal' && <Futsal />}

        <GameCard/>
                    


                    {/* Add more conditions for other components based on activeTabContent */}
                </div>
            </div>
        </div>
    );
}

export default Tables;
