import { useState } from 'react';
import NoDataImage from './No-data.jpg'

const CasinoReportHistory = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCasinoType, setSelectedCasinoType] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleCasinoTypeChange = (event) => {
        setSelectedCasinoType(event.target.value);
    };

    const handleSubmit = () => {
        // Replace this with your actual data fetching logic
        // For now, just using sample data
        setTableData([
            { roundId: '240503131010', winner: 'Player B - Teen' },
            { roundId: '240503130554', winner: 'Player A - Teen' },
            { roundId: '240503130135', winner: 'Player A - Teen' },
            { roundId: '240503125717', winner: 'Player A - Teen' },
            { roundId: '240503125257', winner: 'Player A - Teen' },
            { roundId: '240503124826', winner: 'Player A - Teen' },
            // Add more data as needed
        ]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Casino Report History</h1>
            <div className="flex  flex-col md:flex-row items-center mb-4 md:space-x-4">
                <div className="mb-2 md:mb-0">
                    <label className="text-lg block">Select Date:</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                </div>

                <div className="mb-2 md:mb-0">
                    <label className="text-lg block">Select Casino Type:</label>
                    <select
                        name="reportType"
                        value={selectedCasinoType}
                        onChange={handleCasinoTypeChange}
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    >
                        <option value="">Casino Type</option>
                        <option value="teen">1 Day Teenpatti</option>
                        <option value="teen9">Test Teenpatti</option>
                        <option value="teen20">20-20 Teenpatti</option>
                        <option value="teen8">Open Teenpatti</option>
                        <option value="poker">1 Day Poker</option>
                        <option value="poker20">20-20 Poker</option>
                        <option value="poker9">6 Player Poker</option>
                        <option value="ab20">Andar Bahar</option>
                        <option value="abj">Andar Bahar 2</option>
                        <option value="3cardj">3 Card Judgement</option>
                        <option value="card32">32 Cards - A</option>
                        <option value="card32eu">32 Cards - B</option>
                        <option value="worli">Worli Matka</option>
                        <option value="worli2">Instant Worli Matka</option>
                        <option value="lucky7">Lucky 7 - A</option>
                        <option value="lucky7eu">Lucky 7 - B</option>
                        <option value="lucky7eu2">Lucky 7 - C</option>
                        <option value="dt20">20-20 Dragon Tiger</option>
                        <option value="dt202">20-20 Dragon Tiger 2</option>
                        <option value="dt6">1-Day Dragon Tiger</option>
                        <option value="aaa">Amar Akbar Anthoni</option>
                        <option value="btable">Bollywood Casino</option>
                        <option value="war">War</option>
                        <option value="dtl20">20-20 Dragon Tiger Lion</option>
                        <option value="cmeter">Casino Meter</option>
                        <option value="cmatch20">Cricket Casino 20-20</option>
                        <option value="baccarat">Baccarat</option>
                        <option value="baccarat2">Baccarat 2</option>
                        <option value="cricketv3">5Five Cricket</option>
                        <option value="queen">Queen</option>
                        <option value="race20">Race 20-20</option>
                        <option value="superover">Super Over</option>
                        <option value="ballbyball">Ball By Ball</option>
                    </select>

                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#04A1A6] text-white px-4 py-2 mt-5 ml-4 rounded-md transition duration-300 hover:bg-[#04a1a6bb]"
                >
                    Submit
                </button>
            </div>

            {/* Table */}
            {tableData.length > 0 ? (
                <div className="max-w-screen-md overflow-x-auto">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="w-1/3 p-2">Round ID</th>
                                <th className="w-2/3 p-2">Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((entry, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2">{entry.roundId}</td>
                                    <td className="p-2">{entry.winner}</td>
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

export default CasinoReportHistory;
