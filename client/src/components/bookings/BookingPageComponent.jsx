import React from "react";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import StripeCheckout from "react-stripe-checkout";
const { RangePicker } = DatePicker;

import axios from "axios";
import Swal from "sweetalert2";

const BookingPageComponent = ({ room }) => {
  //console.log("From BPc", { room });
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [loading, setLoading] = React.useState(false);

  const [dates, setDates] = React.useState("");
  const [additionalOccupancy, setAdditionalOccupancy] = React.useState(0);
  let additionalOccupancyCost = 0;

  //console.log(dates);
  let diff = 0;
  diff = Math.floor((dates[1] - dates[0]) / (1000 * 60 * 60 * 24));
  let costPerNight = room.rentperday;
  let basicCost = costPerNight * diff;
  if (additionalOccupancy > 0) {
    additionalOccupancyCost = additionalOccupancy * basicCost * 0.3;
  }
  let totalCost = basicCost + additionalOccupancyCost;

  const bookRoom = async () => {};
  const onToken = async (token) => {
    const bookingDetails = {
      roomName: room.name,
      roomid: room._id,
      userid: user._id,
      userName: user.name,
      fromdate: dates[0].format("DD-MM-YYYY"),
      todate: dates[1].format("DD-MM-YYYY"),
      totalDays: diff,
      totalAmount: basicCost + additionalOccupancyCost,
      transactionId: "",
      token: token,
    };
    //console.log(bookingDetails);
    try {
      setLoading(true);
      const result = axios.post("/api/bookings/bookRoom", bookingDetails);
      setLoading(false);
      Swal.fire(
        "Congrats",
        "Your Room has booked succeessfully",
        "success"
      ).then((result) => {
        window.location.href = "/mybookings";
      });
    } catch (error) {
      setLoading(false);
      // console.log(error);

      Swal.fire("Sorry!!!", "Something went wrong , please try later", "error");
    }

    //console.log(token);
  };
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-2 shadow-xl max-w-4xl mx-auto rounded-xl">
        <div>
          {/* {room.imageurls.length > 0 && <img src={room.imageurls[0]} />} */}
          <img src="/images/hotel_room_1.png" className="w-full h-96 my-1" />
        </div>
        <div className="flex flex-col mx-auto my-auto">
          <h1 className="text-primary text-xl font-semibold">{room.name}</h1>
          <hr className="my-1" />
          <div className="flex flex-col space-y-2 p-4">
            <div>
              <span className="font-extralight"> Name : </span> {user.name}
            </div>
            <div>
              <span className="font-extralight">Mobile :</span> {user.mobile}{" "}
            </div>

            <div>
              <span className="font-extralight">Email :</span> {user.email}{" "}
            </div>
          </div>
          <hr className="my-1" />
          <div>
            <Space direction="vertical" size={12}>
              <RangePicker
                className="border border-primary m-2"
                placeholder={["Check In", "Check Out"]}
                onChange={(values) => {
                  setDates(values);
                }}
              />
            </Space>
          </div>

          {dates && (
            <div>
              <div>
                <p className="m-3 p-1 border border-primary max-w-56">
                  Additional Occupancy :{" "}
                  <select
                    className=""
                    name="occupancy"
                    id="occupancy"
                    onChange={(e) => {
                      setAdditionalOccupancy(e.target.value);
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </p>
              </div>
              <div className="m-3">
                <p>Check In Date : {dates[0].format("DD-MM-YYYY")}</p>
                <p>Check Out Date : {dates[1].format("DD-MM-YYYY")}</p>
                <p>Total No of Nights : {diff}</p>
                <hr className="my-3" />
                Rate per Day : {room.rentperday}
                <p>
                  {" "}
                  Cost for {diff} days : {basicCost}
                </p>
                <p>Additional Occupancy Cost : {additionalOccupancyCost}</p>
                <p className="text-primary font-extrabold my-3">
                  Total Cost : {totalCost}
                </p>
              </div>
            </div>
          )}
          {dates && (
            <div>
              <StripeCheckout
                amount={totalCost * 100}
                currency="INR"
                token={onToken}
                stripeKey="pk_test_51LFsZzSJDYv42pi4MhvAdwPuYV2HTzzDVTklvxuOt4o0le6vyYttWFP3GzTQ99eLi4rC6QYritaKmBXRsxDlXGoc00c5cl8hMc"
              >
                <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
                  Pay Now
                </button>
              </StripeCheckout>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center text-xl text-primary text-center py-3 mx-auto">
        <Link to="/">Back to Rooms</Link>
      </div>
      )
    </>
  );
};

export default BookingPageComponent;
