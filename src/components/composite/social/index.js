import React from "react";

export default function Social({classParameter}) {
  return (
    <div className={`flex   items-center justify-center  w-12/12  text-2xl text-social mt-5 ${classParameter}`}>
      <div className="w-3/12 flex items-center justify-center px-2">
        <i className="fab fa-facebook"></i>
      </div>
      <div className="w-3/12 flex items-center justify-center px-2 ">
        <i className="fab fa-instagram "></i>
      </div>
      <div className="w-3/12 flex items-center justify-center px-2">
        <i className="fab fa-twitter "></i>
      </div>
      <div className="w-3/12 flex items-center justify-center px-2">
        <i className="fab fa-youtube "></i>
      </div>
    </div>
  );
}
