import  { useState } from 'react';
import toast from 'react-hot-toast'
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    // Add your logic to handle password change here
    if (newPassword === confirmNewPassword) {
        toast.success('Password changed successfully!');
      // You may want to make an API call to update the password on the server
    } else {
    toast.error("New password and confirm password don't match!");
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-[#04A1A6]">Change Password</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="text-lg text-gray-800 block mb-2">
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04A1A6] focus:border-[#04A1A6] text-gray-700 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="text-lg text-gray-800 block mb-2">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04A1A6] focus:border-[#04A1A6] text-gray-700 w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmNewPassword" className="text-lg text-gray-800 block mb-2">
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04A1A6] focus:border-[#04A1A6] text-gray-700 w-full"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#04A1A6] text-white px-6 py-3 rounded-md transition duration-300 hover:bg-[#048A93]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
