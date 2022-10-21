import Link from "next/link";
import React from "react";
import {  LightSpeed   } from "react-reveal";
import Button from "../utility/Button";
import { useTranslation } from "next-i18next";

function Sidedrawer({rendertheme,langswithch}) {
  
  const { t } = useTranslation("");
  
  return (
    <div>
        
        <LightSpeed   top>
        <ul className="block" >
        <div className="flex gap-6 ">

        <Link href="#">
          <li >{rendertheme}</li>
        </Link>
        <Link href="#">
          <Button>{langswithch}</Button>
        </Link>
       
        </div>
         <div className="mt-6">
         <Link href='/AboutMe'>
            <li className="sidedraw-item">{t('nav.aboutme')}</li>
          </Link>
          <Link href="/Education">
            <li className="sidedraw-item">{t('nav.education')}</li>
          </Link>
          <Link href="/Experience">
            <li className="sidedraw-item">{t('nav.experience')}</li>
          </Link>
          <Link href="/ContactMe">
            <li className="sidedraw-item">{t('nav.contactme')}</li>
          </Link>
         </div>
         
        </ul>
        </LightSpeed>
      
    </div>
  );
}

export default Sidedrawer;
