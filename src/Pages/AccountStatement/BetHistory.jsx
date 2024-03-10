import { useState } from 'react';
import NoDataImage from './No-data.jpg'

const BetHistory = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [data, setData] = useState([]);
    const [GameType, setGameType] = useState('Football');
    const [matchStauts, setmatchStauts] = useState('Matched');


    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleTransactionTypeChange = (e) => {
        setGameType(e.target.value);
    };
    const handlematchStauts = (e) => {
        setmatchStauts(e.target.value);
    };

    const handleSubmit = () => {
        // Replace this with your actual data fetching logic
        // For now, just using sample data
        setData([
            { eventName: 'Football', nation: 'USA', betType: 'Win', userRate: 2.5, amount: 100, profitLoss: 50, placeDate: '2022-01-01', matchDate: '2022-01-05' },
            { eventName: 'Tennis', nation: 'Spain', betType: 'Loss', userRate: 1.8, amount: 150, profitLoss: -50, placeDate: '2022-01-02', matchDate: '2022-01-06' },
            // Add more data as needed
          ]);
          
    };

    return (
        <div className="container min-h-screen mx-auto p-4 overflow-x-auto">
            <h1 className="text-3xl font-bold mb-6">Bet History</h1>
            <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                    <select
                        value={GameType}
                        onChange={handleTransactionTypeChange}
                        className="border p-2"
                    >
                        <option>Sports Type...</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>

                        <option value="Tennis">Tennis</option>
                    </select>
                    <select
                        value={matchStauts}
                        onChange={handlematchStauts}
                        className="border p-2"
                    >
                        <option>Match Status...</option>
                        <option value="Deleted">Deleted</option>
                        <option value="Deleted">Deleted</option>


                    </select>
                </div>
             
                <div className="flex items-center space-x-2">
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                      <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        placeholder="Select Date"
                        style={{ maxWidth: '200px' }}
                    />
                </div>
           

                <button
                    onClick={handleSubmit}
                    className="bg-[#04A1A6] text-white px-4 py-2 ml-4 rounded-md transition duration-300 hover:bg-[#04a1a6bb]"
                >
                    Submit
                </button>
            </div>

            {/* Table */}
            {data.length > 0 ? (
                    <div className="max-w-screen-sm lg:max-w-screen-2xl md:max-w-screen-2xl overflow-x-auto">
                    <table className="table-fixed w-full mb-8 overflow-x-auto">
                        <thead className='text-left'>
                            <tr className="bg-gray-200">
                                <th className="p-2 w-32 ">Event Name</th>
                                <th className="p-2 w-32 ">Nation</th>
                                <th className="p-2 w-32 ">Bet Type</th>
                                <th className="p-2 w-32 ">User Rate</th>
                                <th className="p-2 w-32 ">Amount</th>
                                <th className="p-2 w-32 ">Profit/Loss</th>
                                <th className="p-2 w-32 ">Place Date</th>
                                <th className="p-2 w-32 ">Match Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry) => (
                                <tr key={entry.srNo} className="border-b">
                                <td className="p-2">{entry.eventName}</td>
                                <td className="p-2">{entry.nation}</td>
                                <td className="p-2">{entry.betType}</td>
                                <td className="p-2">{entry.userRate}</td>
                                <td className={`p-2 ${entry.amount <= 100 ? 'text-red-500' : 'text-green-500'}`}>{entry.amount}</td>
                                <td className={`p-2 ${entry.profitLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>{entry.profitLoss}</td>
                                <td className="p-2">{entry.placeDate}</td>
                                <td className="p-2">{entry.matchDate}</td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mx-auto h-[60vh] max-w-3xl">
                    <img src={NoDataImage} alt="No data available" className=" object-cover h-full w-full mx-auto mb-4" />
                </div>
            )}
        </div>
    );
};

export default BetHistory;
