import React from "react";

import {
  menu,
  profile1,
  profile2,
  profile3,
  profile4,
  sidebar8,
  sidebar7,
  sidebar6,
  sidebar5,
  sidebar4,
  sidebar3,
  sidebar2,
  sidebar1,
  sidebaraAvatarIcon,
  navMore,
} from "../../../public/assets/icons";
import Image from "next/image";

menu;
const items = [
  "Dashboard",
  "Notes",
  "Tasks",
  "Files",
  "Emails",
  "Clients",
  "Calenders",
  "Settings",
];
const Profile = () => {
  return (
    <section className=" bg-[#F7F8FA] text-black  md:block hidden mx-[10px]   ">
      <div className=" h-[983px] w-[250px] flex flex-col justify-between items-center mt-[37px] ">
        <div className="h-[283px] w-[250px] text-center">
          <div className="flex justify-between">
            <div className="h-[40px] w-[40px] flex items-center justify-center shadow-md rounded-full">
              {" "}
              {sidebaraAvatarIcon()}
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center shadow-md rounded-full">
              {navMore()}
            </div>
          </div>
          <div className="border-t-2 rounded-full h-[130px] w-[130px] m-auto flex justify-center items-center relative">
            <div className="border-[#3361FF] border-2 rounded-full h-[130px] w-[130px] flex justify-center items-center  ">
              <Image
                src="/assets/Main.svg"
                alt="profilePic"
                width={110}
                height={110}
                className=" "
              />
            </div>
            <div className="bg-[#3361FF] h-[30px] w-[30px] absolute right-[-15px] z-10 rounded-full  flex justify-center items-center text-white font-black text-[12px]">
              2
            </div>
          </div>

          <h3 className="mt-[30px]  text-[16px] leading-[30px] font-bold text-[#6B7A99] ">
            Hello Alfred Bryant
          </h3>
          <p className="mt-[12px]  text-[12px] leading-[30px] font-bold text-[#ADB8CC] ">
            adrain.nader@yahoo.com
          </p>
        </div>
        <div className="h-[490px] w-[250px] grid grid-cols-2  border-2 gap-0 rounded-2xl text-[12px] leading-[20px] font-bold text-[#ADB8CC]">
          <div>
            <div
              className="h-[120px] w-[120px]  flex  justify-center flex-col gap-[20px] items-center
            "
            >
              {sidebar1()}
              Dashoboard
            </div>
            <div className="h-[120px] w-[120px] border-t-2 flex flex-col gap-[20px]  justify-center items-center ">
              {sidebar2()}
              Tasks
            </div>
            <div className="h-[120px] w-[120px] border-t-2 flex  flex-col gap-[20px] justify-center items-center">
              {sidebar3()}
              Emails
            </div>
            <div className="h-[120px] w-[120px] border-t-2 flex  flex-col gap-[20px] justify-center items-center">
              {sidebar4()}
              Calenders
            </div>
          </div>
          <div>
            <div className="h-[120px] w-[120px] border--2 border-l-2 flex flex-col gap-[20px] justify-center items-center bg-white rounded-tr-lg relative text-[#3361FF]">
              {sidebar5()}
              Notes
              <div className="absolute left-[90px] top-[20px] rounded-full bg-[#3361FF] h-[7px] w-[7px]"></div>
            </div>
            <div className="h-[120px] w-[120px] border-t-2 flex  justify-center flex-col gap-[20px] items-center border-l-2">
              {sidebar6()}
              Files
            </div>
            <div className="h-[120px] w-[120px] border-t-2 flex  justify-center items-center  flex-col gap-[20px] border-l-2">
              {sidebar7()}
              Clients
            </div>

            <div className="h-[120px] w-[120px] border-t-2 flex flex-col gap-[20px] justify-center items-center border-l-2">
              {sidebar8()}
              Settings
            </div>
          </div>
        </div>
        <div className="h-[60px] w-[240px] border-2  rounded-full flex justify-between items-center p-[25px]">
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {profile1()}
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {profile2()}
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {profile3()}
          </div>
          <div className="h-[30px] w-[30px] flex justify-center items-center ">
            {profile4()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
