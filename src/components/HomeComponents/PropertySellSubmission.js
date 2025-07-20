import React, { useState } from "react";
import { api_base, api_headers } from "../../API/APIconfig";
import { PostAPI } from "../../API/PostAPI";
import routes from "../../Config/route";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PropertySubmissionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    locationName: "",
    type: "",
    squareFootage: "",
    images: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.locationName)
      newErrors.locationName = "Location Name is required";

    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.squareFootage)
      newErrors.squareFootage = "Square Footage is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to the server (you would replace this with your actual submission logic)
      console.log(formData);

      let property = {
        title: formData?.title,
        description: formData?.description,
        price: formData?.price,
        locationName: formData?.locationName,
        squareFootage: formData?.squareFootage,
        type: formData?.type,
        image: formData?.images,
      };

      dispatch(add_property(property, navigate));

      //   setFormData({
      //     title: "",
      //     description: "",
      //     price: "",
      //     locationName: "",
      //     type: "",
      //     squareFootage: "",
      //     images: "",
      //   });
      setErrors({});
    }
  };

  return (
    <div className=" md:w-[75%] w-[90%] mx-auto p-6 bg-white rounded-lg shadow-2xl mt-[1rem] mb-[1rem]">
      <h2 className="text-2xl font-bold mb-4">Sell Your Property With Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Price"
          />
          {errors.price && (
            <p className="text-red-500 text-xs">{errors.price}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location Name
          </label>
          <input
            type="text"
            value={formData.locationName}
            onChange={(e) =>
              setFormData({ ...formData, locationName: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.locationName ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Location Name"
          />
          {errors.locationName && (
            <p className="text-red-500 text-xs">{errors.locationName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <input
            type="text"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className={`mt-1 p-2 border ${
              errors.type ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Type (e.g., Apartment, Complex)"
          />
          {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Square Footage
          </label>
          <input
            type="number"
            value={formData.squareFootage}
            onChange={(e) =>
              setFormData({ ...formData, squareFootage: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.squareFootage ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Square Footage"
          />
          {errors.squareFootage && (
            <p className="text-red-500 text-xs">{errors.squareFootage}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Images (URL)
          </label>
          <input
            type="text"
            value={formData.images}
            onChange={(e) =>
              setFormData({ ...formData, images: e.target.value })
            }
            className={`mt-1 p-2 border ${
              errors.images ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className={`mt-1 p-2 h-[150px] border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Enter Property Description"
          />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default PropertySubmissionForm;

let add_property = (obj, navigate) => {
  return async (dispatch) => {
    let url = new URL(api_base + "/property");

    let headers = { ...api_headers };

    let body = {
      title: obj?.title,
      description: obj?.description,
      price: obj.price,
      location: {
        type: "Point",
        coordinates: [77.5946, 12.9716],
        locationName: obj?.locationName,
        locationAddress: "MG Road, Bangalore",
      },
      type: obj?.type,
      features: {
        bedrooms: 2,
        bathrooms: 2,
        balcony: true,
        parking: true,
      },
      squareFootage: obj?.squareFootage,
      yearBuild: 2020,
      amenities: ["Gym", "Swimming Pool", "24/7 Security"],
      images: [obj?.image],
    };

    let response = await PostAPI(url, body, headers);

    if (response?.ok) {
      let responsedata = await response?.json();
      console.log(responsedata);
      alert("Property submitted for approval!");
      navigate(routes?.properties + "/" + responsedata?.property?._id);
    }
  };
};
