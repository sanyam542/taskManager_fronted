import React from "react";

import Task from "./Task";
import TaskOptions from "./TaskOptions";
import Image from "next/image";

const TaskWithImage = (props) => {
  return (
    <div
      className={`h-[285px] w-[230px] shadow-sm rounded-[5px] bg-white flex flex-col ${props.marginTop} `}
    >
      <Image
        src={props.taskImg}
        alt="taskImage"
        width={230}
        height={170}
        className=" rounded-t-[5px]"
      />

      <div className="flex flex-col justify-between ">
        <Task {...props} />

        <TaskOptions {...props} />
      </div>
    </div>
  );
};

export default TaskWithImage;
