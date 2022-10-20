import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Card from "../components/utility/Card";
import Link from "next/link";

export default function Education() {
  const { t } = useTranslation("");
  // console.log(myVar==='ar')

  return (
    <div>
      <Navbar />
      <div className="h-screen md:flex justify-around mt-20 m-4 items-center">
    

        <div className="shadow-red-900 ">
          <div className="text-3xl  mb-4">{t("education.first")}</div>

          <div className="m-3">
            <Link href="https://codeforces.com/profile/husam_kh95">
              <Image
                width="50"
                height="50"
                src={`/icons8-codeforces.png`}
                className="cursor-pointer"
              />
            </Link>
            <p className="font-bold ">codeforcers</p>
          </div>
        </div>
        <div className="sh">
          <Image src="/edu.jpg" width="500" height="500" />
        </div>

      </div>

      <div className="h-screen md:flex justify-around m-4 items-center text-4xl mb-4">
       <div className="flex justify-center mb-7">{t("education.degree")}</div> 
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image src="/certificate.jpg" width="700" height="500" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{t("education.bacalors")}</div>
            <p class="text-gray-700 text-base">
            {t("education.baclorsdescribe")}
            </p>
          </div>
         
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-center mt-20 text-4xl mb-4">{t("education.digital")}</div>
       

        <div className="grid md:grid-cols-3  gap-6 mt-20">
          <Card urlImage="icons8-coursera.png" title="Full-Stack Web Development with React" href="https://www.coursera.org/account/accomplishments/specialization/certificate/C86LFKGE5SDM"/>
          <Card urlImage="icons8-coursera.png" title=" Cloud Apps with Node.js and React" href="https://www.coursera.org/account/accomplishments/certificate/7A6EG925Q7TV"/>
          <Card urlImage="icons8-meta-96.png" title="Version Control "href="https://www.coursera.org/account/accomplishments/certificate/JFSVPAWM7XEL"/>
          <Card urlImage="icons8-google-96.png" title="User Experience (UX) Design " href="https://www.coursera.org/account/accomplishments/certificate/FW9SY6Y6672X"/>
          <Card urlImage="icons8-coursera.png" title="IBM Applied AI Specialization  " href="https://www.coursera.org/account/accomplishments/specialization/certificate/GVPUD3S2E6SB"/>
          <Card urlImage="icons8-coursera.png" title="Agile Meets Design Thinking  " href="https://www.coursera.org/account/accomplishments/certificate/WVYMEP7S5UEU"/>
          <Card urlImage="icons8-coursera.png" title="Analysis for Business Systems "href="https://www.coursera.org/account/accomplishments/certificate/4D6KKVR8ZBNN"/>
          <Card urlImage="icons8-coursera.png" title="Algorithmic Toolbox" href="https://www.coursera.org/account/accomplishments/certificate/4D6KKVR8ZBNN" />
          <Card urlImage="icons8-coursera.png" title="Introduction to Cloud Computing"href="https://www.coursera.org/account/accomplishments/certificate/L9PKTMGFWEPA"/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  // myVar=locale
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
