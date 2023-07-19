import Image from "next/image";
import React from "react";

const Task = (props) => {
  return (
    <div
      className={` h-[75px] w-[230px] bg-white    rounded-[5px] p-[15px] ${
        props.type === "alone" && props.marginTop
      }
      
      ${props.type === "alone" && props.shadow} `}
    >
      <div className=" flex justify-between">
        <h5 className="  leading-[20px] text-[10px] text-[#ADB8CC] font-bold">
          {props.name}
        </h5>
        <div className="flex  ">
          {props.img?.map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                alt="img"
                height={20}
                width={20}
                className={` rounded-full  `}
              />
            );
          })}
        </div>
      </div>
      <h3 className="leading-[20px] text-[12px] text-[#6B7A99] font-bold">
        {props.task}
      </h3>
    </div>
  );
};
export default Task;
