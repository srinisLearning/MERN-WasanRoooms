import React from "react";

const SuccessComponent = ({ success }) => {
  return (
    <div role="alert">
      <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
        Success .....
      </div>
      <div class="border border-t-0 border-green-400 rounded-b bg-red-100 px-4 py-3 text-green-700">
        <p>{success}</p>
      </div>
    </div>
  );
};

export default SuccessComponent;
