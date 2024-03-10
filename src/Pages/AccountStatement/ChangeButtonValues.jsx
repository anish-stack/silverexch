import  { useState } from 'react';

const ChangeButtonValues = () => {
  const initialPricePairs = [
    { priceValue: '1000', priceLabel: '1000' },
    { priceValue: '5000', priceLabel: '5000' },
    { priceValue: '10000', priceLabel: '10000' },
    { priceValue: '25000', priceLabel: '25000' },
    { priceValue: '50000', priceLabel: '50000' },
    { priceValue: '100000', priceLabel: '100000' },

  ];

  const [pricePairs, setPricePairs] = useState(initialPricePairs);

  const handleInputChange = (index, key, value) => {
    setPricePairs((prevPairs) => {
      const newPairs = [...prevPairs];
      newPairs[index][key] = value;
      return newPairs;
    });
  };

  const handleSubmit = () => {
    // Add your logic to handle the submission
    console.log('Price Pairs:', pricePairs);
  };

  return (
    <div className="container min-h-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Change Button Values</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricePairs.map((pair, index) => (
          <div key={index} className="mb-4 max-w-lg">
          <div className='flex w-full items-center justify-evenly gap-5'>
             <div className="mb-2">
              <label className="text-lg block">Price Value</label>
              <input
                type="text"
                value={pair.priceValue}
                onChange={(e) => handleInputChange(index, 'priceValue', e.target.value)}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
            </div>
            <div>
              <label className="text-lg block">Price Label</label>
              <input
                type="text"
                value={pair.priceLabel}
                onChange={(e) => handleInputChange(index, 'priceLabel', e.target.value)}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className='text-left w-32 ml-5'>
      <button
                    onClick={handleSubmit}
                    className="bg-[#04A1A6] text-white px-4 py-2 mt-5 ml-4 rounded-md transition duration-300 hover:bg-[#04a1a6bb]"
                >
                    Submit
                </button>
      </div>
    </div>
  );
};

export default ChangeButtonValues;
