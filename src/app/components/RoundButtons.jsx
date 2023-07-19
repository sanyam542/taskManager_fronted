import React from "react";
import {
  menu,
  navIcon2,
  navIcon3,
  navIcon4,
  navIcon5,
  navIcon7,
  navIcon6,
  navIcon8,
  navIcon10,
  navIcon9,
} from "../../../public/assets/icons";
import Image from "next/image";

const RoundButtons = (props) => {
  const name = props.name;
  return (
    <div className="text-black rounded-full  shadow-md  flex items-center justify-center h-[50px] w-[50px] m-[15px]  relative">
      {props.img ? (
        <Image
          width={50}
          height={50}
          src={`/assets/${props.img}.svg`}
          alt=""
          className={` rounded-full ${props.bg} `}
        />
      ) : (
        <></>
      )}

      {props.name === "menu" && menu()}

      {props.name === "navIcon2" && navIcon2()}
      {props.name === "navIcon3" && navIcon3()}
      {props.name === "navIcon4" && navIcon4()}
      {props.name === "navIcon5" && navIcon5()}
      {props.name === "navIcon6" && navIcon6()}
      {props.name === "navIcon7" && navIcon7()}
      {props.name === "navIcon8" && navIcon8()}
      {props.name === "navIcon9" && navIcon9()}
      {props.name === "navIcon10" && navIcon10()}

      {props.dot && (
        <div className=" bg-[#3361FF] h-[10px] w-[10px] rounded-full absolute top-0 right-0"></div>
      )}
      {props.redDot && (
        <div className=" bg-[#E62E7B] h-[10px] w-[10px] rounded-full absolute top-0 right-0"></div>
      )}
    </div>
  );
};

export default RoundButtons;
