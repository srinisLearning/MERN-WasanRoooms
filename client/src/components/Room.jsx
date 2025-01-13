import React from "react";

const Room = ({ room }) => {
  console.log(room.name);
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-2 shadow-xl max-w-4xl mx-auto">
      <div>
        <img src={room.imageurls[0]} />
      </div>
      <div className="flex flex-col mx-auto">
        <h1 className="text-primary text-xl font-semibold">{room.name}</h1>
        <p>
          <b>City : </b>
          {room.city}
        </p>
        <p>
          <b>Contact Number : </b>
          {room.phonenumber}
        </p>
        <p>
          <b>Room Rate : </b>
          &#8377; {room.rentperday}
        </p>
        <p>
          <b>Max Count : {room.maxcount}</b>
        </p>

        <p>
          <b>Type : {room.type}</b>
        </p>
        <div className="flex space-x-6 p-4">
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
            Book Now
          </button>
          <button className="bg-amber-800 text-white px-4 py-2 rounded-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
