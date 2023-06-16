import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import db from "../polybase/config.jsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  // Methods
  const [isProfile, setIsProfile] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [propertyData, setPropertyData] = useState([]);
  const [selledPropertyData, setSelledPropertyData] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const profileInfo = await db
        .collection("UserCollection")
        .where("publicKey", "==", address)
        .get();
      try {
        const profileExists = profileInfo.data[0]?.data.publicKey;
        setProfileData(profileInfo.data[0].data);
        console.log(profileData);
        console.log(profileExists);
        if (profileExists === address) {
          setIsProfile(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [address]);

  useEffect(() => {
    const getProperty = async () => {
      const propertyInfo = await db
        .collection("PropertyCollection")
        .where("broker", "==", address)
        .get();
      console.log(propertyInfo.data);
      try {
        setPropertyData(propertyInfo.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, [address]);

  useEffect(() => {
    const getProperty = async () => {
      const propertyInfo = await db
        .collection("SelledPropertiesCollection")
        .where("buyer", "==", address)
        .get();
      console.log(propertyInfo.data);
      try {
        setSelledPropertyData(propertyInfo.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, [address]);

  return (
    <div>
      <Head>
        <title>HomeChain - Broker Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-full bg-primary">
        {isProfile ? (
          <div className="mb-5">
            <h1 className="text-white text-2xl font-extrabold mb-5">
              HomeChain Buyer Profile
            </h1>
            <div className="bg-secondary rounded shadow-lg border-2 border-black p-4">
              <h2 className="text-xl font-bold mb-2">{profileData.name}</h2>
              <p className="text-gray-600 mb-2">@{profileData.location}</p>
              <p className="text-gray-600 mb-2">{profileData.email}</p>
              <p className="text-gray-800">{profileData.phoneNumber}</p>
            </div>
            <div className="flex flex-row mt-5">
              <Link
                href="/premium/index"
                className="border-4 border-black p-3 bg-white mr-5 w-full text-center bg-secondary"
              >
                Premium Listings
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-5 flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl font-extrabold mb-5">
              HomeChain Buyer Profile Create
            </h1>
            <Link
              href="/CreateProfile"
              className="border-4 border-black p-3 bg-white"
            >
              Create Profile
            </Link>
          </div>
        )}
        <hr />
        <h1 className="text-white text-2xl font-extrabold mb-5">
          HomeChain Buyer Properties
        </h1>
        <div className="flex flex-row">
          {selledPropertyData?.map((item, index) => (
            <div
              key={index}
              className="h-full mr-10 flex flex-col justify-center items-left"
            >
              <Link
                href={`/property/${item.data.property_id}`}
                className=" border-2 border-black bg-secondary"
              >
                <div className="bg-white rounded shadow p-4">
                  <h2 className="text-xl font-semibold">#{item.data.id}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <hr />
        <h1 className="text-white text-2xl font-extrabold mb-5">
          Other Properties
        </h1>
        <div className="flex flex-row">
          {propertyData?.map((item, index) => (
            <div
              key={index}
              className="h-full mr-10 flex flex-col justify-center items-left"
            >
              <Link
                href={`/property/${item.data.id}`}
                className=" border-2 border-black bg-secondary"
              >
                <div className="bg-white rounded shadow p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    #{item.data.id}
                  </h2>
                  <img
                    className="w-full h-48 object-cover mb-4 rounded border border-black"
                    src={item.data.image_link}
                    alt={item.data.name}
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {item.data.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{item.data.location}</p>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-800 mr-2">Price:</p>
                    <p>{item.data.price}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-800 font-bold mr-2">Bedrooms:</p>
                    <p>{item.data.bedrooms}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-800 font-bold mr-2">Bathrooms:</p>
                    <p>{item.data.bathrooms}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-800 font-bold mr-2">Garages:</p>
                    <p>{item.data.garages}</p>
                  </div>
                  <p className="text-gray-800">{item.data.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
