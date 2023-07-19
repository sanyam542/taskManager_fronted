import React from "react";
import TaskHead from "./TaskHead";

import Task from "./Task";
import AddTask from "./AddTask";

const Review = (props) => {
  return (
    <div className=" w-[230px] h-[840px] bg-[#F7F8FA] ">
      <TaskHead name="REVIEW" fill="#FFCB33" />

      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Make Money Online Through"
        margin="mt-[10px]"
        img={["/assets/smallAvatar11.svg"]}
        marginTop="mt-[30px]"
      />
      <Task
        type="alone"
        shadow="shadow-sm"
        name="Space Tasks 2"
        task="Make Money Online Through"
        marginTop="mt-[10px]"
        img={["/assets/smallAvatar10.svg"]}
      />
      <AddTask img={"/assets/smallAvatar5.svg"} />
    </div>
  );
};

export default Review;
