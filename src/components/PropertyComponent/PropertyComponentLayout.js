import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure Axios is installed
import PropertyCard from "../../templates/PropertyCard";
import { api_base, api_headers } from "../../API/APIconfig";
import { PostAPI } from "../../API/PostAPI";
import routes from "../../Config/route";
import { GetAPI } from "../../API/GetAPI";

const PropertyComponentLayout = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState([20000, 200000]);
  const [bedRooms, setBedRooms] = useState(1);
  const [bathRooms, setBathRooms] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [resproperties, setResProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (location_passed = null) => {
    if (location_passed === "Any") {
      location_passed = "";
    }

    try {
      setIsLoading(true);
      let response = await propertyFilter(
        location_passed ? location_passed : location
      );

      console.log("Filter List : ", response);

      setResProperties(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center py-16 mt-[10vh] font-poppins">
        <h1 className="text-4xl font-bold text-gray-800">
          Find Your Best Property
        </h1>
        <p className="text-gray-500 mt-2">
          Esteem spirit temper too say adieus who direct esteem.
        </p>

        <div className="flex flex-wrap justify-center md:gap-[2rem] gap-[0.5rem] mt-10 space-x-4 ps-4 pe-4">
          {/* Location */}
          <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                handleSearch(e.target.value);
              }}
              className="border rounded-lg p-2 mt-1 w-32"
            >
              <option value="">Any</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              {/* Add more locations here */}
            </select>
          </div>

          {/* Property Type */}
          {/* <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="border rounded-lg p-2 mt-1 w-32"
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="home">Home</option>
              <option value="land">Land</option>
              <option value="office">Office</option> */}
          {/* Add more property types here */}
          {/* </select>
          </div> */}

          {/* Price */}
          {/* <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Price ($)
            </label>
            <div className="flex space-x-2 mt-1">
              <input
                type="text"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([+e.target.value, priceRange[1]])
                }
                className="border rounded-lg p-2 w-32"
              />
              <span className="text-gray-500">-</span>
              <input
                type="text"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], +e.target.value])
                }
                className="border rounded-lg p-2 w-32"
              />
            </div>
          </div> */}

          {/* Bedrooms */}
          {/* <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Bed Room
            </label>
            <select
              value={bedRooms}
              onChange={(e) => setBedRooms(+e.target.value)}
              className="border rounded-lg p-2 mt-1 w-24"
            >
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option> */}
          {/* Add more bedroom options here */}
          {/* </select>
          </div> */}

          {/* Bathrooms */}
          {/* <div className="flex flex-col">
            <label className="md:text-[14px] text-[12px] text-gray-600">
              Bath Room
            </label>
            <select
              value={bathRooms}
              onChange={(e) => setBathRooms(+e.target.value)}
              className="border rounded-lg p-2 mt-1 w-24"
            >
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option> */}
          {/* Add more bathroom options here */}
          {/* </select>
          </div> */}

          {/* Search Button */}
          <button
            onClick={() => {
              handleSearch(location);
            }}
            className="bg-orange-500 text-white rounded-lg px-6 py-2 mt-6 hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Displaying the filtered properties */}
      {isLoading ? (
        <h1 className=" text-center ">Loading...</h1>
      ) : (
        <div className="w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-[2rem] mt-[3rem] mb-[5rem]">
          {resproperties.length > 0 ? (
            resproperties.map((property) => (
              <PropertyCard
                key={property._id} // Use unique id for each property
                content={{
                  id: property._id,
                  image: property.images?.[0], // Assuming images array has URLs
                  title: property.title,
                  location: property.location?.locationName,
                  lotSize: property.squareFootage,
                  beds: property.features?.units, // Or any other feature you want to display
                  baths: property.features?.elevators, // Replace as needed
                  garage: property.features?.parkingSpots,
                  price: property.price,
                  type: property.type,
                }}
              />
            ))
          ) : (
            <p>No properties found</p>
          )}
        </div>
      )}
    </>
  );
};

export default PropertyComponentLayout;

const propertyFilter = async (location) => {
  let url = new URL(api_base + "/property/filter");

  let headers = { ...api_headers };

  let body = {
    location,
  };

  let response = await PostAPI(url, body, headers);

  if (response?.ok) {
    let responsedata = await response?.json();
    return responsedata?.filteredProperties;
  }
};
