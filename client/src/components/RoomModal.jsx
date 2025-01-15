import React from "react";

const RoomModal = ({ show, onClose, room }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-xl p-6   max-w-screen-xl">
        <h2 className="text-lg   mb-4 text-center text-primary font-extrabold">
          {room.name}
        </h2>

        <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-2 shadow-xl max-w-4xl mx-auto">
          <div>
            <img src={room.imageurls[1]} />
          </div>
          <div className="flex flex-col mx-auto">
            <p>{room.description}</p>
            <p>
              <b className="font-extralight">City : </b>
              {room.city}
            </p>
            <p>
              <b className="font-extralight">Contact Number : </b>
              {room.phonenumber}
            </p>
            <p>
              <b className="font-extralight">Room Rate : </b>
              &#8377; {room.rentperday}
            </p>
            <p>
              <b className="font-extralight">
                Max No of Persons : {room.maxcount}
              </b>
            </p>

            <p>
              <b className="font-extralight">Type : {room.type}</b>
            </p>
            <p>
              <b className="font-extralight">
                Current Bookings : {room.currentbookings}
              </b>
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default RoomModal;
