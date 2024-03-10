import  { useState } from 'react';
import NoDataImage from './No-data.jpg'

const AccountStatement = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionType, setTransactionType] = useState('all');
  const [data, setData] = useState([]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSubmit = () => {
    // Replace this with your actual data fetching logic
    // For now, just using sample data
    setData([
      { date: '2022-01-01', srNo: 1, credit: 100, debit: 50, balance: 50, remark: 'Deposit' },
      { date: '2022-01-02', srNo: 2, credit: 200, debit: 100, balance: 150, remark: 'Withdrawal' },
      // Add more data as needed
    ]);
  };

  return (
<div className="container min-h-screen mx-auto p-4 overflow-x-auto">
  <h1 className="text-3xl font-bold mb-6">Account Statement</h1>
  <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
    <div className="flex items-center space-x-2">
      <label className="text-lg">Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      />
    </div>
    <div className="flex items-center space-x-2">
      <label className="text-lg">End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        placeholder="Select Date"
        style={{ maxWidth: '200px' }}
      />
    </div>
    <div className="flex items-center space-x-2">
      <label className="text-lg">Transaction Type:</label>
      <select
        value={transactionType}
        onChange={handleTransactionTypeChange}
        className="border p-2"
      >
        <option value="withdrawal">Withdrawal</option>
        <option value="all">All</option>
        <option value="gameReport">Game Report</option>
      </select>
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
   <thead className="text-left">
     <tr className="bg-gray-200">
       <th className="w-32 p-2">Date</th>
       <th className="w-32 p-2">Sr No</th>
       <th className="w-32 p-2">Credit</th>
       <th className="w-32 p-2">Debit</th>
       <th className="w-32 p-2">Balance</th>
       <th className="w-32 p-2">Remark</th>
     </tr>
   </thead>
   <tbody>
     {data.map((entry) => (
       <tr key={entry.srNo} className="border-b">
         <td className="p-2">{entry.date}</td>
         <td className="p-2">{entry.srNo}</td>
         <td className={`p-2 ${entry.credit <= 100 ? 'text-red-500' : 'text-green-500'}`}>{entry.credit}</td>
         <td className="p-2">{entry.debit}</td>
         <td className="p-2">{entry.balance}</td>
         <td className="p-2">{entry.remark}</td>
       </tr>
     ))}
   </tbody>
 </table>
 </div>
 
  ) : (
    <div className="text-center mx-auto h-[60vh] max-w-3xl">
      <img src={NoDataImage} alt="No data available" className="object-cover h-full w-full mx-auto mb-4" />
    </div>
  )}
</div>

  );
};

export default AccountStatement;
