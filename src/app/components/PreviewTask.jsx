import React from "react";
import {
  addTask1,
  addTask2,
  clip,
  preview1,
  preview2,
  previewTask1,
  previewTask2,
  previewTask3,
} from "../../../public/assets/icons";
import Image from "next/image";

const PreviewTask = () => {
  return (
    <div className="w-[450px] h-[340px] rounded-lg absolute bg-white right-[-70px] bottom-[-20px] top-[] left-[] shadow-sm md:block hidden">
      <div className="up h-[235px] border-2 border-transparent border-b-[#F5F6F7]">
        <div className="flex justify-between px-[65px] pt-[30px]">
          <h3 className="leading-[30px] font-bold text-[14px] text-[#4D5E80]">
            Development Apps
          </h3>
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {clip()}
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {addTask1()}
          </div>
        </div>
        <div className=" bg-white grid grid-cols-2  ml-[65px] mt-[20px] leading-[20px] font-black text-[12px] text-[#4D5E80] mr-[99px] gap-[15px]">
          <div className=" ">
            <div className=" flex  ">
              <div className="ml-1 mr-4"> {previewTask1()}</div>
              <h3 className="">4 Subtasks</h3>
            </div>
            <div className=" mt-[15px] flex">
              <div className=" ml-1 mr-4"> {previewTask2()}</div>
              <h3 className="">3 Files</h3>
            </div>{" "}
            <div className=" mt-[15px] flex items-center">
              <Image
                width={30}
                height={30}
                src={"/assets/previewImg.svg"}
                alt="amg"
                className=" rounded-full mr-2 bg-purple-300"
              />

              <h3 className="">Tyler Norman</h3>
            </div>{" "}
          </div>

          <div>
            <div className="  flex justify-between">
              {addTask2()}
              <h3 className="">Priority Enabled</h3>
            </div>{" "}
            <div className=" mt-[15px]  flex  ">
              <div className=" mr-4"> {previewTask3()}</div>
              <h3 className="">7 Comments</h3>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="down pl-[70px] pr-[40px] pt-[25px] flex w-full justify-between items-center">
        <div className="flex justify-between items-center w-[214px] h-[45px]">
          <div className="leading-[20px] font-black text-[12px]  w-[82px] h-[45px] ">
            <h4 className=" text-[#7D8FB3]"> START DATE</h4>
            <h4 className="text-[#4D5E80] "> Sep3,9:30pm</h4>
          </div>
          <span className="h-[30px] w-[30px] flex justify-center items-center ">
            {preview1()}
          </span>
          <div className="leading-[20px] font-black text-[12px]  w-[82px] h-[45px] ">
            <h4 className=" text-[#7D8FB3]">DUE DATE</h4>
            <h4 className="text-[#4D5E80] ">Sep4,9:00pm</h4>
          </div>
        </div>
        <div className=" h-[30px] w-[70px] flex items-center justify-between">
          <div className=" h-[30px] w-[30px] bg-[#29CC39] flex justify-center items-center  rounded-full ">
            {preview2()}
          </div>
          <h3 className="leading-[20px] font-black text-[12px] text-[#4D5E80] ">
            0:00
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PreviewTask;
