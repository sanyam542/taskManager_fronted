import React from "react";
import TaskHead from "./TaskHead";

import Task from "./Task";

const Done = (props) => {
  return (
    <div className=" w-[230px] h-[840px] bg-[#F7F8FA] ">
      <TaskHead name="DONE" fill="#29CC39" />

      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Make Money Online Through"
        marginTop="mt-[30px]"
        img={["/assets/smallAvatar10.svg"]}
      />

      <div className=" leading-[20px] text-[12px] font-bold text-[#6B7A99] ml-[15px] mt-[20px] }">
        +NEW TASK
      </div>
    </div>
  );
};

export default Done;
