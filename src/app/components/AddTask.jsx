import React from "react";
import {
  addTask1,
  addTask2,
  addTask3,
  addTask4,
} from "../../../public/assets/icons";
import Image from "next/image";

const AddTask = (props) => {
  return (
    <div className=" flex flex-col justify-between h-[115px] w-[230px] mt-[20px] bg-white rounded-[5px] p-[15px]">
      <div className="flex justify-between items-center">
        <span className="h-[30px] w-[30px] flex justify-center items-center ">
          {addTask1()}
        </span>
        <h5 className=" font-bold leading-[20px] text-[12px] text-[#ADB8CC] mr-[20px]">
          Task name or type
        </h5>

        <Image
          width={20}
          height={20}
          src={props.img}
          alt=" img"
          className="rounded-full "
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between items-center">
          <span className="h-[30px] w-[30px] flex justify-center items-center ">
            {addTask2()}
          </span>
          <span className="h-[30px] w-[30px] flex justify-center items-center ">
            {addTask3()}
          </span>{" "}
          <span className="h-[30px] w-[30px] flex justify-center items-center ">
            {addTask4()}
          </span>
        </div>
        <button className="bg-[#3361FF] h-[30px] w-[43px] rounded-[5px] text-white text-[10px] font-black leading-[20px] ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTask;
