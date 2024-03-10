import { useState, useEffect } from 'react';
import NoDataImage from './No-data.jpg'

const UnsetteledMatchs = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('matched');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setData([
                { eventName: 'Football', nation: 'USA', betType: 'Win', userRate: 2.5, amount: 100, profitLoss: 50, placeDate: '2022-01-01', matchDate: '2022-01-05' },
                { eventName: 'Tennis', nation: 'Spain', betType: 'Loss', userRate: 1.8, amount: 150, profitLoss: -50, placeDate: '2022-01-02', matchDate: '2022-01-06' },

            ]);
            setLoading(false);
        }, 2000);
    };

    const handleRadioChange = (value) => {
        setLoading(true);
        setSelectedOption(value);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        handleSubmit()
    };

    useEffect(() => {
        // Fetch data based on the selected radio button
        // Add your logic here
    }, [selectedOption]);

    return (
        <div className="container min-h-screen mx-auto p-4 overflow-x-auto">
            <h1 className="text-3xl font-bold mb-6">Bet History</h1>
            <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                    <label className="text-lg">Select:</label>
                    <input
                        type="radio"
                        name="betType"
                        value="matched"
                        checked={selectedOption === 'matched'}
                        onChange={() => handleRadioChange('matched')}
                    />
                    <span className="mr-4">Matched</span>

                    <input
                        type="radio"
                        name="betType"
                        value="unmatched"
                        checked={selectedOption === 'unmatched'}
                        onChange={() => handleRadioChange('unmatched')}
                    />
                    <span className="mr-4">Unmatched</span>

                    <input
                        type="radio"
                        name="betType"
                        value="deleted"
                        checked={selectedOption === 'deleted'}
                        onChange={() => handleRadioChange('deleted')}
                    />
                    <span>Deleted</span>
                </div>
               
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-r-2 border-b-2 border-gray-700"></div>
                </div>
            ) : (
                <>
                    {data.length > 0 ? (
                        <div className="max-w-screen-sm lg:max-w-screen-2xl md:max-w-screen-2xl overflow-x-auto">
                            <table className="table-fixed w-full mb-8 overflow-x-auto">
                                <thead className='text-left'>
                                    <tr className="bg-gray-200">
                                        <th className="p-2 w-32">Event Name</th>
                                        <th className="p-2 w-32">Nation</th>
                                        <th className="p-2 w-32">Bet Type</th>
                                        <th className="p-2 w-32">User Rate</th>
                                        <th className="p-2 w-32">Amount</th>
                                        <th className="p-2 w-32">Profit/Loss</th>
                                        {selectedOption !== 'deleted' && selectedOption !== 'unmatched' && (
                                            <>
                                                <th className="p-2 w-32">Place Date</th>
                                                <th className="p-2 w-32">Match Date</th>
                                            </>
                                        )}
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
                                            {selectedOption !== 'deleted' && selectedOption !== 'unmatched' && (
                                                <>
                                                    <td className="p-2">{entry.placeDate}</td>
                                                    <td className="p-2">{entry.matchDate}</td>
                                                </>
                                            )}
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
                </>
            )}
        </div>
    );
};

export default UnsetteledMatchs;