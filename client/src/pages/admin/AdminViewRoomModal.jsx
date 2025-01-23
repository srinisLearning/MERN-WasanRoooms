import React from "react";

const AdminViewRoomModal = ({ show, onClose, room }) => {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center ">
        <div className="bg-white rounded-lg shadow-xl p-6   max-w-screen-xl">
          <div className="flex justify-between items-center">
            <div>
              <img src={room.imageurl} width={300} height={150} />
            </div>
            <div>
              <table className="max-w-md divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Room Id
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      {room._id}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Room Name
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
                      {room.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      E-Mail
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                      {room.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Phone Number
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
                      {room.phonenumber}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Website
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
                      {room.website}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Rent Per Day
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
                      {room.rentperday}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                      Description
                    </td>
                    <td className="px-1 py-1 whitespace-nowrap text-sm text-gray-500 text-wrap">
                      {room.description}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex m-2 justify-end items-baseline">
            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewRoomModal;
