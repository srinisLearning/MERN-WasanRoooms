import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingComponent from "../../components/utils/LoadingComponent";
import ErrorComponent from "../../components/utils/ErrorComponent";
import { Link } from "react-router-dom";
import AdminViewRoomModal from "./AdminViewRoomModal";
/* import AdminEditRoomModal from "./AdminEditRoomModal";
import AdminAddRoomModal from "./AdminAddRoomModal"; */

const AdminBookingsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [rooms2, setRooms2] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const [isAdminViewModalOpen, setIsAdminViewModalOpen] = useState(false);
  /* const [isAdminAddModalOpen, setIsAdminAddModalOpen] = useState(false);
  const [isAdminEditModalOpen, setIsAdminEditModalOpen] = useState(false); */
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setloading(true);
        const rooms = await await axios.get("/api/rooms/getAllRooms");
        setRooms(rooms.data);
        setRooms2(rooms.data);
        // console.log(rooms.data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    };
    fetchBookings();
  }, []);
  const filterByRoomName = () => {
    const filteredRooms = rooms2.filter((room) =>
      room.name.toLowerCase().includes(nameSearch.toLowerCase())
    );
    setRooms(filteredRooms);
  };

  const filterByCity = () => {
    const filteredRooms = rooms2.filter((room) =>
      room.city.toLowerCase().includes(citySearch.toLowerCase())
    );
    setRooms(filteredRooms);
  };
  return (
    <>
      <NavbarAdmin />
      <h3 className="text-primary w-full text-center text-3xl font-thin py-2">
        Rooms Admin Page
      </h3>
      <div>
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          <>
            <div className="grid grid-rows-1 grid-cols-2 gap-4 border border-primary-300  p-4 my-3 shadow-xl max-w-4xl mx-auto rounded-xl">
              <div className="flex flex-col mx-auto my-auto">
                <input
                  placeholder="Search Room By City"
                  className="border border-primary-300 p-2 rounded-lg"
                  onChange={(e) => setCitySearch(e.target.value)}
                  onKeyUp={filterByCity}
                />
              </div>
              <div className="flex flex-col mx-auto my-auto">
                <p>
                  <input
                    placeholder="Search Room By Name"
                    className="border border-primary-300 p-2 rounded-lg"
                    onChange={(e) => setNameSearch(e.target.value)}
                    onKeyUp={filterByRoomName}
                  />
                </p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <table
                cellPadding={15}
                cellSpacing={15}
                className="table table-bordered table-hover text-center mx-auto"
              >
                <thead>
                  <tr className="text-xs">
                    <th>Room Name</th>
                    <th>City </th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Rent Per Day</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => {
                    return (
                      <tr key={room._id} className="text-xs">
                        <td>{room.name}</td>
                        <td>{room.city}</td>
                        <td>{room.phonenumber}</td>
                        <td>{room.email}</td>
                        <td>{room.website}</td>
                        <td>{room.rentperday}</td>

                        <td>
                          <Link
                            className="bg-blue-500 text-white m-2 p-2 rounded-lg"
                            to={` `}
                            onClick={() => {
                              setIsAdminViewModalOpen(true);
                              setRooms(rooms);
                            }}
                          >
                            VIEW ALL
                          </Link>
                        </td>
                        <td>
                          {/*  <Link
                            className="bg-amber-500 text-white m-2 p-2 rounded-lg"
                            to={` `}
                            onClick={() => {
                              setIsAdminEditModalOpen(true);
                              setRooms(rooms);
                            }}
                          >
                            EDIT
                          </Link> */}
                        </td>
                        <td>
                          {/*  <Link
                            className="bg-red-500 text-white m-2 p-2 rounded-lg"
                            to={` `}
                            onClick={() => {
                              setIsAdminAddModalOpen(true);
                            }}
                          >
                            DELETE
                          </Link> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <AdminViewRoomModal
        show={isAdminViewModalOpen}
        onClose={() => setIsAdminViewModalOpen(false)}
        rooms={rooms}
      />
      {/*   <AdminEditRoomModal
        show={isAdminEditModalOpen}
        onClose={() => setIsAdminEditModalOpen(false)}
        rooms={rooms}
      />
      <AdminAddRoomModal
        show={isAdminAddModalOpen}
        onClose={() => setIsAdminAddModalOpen(false)}
      /> */}
    </>
  );
};

export default AdminBookingsPage;
