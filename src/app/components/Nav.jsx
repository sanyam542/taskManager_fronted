import React from "react";
import RoundButtons from "./RoundButtons";
import { navMore, navPerson } from "../../../public/assets/icons";

const navs = ["Dashboard", "About Us", "News", "User Policy", "Contacts"];
const Nav = () => {
  return (
    <>
      <nav className=" text-black flex relative justify-between bg-[#F7F8FA] h-[100px] items-center  overflow-x-scroll pl-[10px]  pr-[23px] scroll-m-0 border-2 ">
        <div className="flex justify-between  w-[100%] items-center ">
          <div>
            <RoundButtons name="menu" />
          </div>
          <div>
            <h3 className="text-[18px] text-[#4D5E80] leading-[30px] font-bold  ">
              {" "}
              Constructor
            </h3>
          </div>
          <div>
            <div className=" justify-between  items-center w-[441px] h-[30px] text-[13px] xl:gap-0 text-[#7D8FB3] leading-[25px] font-bold ml-3 hidden lg:flex ">
              {navs.map((item, index) => (
                <div key={index} className=" ml-[2px] lg:block">
                  {item}{" "}
                </div>
              ))}
              <div className=" ml-3 md:ml-0 mr-3 hidden md:block">
                {navMore()}
              </div>
            </div>
          </div>
          <div>
            <input
              className="w-[430px] h-[50px] border-2 rounded-full p-[20px]  text-[12px] font-bold hidden  md:block mx-2"
              type="text"
              placeholder="Search Products,Orders and Clients"
            />
          </div>

          <div className=" font-bold text-[13px] text-[#6B7A99] hidden md:block">
            Clayton Santos
          </div>
          <div>{navPerson()}</div>
          <div className="md:flex hidden ">
            <RoundButtons name="navIcon10" redDot="true" />
            <RoundButtons name="navIcon9" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
