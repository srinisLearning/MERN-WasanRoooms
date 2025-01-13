import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/rooms/getAllRooms")
      .then((response) => {
        console.log(response.data);
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3 className="text-primary text-center text-3xl font-thin">Room List</h3>
      {loading ? (
        <h3>Loading.....</h3>
      ) : error ? (
        <h3>Error in Page</h3>
      ) : (
        rooms.map((room) => (
          <div className="" key={room._id}>
            <Room room={room} />
          </div>
        ))
      )}
    </>
  );
};

export default HomePage;
