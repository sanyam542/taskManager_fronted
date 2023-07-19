import React from "react";
import {
  clip,
  moreOptions,
  redWatch,
  watch,
} from "../../../public/assets/icons";

const TaskOptions = (props) => {
  return (
    <div className=" flex h-[40px] justify-between px-[15px] pb-[15px] items-center">
      {moreOptions()}
      <span className=" font-bold leading-[20px] text-[10px] text-[#6B7A99]">
        {props.moreOptions}
      </span>
      {clip()}
      <span className=" font-bold leading-[20px] text-[10px] text-[#6B7A99]">
        {props.clip}
      </span>

      {props.red ? redWatch() : watch()}
      <span
        className={` font-bold leading-[20px] text-[10px] text-[#6B7A99] ${
          props.red && "text-[#E62E2E]"
        }`}
      >
        {props.daysLeft} days left
      </span>
    </div>
  );
};

export default TaskOptions;
