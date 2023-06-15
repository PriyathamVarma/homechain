// Imports
import { useAddress } from "@thirdweb-dev/react";
import db from "../polybase/config.jsx";
import { useRouter } from "next/router.js";

const CreateProfile = () => {
  const address = useAddress();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000000).toString();
    const name = e.target.name.value;
    const location = e.target.location.value;
    const broker = address;
    const price = parseInt(e.target.price.value);
    const image_link = e.target.imageLink.value;
    const addressData = e.target.address.value;
    const area = parseInt(e.target.area.value);
    const bedrooms = parseInt(e.target.bedrooms.value);
    const bathrooms = parseInt(e.target.bathrooms.value);
    const garages = parseInt(e.target.garages.value);
    const description = e.target.description.value;
    const type = e.target.type.value;
    const posted_on = new Date().toLocaleDateString();

    db.collection("PropertyCollection").create([
      id,
      name,
      location,
      broker,
      price,
      image_link,
      addressData,
      area,
      bedrooms,
      bathrooms,
      garages,
      description,
      type,
      posted_on,
    ]);

    // Redirect to the previous page
    router.back();
    //console.log("Property Created");
  };

  return (
    <>
      <div className="bg-primary h-full  p-5">
        <h1 className="text-center font-bold mb-10">Create Profile</h1>
        <form
          className="max-w-sm mx-auto border border-black p-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter your location"
              name="location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter your address"
              name="address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price(in £)
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Enter your price"
              name="price"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageLink"
            >
              Image Link of Property
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageLink"
              type="text"
              placeholder="Enter your image link"
              name="imageLink"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="area"
            >
              Area(in sq-ft)
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="area"
              type="number"
              placeholder="Enter your area"
              name="area"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bedrooms"
            >
              Bedrooms
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bedrooms"
              type="number"
              placeholder="Enter your bedrooms"
              name="bedrooms"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bathrooms"
            >
              Bathrooms
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bathrooms"
              type="number"
              placeholder="Enter your bathrooms"
              name="bathrooms"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="garages"
            >
              Garages
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="garages"
              type="number"
              placeholder="Enter your garages"
              name="garages"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              name="description"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              type="text"
              placeholder="Enter your type"
              name="type"
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your phone"
              name="phone"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-black bg-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
