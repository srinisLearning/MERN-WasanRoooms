import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingPageComponent from "../components/BookingPageComponent";

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
      {loading ? (
        <h3>Loading.....</h3>
      ) : error ? (
        <h3>Error in Page</h3>
      ) : (
        <BookingPageComponent room={room} />
      )}
    </>
  );
};
export default BookingPage;
