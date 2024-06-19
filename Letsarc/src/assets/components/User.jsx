import React from 'react';

const User = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome!!</h2>
       <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="first-name">Name</label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="flex-grow p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="flex-grow p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="organization-name">Organization Name</label>
            <input
              type="text"
              id="organization-name"
              placeholder="Organization Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="conatct">Contact Number</label>
            <input
              type="text"
              id="conatct"
              placeholder="Contact Number"
              className="w-full p-2 border border-gray-300 rounded"
              />
          </div>
         </form>
      </div>
    </div>
  );
};

export default User;