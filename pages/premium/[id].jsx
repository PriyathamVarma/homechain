import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import db from "../../polybase/config";
import Link from "next/link";

const Search = () => {
  const Router = useRouter();

  const [premiumPropertyData, setPremiumPropertyData] = useState([]);
  // getting query from the URL
  const { price, location } = Router.query;
  console.log(price, location);

  // Getting premium properties from polybase
  useEffect(() => {
    const getPremiumProperties = async () => {
      const fetchProperties = await db
        .collection("PropertyCollection")
        .where("location", "==", location)
        .get();

      setPremiumPropertyData(fetchProperties.data);

      console.log(fetchProperties.data);
    };
    getPremiumProperties();
  }, [price, location]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-primary">
      <h1 className="text-white text-2xl font-extrabold mb-5">
        HomeChain Premium Properties
      </h1>
      <div className="flex flex-row">
        {premiumPropertyData?.map((item, index) => (
          <div
            key={index}
            className="h-full mr-10 flex flex-col justify-center items-left"
          >
            <Link
              href={`/property/${item.data.id}`}
              className=" border-2 border-black bg-secondary"
            >
              <div className="bg-white rounded shadow p-4">
                <h2 className="text-xl font-semibold mb-2">#{item.data.id}</h2>
                <img
                  className="w-full h-48 object-cover mb-4 rounded border border-black"
                  src={item.data.image_link}
                  alt={item.data.name}
                />
                <h2 className="text-xl font-semibold mb-2">{item.data.name}</h2>
                <p className="text-gray-600 mb-2">{item.data.location}</p>
                <div className="flex items-center mb-2">
                  <p className="text-gray-800 mr-2">Price:</p>
                  <p>Within Range</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-800 font-bold mr-2">Bedrooms:</p>
                  <p>Restricted</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-800 font-bold mr-2">Bathrooms:</p>
                  <p>Restricted</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-gray-800 font-bold mr-2">Garages:</p>
                  <p>Restricted</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Search;
