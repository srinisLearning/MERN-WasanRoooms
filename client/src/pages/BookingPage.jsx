import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingPageComponent from "../components/BookingPageComponent";
import LoadingComponent from "../components/LoadingComponent";

const BookingPage = () => {
  const { roomId } = useParams();
  console.log("BP", roomId);
  const [room, setRoom] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/rooms/getRoomById/${roomId}`)
      .then((response) => {
        //console.log(response.data);
        setRoom(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <img
        src="../../public/images/hotel_banner_2.png"
        className="w-full h-96"
      />
      <h3 className="text-primary w-full text-center text-3xl font-thin py-2">
        Booking Page
      </h3>
      {loading ? (
        <LoadingComponent />
      ) : room ? (
        <BookingPageComponent room={room} />
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};
export default BookingPage;
