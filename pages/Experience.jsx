import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


export default function Experience() {
  const { t } = useTranslation("");

  return (
    <div>
      <Navbar />
      <div className="flex justify-center text-3xl mt-20 mb-20 ml-5 mr-5">Experience Work</div>
      <div className="space-y-10">
        
      <div className=" m-auto  relative bg-white py-6 px-6 rounded-3xl w-1/2 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold text-black my-2">Full-stack Developer</p>
            <div className="flex space-x-2 text-black text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Tatweer LLC </p>
            </div>
            <div className="flex space-x-2 text-black text-sm my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p> Full-time [ 01/2021 – 04/2022 ] </p>
            </div>
            <div className="border-t-2 "></div>
          </div>
        </div>
        <div className="m-auto relative bg-white py-6 px-6 rounded-3xl w-1/2  my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold text-black my-2">Android Developer</p>
            <div className="flex space-x-2 text-black text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Z group mobile</p>
            </div>
            <div className="flex space-x-2 text-black text-sm my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>Part-time [ 05/2019 – 03/2020 ] </p>
            </div>
            <div className="border-t-2"></div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
