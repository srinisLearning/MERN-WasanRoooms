import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("/api/rooms/getAllRooms")
      .then((response) => {
        console.log(response.data);
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className="text-primary text-center text-3xl font-thin">Home Page</h3>
      {rooms.map((room) => (
        <div key={room._id} className="border border-primary p-2 my-2">
          <h3>Name : {room.name}</h3>
          <p>Type : {room.type}</p>
          <p>Max Persons :{room.maxcount}</p>
          <p>Price: {room.price}</p>
        </div>
      ))}
    </>
  );
};

export default HomePage;
