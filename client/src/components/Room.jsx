import React, { useState } from "react";
import RoomModal from "./RoomModal";

const Room = ({ room }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-2 shadow-xl max-w-4xl mx-auto">
        <div>
          <img src={room.imageurls[0]} />
        </div>
        <div className="flex flex-col mx-auto max-h-full items-center">
          <h1 className="text-primary text-xl font-semibold">{room.name}</h1>
          <p>
            <b>City : </b>
            {room.city}
          </p>
          <p>
            <b>Contact Number : </b>
            {room.phonenumber}
          </p>

          <div className="flex space-x-6 p-4">
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
              Book Now
            </button>
            <button
              className="bg-amber-800 text-white px-4 py-2 rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      <RoomModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={room}
      />
    </>
  );
};

export default Room;
