import React from "react";
import Marquee from "react-fast-marquee";

export default function Client() {
  return (
    <div className="">
      <Marquee pauseOnHover={true} speed={60} className=" ">
        <div className="flex gap-2.5 mx-2">
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/8CNjD0Vy/download-4.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/gJnwBtRn/download.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/P5yPfnQC/download-5.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/zvxcXBvd/download.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/GpN39L8m/download-6.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-250px h-250px object-cover rounded-lg "
              src="https://i.postimg.cc/KjhZr05X/download-2.png"
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
}
