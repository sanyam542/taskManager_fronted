import React from "react";
import TaskHead from "./TaskHead";
import TaskWithImage from "./TaskWithImage";
import Task from "./Task";
import TaskOptions from "./TaskOptions";

const Inwork = (props) => {
  return (
    <div className=" w-[230px] h-[840px] bg-[#F7F8FA] ">
      <TaskHead name="IN WORK" fill="#33BFFF" />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 3"
        task="Types Of Paper In Catalog"
        marginTop="mt-[30px]"
        img={["/assets/smallAvatar10.svg"]}
      />
      <TaskWithImage
        name="Space Tasks 2"
        task="Global Resorts Network"
        moreOptions="4"
        clip="2"
        daysLeft="6"
        img={["/assets/smallAvatar1.svg"]}
        taskImg="/assets/taskImg2.png"
        marginTop="mt-[10px]"
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Development Apps "
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar10.svg"]}
      />

      <div className=" bg-white">
        <Task
          type="alone"
          shadow="s"
          name="Space Tasks 2"
          task="Copper Canyon"
          marginTop="mt-[10px] "
          img={["/assets/smallAvatar9.svg"]}
        />
        <TaskOptions moreOptions="4" clip="2" daysLeft="1" red="true" />
      </div>
      <div className=" leading-[20px] text-[12px] font-bold text-[#6B7A99] ml-[15px] mt-[20px] }">
        +NEW TASK
      </div>
    </div>
  );
};

export default Inwork;
