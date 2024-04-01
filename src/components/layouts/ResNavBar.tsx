import { Link } from "react-router-dom";
import Container from "../Container";
import { FaBox } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";

const ResNavBar = () => {
  return (
    <Container>
      <div className="  bg-slate-950 flex md:justify-between   px-2 py-4  justify-center gap-4 items-center ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-secondary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Desktop</a>
            </li>
            <li>
              <a>Laptop</a>
            </li>
            <li>
              <a>Component</a>
            </li>
            <li>
              <a>Monitor</a>
            </li>
            <li>
              <a>UPS</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <img
            src="https://www.startech.com.bd/image/catalog/logo.png"
            alt=""
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search "
            className="md:w-[400px] w-60 px-2 py-2  rounded-md"
          />
        </div>
        <div className=" text-white md:flex md:gap-4 p-2 items-center hidden ">
          <Link to="">
            <span className="flex items-center ">
              <span className="text-orange-400 mx-2 text-2xl">
                <FaBox />
              </span>
              Offers
            </span>
          </Link>
          <Link to="">
            <span className="flex items-center ">
              <span className="text-orange-400 mx-2 text-2xl">
                <AiFillThunderbolt />
              </span>
              Happy Hour
            </span>
          </Link>

          <Link to="">
            <span className="flex items-center ">
              <span className="text-orange-400 mx-2 text-2xl">
                <MdAccountBox />
              </span>
              Acount
            </span>
          </Link>
          <button className="text-white bg-blue-700 px-2 py-2 rounded-md font-bold">
            <Link to="">PC Builder</Link>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ResNavBar;
