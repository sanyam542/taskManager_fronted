import RoundButtons from "./components/RoundButtons";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex item-center justify-between bg-[#F7F8FA] text-black  ">
      <div className=" flex-col justify-between items-center bg-[#F7F8FA] border-r-2 w-[100px] ml-0 p-[25px] hidden md:flex ">
        <ul>
          <RoundButtons name="navIcon2" />
          <RoundButtons name="navIcon3" />
          <RoundButtons name="navIcon4" dot="true" />
          <RoundButtons name="navIcon5" />
          <RoundButtons name="navIcon6" />
          <RoundButtons name="navIcon7" />
        </ul>

        <ul>
          <div>
            {" "}
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <paR
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 9.08249V3.91249C12 3.38249 11.79 2.87249 11.41 2.50249L9.7 0.792486C9.51317 0.605233 9.25952 0.5 8.995 0.5C8.73048 0.5 8.47683 0.605233 8.29 0.792486L6.59 2.49249C6.21 2.87249 6 3.38249 6 3.91249V5.08249H2C0.9 5.08249 0 5.98249 0 7.08249V17.0825C0 18.1825 0.9 19.0825 2 19.0825H16C17.1 19.0825 18 18.1825 18 17.0825V11.0825C18 9.98248 17.1 9.08249 16 9.08249H12ZM4 17.0825H2V15.0825H4V17.0825ZM4 13.0825H2V11.0825H4V13.0825ZM4 9.08249H2V7.08249H4V9.08249ZM10 17.0825H8V15.0825H10V17.0825ZM10 13.0825H8V11.0825H10V13.0825ZM10 9.08249H8V7.08249H10V9.08249ZM10 5.08249H8V3.08249H10V5.08249ZM16 17.0825H14V15.0825H16V17.0825ZM16 13.0825H14V11.0825H16V13.0825Z"
                fill="#C3CAD9"
              />
            </svg>
          </div>
          <RoundButtons img="navImage1" dot="true" bg="bg-red-200" />
          <RoundButtons img="navImage2" bg=" bg-rose-300 " />
          <RoundButtons
            img="navImage3"
            bg=" bg-purple-300"
            className=" bg-rose-400 bg-yell "
          />
          <RoundButtons img="navImage4" bg=" bg-yellow-400" />
          <RoundButtons name="navIcon8" />
        </ul>
      </div>
      <Sidebar />
      <Content />
    </main>
  );
}
