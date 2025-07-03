import React from "react";
import Image from "next/image";

function Bookcallbtn() {
  return (
    <button className="bg-purple-50 hover:bg-purple-50 cursor-pointer text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2">
      <span>
        <Image
          src="/Vector (Stroke).svg"
          alt="Phone Icon"
          width={20}
          height={20}
        />
      </span>
      <span>Book a Call</span>
    </button>
  );
}

export default Bookcallbtn;
