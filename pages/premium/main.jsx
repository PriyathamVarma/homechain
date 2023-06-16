import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const Router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const location = e.target.location.value;

    // Sending the data to the API as a query
    Router.push({
      pathname: "/premium/search",
      query: { price, location },
    });
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-primary">
      <h1 className="text-white text-2xl font-extrabold mb-5">
        HomeChain Premium Properties
      </h1>
      <div className="flex flex-row">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-secondary"
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
};

export default Search;
