import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/rooms/getAllRooms")
      .then((response) => {
        //console.log(response.data);
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <img src="images/hotel_banner_3.png" className="w-full h-96" />
      <h3 className="bg-primary w-full text-white text-center text-3xl font-thin py-2">
        Room List
      </h3>
      {loading ? (
        <div>
          {" "}
          <LoadingComponent />
        </div>
      ) : error ? (
        <div>
          <ErrorComponent />
        </div>
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
