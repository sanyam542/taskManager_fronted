import React from "react";
import TaskHead from "./TaskHead";
import TaskWithImage from "./TaskWithImage";
import Task from "./Task";

const ToDo = (props) => {
  return (
    <div className=" w-[230px] h-[840px] bg-[#F7F8FA] ">
      <TaskHead name="TO DO" fill="#8833FF" />
      <TaskWithImage
        name="Space Tasks 2"
        task="Make Money Online Through"
        moreOptions="4"
        clip="2"
        daysLeft="6"
        img={["/assets/smallAvatar1.svg"]}
        marginTop="mt-[30px]"
        taskImg="/assets/taskImg1.png"
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Make Money Online Through"
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar3.svg", "/assets/smallAvatar2.svg"]}
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Search Engine Optimization ..."
        marginTop="mt-[10px]"
        img={[
          "/assets/smallAvatar6.svg",
          "/assets/smallAvatar5.svg",
          "/assets/smallAvatar4.svg",
        ]}
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Characteristics Of A Successful"
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar7.svg"]}
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Getting Free Publicity"
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar8.svg"]}
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Importance Of The Custom ..."
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar9.svg"]}
      />
      <div className=" leading-[20px] text-[12px] font-bold text-[#6B7A99] ml-[15px] mt-[20px] }">
        +NEW TASK
      </div>
    </div>
  );
};

export default ToDo;
