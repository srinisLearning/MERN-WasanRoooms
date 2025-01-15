import React from "react";

const BookingPageComponent = ({ room }) => {
  console.log("From BPc", { room });
  return (
    <>
      <h3 className="text-primary text-center text-3xl font-thin">
        Room Booking
      </h3>
      <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-2 shadow-xl max-w-4xl mx-auto rounded-xl">
        <div>{/*  <img src={room.imageurls[0]} /> */}</div>
        <div className="flex flex-col mx-auto my-auto">
          <h1 className="text-primary text-xl font-semibold">{room.name}</h1>
          <div className="flex flex-col space-y-6 p-4">
            Name : Srini <br />
            Email : abc@def.com <br />
            From Date : 2021-09-01 <br />
            To Date : 2021-09-10 <br />
            No of Persons : {room.maxcount}
          </div>
          <hr className="my-1" />
          <div className="flex flex-col space-y-6 p-4">
            Rate Per Day : {room.rentperday} <br />
            No of Days : 5 <br />
            Total Amount : 5000
          </div>

          <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
            Pay Now
          </button>
        </div>
      </div>
      )
    </>
  );
};

export default BookingPageComponent;
