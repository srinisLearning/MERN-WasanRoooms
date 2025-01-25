import React from "react";
import { useState } from "react";
import axios from "axios";

const AdminEditRoomModal = ({ show, onClose, room }) => {
  console.log("Room", room);
  const {
    _id,
    name,
    city,
    imageUrl,
    phoneNo,
    email,
    website,
    rentPerDay,
    singleStandardFactor,
    doubleStandardFactor,
    doublePremiumFactor,
    suiteFactor,
    description,
  } = room;
  const [formData, setFormData] = useState({
    name,
    city,
    imageUrl,
    phoneNo,
    email,
    website,
    rentPerDay,
    singleStandardFactor,
    doubleStandardFactor,
    doublePremiumFactor,
    suiteFactor,
    description,
  });

  console.log("formData", formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("/api/rooms/addRoom", formData);
      console.log(response);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!show) return null;

  const fieldClassStyle =
    "w-full  border border-1 border-primary p-1 mx-2 rounded-lg text-xs";

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-screen-xl">
          <h3 className="text-primary text-center font-bold text-xl my-2">
            UPDATE ROOM
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex  justify-between gap-6 items-center border-b-2 border-primary-200">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Room Name"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.name}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.city}
                />
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.imageUrl}
                />
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.phoneNo}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.email}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.website}
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <input
                  type="text"
                  name="rentPerDay"
                  placeholder="Rent Per Day"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.rentperday}
                />
                <input
                  type="text"
                  name="singleStandardFactor"
                  placeholder="Single Standard Factor"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.singleStandardFactor}
                />
                <input
                  type="text"
                  name="doubleStandardFactor"
                  placeholder="Double Standard Factor"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.doubleStandardFactor}
                />
                <input
                  type="text"
                  name="doublePremiumFactor"
                  placeholder="Double Premium Factor"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.doublePremiumFactor}
                />
                <input
                  type="text"
                  name="suiteFactor"
                  placeholder="Suite Factor"
                  onChange={handleChange}
                  className={fieldClassStyle}
                  value={formData.suiteFactor}
                />
              </div>
            </div>
            <div className="m-2">
              <textarea
                type="textarea"
                name="description"
                placeholder="Description"
                className={fieldClassStyle}
                onChange={handleChange}
                rows="4"
                cols="50"
                value={formData.description}
              ></textarea>
            </div>
            <div className="flex m-2 justify-end items-baseline">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                UPDATE ROOM
              </button>
            </div>
          </form>
          <div className="flex m-2 justify-end items-baseline">
            <button
              type="button"
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditRoomModal;
