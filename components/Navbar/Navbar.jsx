import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../utility/Button";
import { useTheme } from "next-themes";
import Sidedrawer from "./Sidedrawer";
import Fade from "react-reveal/Fade";




function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme("dark");
  const [toggle, setToggle] = useState(false);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  const renderThemChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button className="bg-grey-300" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-grey-300" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    }
  };



  return (
    <div className="p-3" >
      <Fade top duration={500} distance="20px">
        <nav className="flex justify-between px-4 mx-auto">
          <div className="flex  ml-3">
            <Image
              width="40%"
              height="40%"
               className=" rounded-full"
              src="/../public/assets/myphoto.jpg"
              alt=""
            />
            <div className="font-medium ml-2">
              <div>Husam Kheami</div>
              <div className="text-sm ">Software Eng.</div>
            </div>
          </div>
          <div>
            <ul className="hidden  md:flex space-x-6 items-center">
              <Link href='3'>
                <li className="nav-item">About Me</li>
              </Link>

              <Link href="#">
                <li className="nav-item">Education</li>
              </Link>

              <Link href="#">
                <li className="nav-item">Experience</li>
              </Link>

              <Link href="#">
                <li className="nav-item">Contact me</li>
              </Link>
              <Link href="#">
                <li className="ml-10  ">{renderThemChanger()}</li>
              </Link>
                 
            </ul>
            <div className="md:hidden ">
            <Button onClick={()=>handelToggle()}>
                <div>
                  <AiOutlineMenu size={25} />
                </div>
              </Button>
              </div>
          </div>
        </nav>
     
        
            <div className="md:hidden mt-5">
            {toggle ? <Sidedrawer rendertheme={renderThemChanger()} /> : null}
            </div>
            

        
            
      </Fade>
    </div>
  );
}

export default Navbar;
