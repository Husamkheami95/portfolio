import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineMenu } from "react-icons/ai";
import Button from "../utility/Button";
import { useTheme } from "next-themes";
import Sidedrawer from "./Sidedrawer";
import Fade from "react-reveal/Fade";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import LocaleSwitcher from "./locale-switcher";


function Navbar() {

  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);



  const { systemTheme, theme, setTheme } = useTheme("dark");
  const [toggle, setToggle] = useState(false);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  const renderThemChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button  onClick={() => setTheme("light")}>
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
        <Button onClick={() => setTheme("dark")}>
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
            <div className="font-medium ml-2 ">
              <div>{t("home.myname")}</div>
              <div className="text-sm ">{t("home.mydescription")}</div>
            </div>
          </div>
          <div>
            <ul className="hidden  md:flex space-x-6 items-center">
              <Link href='/AboutMe'>
                <li className="nav-item">{t('nav.aboutme')}</li>
              </Link>
           
              <Link href="/Education">
                <li className="nav-item">{t('nav.education')}</li>
              </Link>

              <Link href="/Experience">
                <li className="nav-item">{t('nav.experience')}</li>
              </Link>

              <Link href="/ContactMe">
                <li className="nav-item">{t('nav.contactme')}</li>
              </Link>
              <Link href="#">
                <li className="ml-10  ">{renderThemChanger()}</li>
              </Link>
                 <Button><LocaleSwitcher/></Button>
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
            {toggle ? <Sidedrawer langswithch={<LocaleSwitcher/>} rendertheme={renderThemChanger()} /> : null}
            </div>
            

        
            
      </Fade>
    </div>
  );
}

export default Navbar;
