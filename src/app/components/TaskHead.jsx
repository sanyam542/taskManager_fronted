import React from "react";
import {
  taskHead1,
  taskHead2,
  taskHeadLabel,
} from "../../../public/assets/icons";

const TaskHead = (props) => {
  return (
    <div className=" h-[60px] w-[230px] bg-white flex items-center justify-between rounded-md shadow-sm py-[15px] pr-[15px] ">
      <span className="  justify-self-start	">{taskHeadLabel(props)}</span>
      <span className=" leading-[20px] font-black text-[12px] text-[#4D5E80]">
        {props.name}
      </span>
      <span className="rounded-full h-[30px] w-[30px] shadow-sm leading-[20px] font-black text-[10px] text-[#6B7A99] flex justify-center items-center ">
        5
      </span>
      {taskHead1()}

      {taskHead2()}
    </div>
  );
};

export default TaskHead;
