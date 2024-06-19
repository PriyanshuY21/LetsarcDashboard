import React from 'react';

const Concern = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/3 pr-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Points of Contact</h2>
          <ul className="text-sm list-none">
            <li className="mb-4">
              <strong>Support</strong><br />
              <a href="mailto:support@tune.com" className="text-gr text-base">support@tune.com</a>
            </li>
            <li>
              <strong>Billing Enquiries</strong><br />
              <span className="text-gr text-base">+91-123456789</span>
            </li>
          </ul>
        </div>
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Have a Problem</h2>
          <p className="text-sm mb-4 text-center text-gray-500">Please note: all fields are required</p>
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
              <label className="block text-sm font-medium mb-2" htmlFor="problem-type">Select Problem Type</label>
              <select
                id="problem-type"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="" disabled selected>Select Problem Type</option>
                <option value="Technical">Technical</option>
                <option value="Billing">Billing</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="project-name">Project Name</label>
              <input
                type="text"
                id="project-name"
                placeholder="Project Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                placeholder="Comments"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gr text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
              >
                Send Concern
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Concern;
