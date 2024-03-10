import { useState } from 'react';

const SecureAuthVerification = () => {
  const [activeTab, setActiveTab] = useState('telegram');
  const [authCode, setAuthCode] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setAuthCode('');
  };

  const handleMobileAppClick = () => {
    const newAuthCode = Math.floor(100000 + Math.random() * 900000).toString();
    setAuthCode(newAuthCode);
  };

  return (
    <div className="container min-h-screen mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Secure Auth Verification</h1>
      <div className="flex space-x-4 mb-6">
        <div
          className={`cursor-pointer p-4 border rounded ${
            activeTab === 'telegram' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
          onClick={() => handleTabClick('telegram')}
        >
          <i className="ri-telegram-fill text-5xl text-blue-500"></i>
          <span className="ml-2 hidden sm:inline text-lg">Telegram</span>
        </div>
        <div
          className={`cursor-pointer p-4 border rounded ${
            activeTab === 'mobileApp' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
          onClick={() => handleTabClick('mobileApp')}
        >
          <i className="ri-smartphone-fill text-5xl text-blue-500"></i>
          <span className="ml-2 hidden sm:inline text-lg">Mobile App</span>
        </div>
      </div>

      {activeTab === 'telegram' ? (
        <div>
          <label className="text-lg text-gray-800">Enter Telegram Code:</label>
          <input
            type="text"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 mb-4"
          />
          <button
            className="bg-[#04A1A6] text-white px-6 py-3 rounded-md transition duration-300 hover:bg-blue-600"
            onClick={() => console.log('Verify Telegram:', authCode)}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <p className="text-3xl text-gray-800">
            Please enter below auth code in your 'Secure Auth Verification App':
          </p>
          <p className="text-3xl font-bold text-blue-500 mb-4">{authCode}</p>
          <p className="text-gray-800">
            If you haven't downloaded, please download 'Secure Auth Verification App' from the
            below link. Using this app, you will receive an auth code during login authentication.
          </p>
          <button
            className="bg-[#04A1A6] text-white px-6 py-3 rounded-md mt-6 transition duration-300 hover:bg-blue-600"
            onClick={handleMobileAppClick}
          >
            Generate New Auth Code
          </button>
        </div>
      )}
    </div>
  );
};

export default SecureAuthVerification;
