import React from "react";

const AdminViewRoomModal = ({ show, onClose, rooms }) => {
  if (!show) return null;
  return;
  <>
    <div>Admin View Room Modal</div>;
    <div className="flex justify-end">
      <button
        onClick={onClose}
        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </>;
};

export default AdminViewRoomModal;
