import React from "react";
import ToDo from "./ToDo";
import InWork from "./Inwork";
import Done from "./Done";
import Review from "./Review";
import PreviewTask from "./PreviewTask";
import {
  Calendar,
  Gantt,
  content1,
  content2,
  content3,
  menu,
  navIcon5,
  sidebar1,
  sidebar2,
} from "../../../public/assets/icons";

const tabs = [
  "List Tasks",
  "Boards",
  "Calendar",
  "Gantt",
  "Timeline",
  "Activity",
];

const Content = () => {
  return (
    <section className=" md:w-[1110px] md:h-[1015px] bg-[#F7F8FA] mt-[23px] relative overflow-x-scroll border-2 rounded-lg mr-[25px] mb-[25px] md:ml-0 ml-[25px]">
      <div className="w-[1110px] h-[62px] md:flex justify-between hidden   ">
        <div className="flex gap-[26px] h-[58px] w-[742px]   pl-[51px] mt-[25px] ">
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2 ">
              {sidebar2()}
              List Tasks
            </span>
          </div>
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2   ">
              {sidebar1()}
              Boards
            </span>
            <span className=" w-[94px] border-b-2 border-[#3361FF] "></span>
          </div>
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2  ">
              {Calendar()}
              Calendar
            </span>
          </div>
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2 ">
              {Gantt()}
              Gantt
            </span>
          </div>
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2  ">
              {menu()}
              Timeline
            </span>
          </div>
          <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
            <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2  ">
              {navIcon5()}
              Activity
            </span>
          </div>
        </div>
        <div>
          <input
            className=" w-[200px] h-[40px] rounded-full  text-[10px] font-black p-[15px] mt-[25px] mr-[25px]"
            type="text"
            placeholder="Search for Tasks"
          />
        </div>
      </div>

      <div className=" md:hidden flex mt-[25px] justify-between px-[20px] items-center">
        <div className=" h-[40px] w-[40px] shadow-md rounded-full  flex justify-center items-center ">
          {content1()}
        </div>
        <div className=" flex flex-col gap-[30px] text-[12px] leading-[20px] font-bold text-[#ADB8CC] ">
          <span className=" w-[94px] h-[30px] flex justify-center items-center gap-2   ">
            {sidebar1()}
            Boards
          </span>
          <span className=" w-[94px] border-b-2 border-[#3361FF] "></span>
        </div>
        <div className=" h-[40px] w-[40px] shadow-md rounded-full  flex justify-center items-center ">
          {content2()}
          {}
        </div>

        <div className=" h-[50px] w-[50px] ml-3 shadow-md rounded-full  flex justify-center items-center">
          {content3()}
        </div>
      </div>
      <div className="w-[1010px] h-[840px] bg-[#F7F8FA] m-auto md:mt-[48px] mt-[25px] flex justify-between relative">
        <ToDo type="TO DO" />
        <InWork />
        <Review />
        <Done />
        <PreviewTask />
      </div>
    </section>
  );
};

export default Content;
