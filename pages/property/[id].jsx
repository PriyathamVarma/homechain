import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import db from "../../polybase/config.jsx";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  // Methods

  // getting the url query
  const router = useRouter();
  console.log(router);
  const [property, setProperty] = useState({});
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const getProperty = async () => {
      const propertyInfo = await db
        .collection("PropertyCollection")
        .where("id", "==", router.query.id)
        .get();
      console.log(propertyInfo.data);
      try {
        setProperty(propertyInfo.data[0].data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperty();
  }, [router.query.id]);

  // Getting user profile
  const [isProfile, setIsProfile] = useState(false);
  useEffect(() => {
    const getProfile = async () => {
      const profileInfo = await db
        .collection("UserCollection")
        .where("publicKey", "==", address)
        .get();
      try {
        const profileExists = profileInfo.data[0].data;
        setProfileData(profileInfo.data[0].data);
        console.log(profileData);
        console.log(profileExists);
        if (profileExists.publicKey === address && profileExists.status === 0) {
          setIsProfile(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [address]);

  // Methods
  const buttonClicked = async () => {
    const id = Math.floor(Math.random() * 1000000000).toString();
    const propertyInfo = await db
      .collection("NotificationCollection")
      .create([id, address, property.broker, property.id]);
    console.log(propertyInfo);
  };

  return (
    <div>
      <Head>
        <title>HomeChain - Broker Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-full bg-primary p-5">
        <div className="mb-5">
          <h1 className="text-white text-2xl font-extrabold mb-5">
            HomeChain Property #{router.query.id}
          </h1>
        </div>

        {isProfile ? (
          <div className="mb-5">
            <button
              onClick={buttonClicked}
              className="text-white text-2xl font-extrabold mb-5 border border-secondary p-2 bg-secondary"
            >
              Buy
            </button>
          </div>
        ) : (
          <div className="mb-5">
            <h1 className="text-white text-2xl font-extrabold mb-5">False</h1>
          </div>
        )}

        <div className="max-w-4xl mx-auto p-4 bg-secondary">
          <img
            className="w-full h-64 object-cover mb-4 rounded border border-black"
            src={property.image_link}
            alt={property.name}
          />
          <h2 className="text-2xl font-bold mb-2">{property.name}</h2>

          <p className="text-gray-600 mb-2">Posted By: {property.broker}</p>

          <div className="flex flex justify-left mb-4">
            <div>
              <p className="text-gray-700 font-bold">Price:</p>
              <p>${property.price}</p>
            </div>
            <div className="ml-5">
              <p className="text-gray-700 font-bold">Area:</p>
              <p>{property.area} sqft</p>
            </div>
          </div>
          <div className="flex flex justify-evenly mb-4">
            <div className="border-2 border-black p-2">
              <p className="text-gray-700 font-bold">Bedrooms:</p>
              <p>{property.bedrooms}</p>
            </div>
            <div className="border-2 border-black p-2">
              <p className="text-gray-700 font-bold">Bathrooms:</p>
              <p>{property.bathrooms}</p>
            </div>
            <div className="border-2 border-black p-2">
              <p className="text-gray-700 font-bold">Garages:</p>
              <p>{property.garages}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Type:</p>
            <p>{property.type}</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Address:</p>
            <p>{property.address}</p>
            <p className="text-gray-600 mb-2"> {property.location}</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Posted On:</p>
            <p>{property.posted_on}</p>
          </div>
          <hr />
          <div>
            <p className="text-gray-700 font-bold">Description:</p>
            <p className="text-gray-800 mb-4">{property.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
