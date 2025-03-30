import React from "react";

const PagesBanner = ({ title, subtitle }) => {
  return (
    <>
    <div className="bg-[url(banner/banner11.jpg)] h-[10rem] sm:h-[20rem] bg-contain sm:bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center gap-2 bg-blend-saturation">
      <img src="curve.png" alt=" " className="absolute bottom-0" />
      <h3 className="text-xl sm:text-3xl font-semibold">{title}</h3>
      <h2 className="text-lg sm:text-2xl">{subtitle}</h2>
    </div>
    </>
  );
};

export default PagesBanner;
