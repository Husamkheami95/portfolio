import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";


export default function Experience() {

  const { t } = useTranslation("");

  return (
    <div>
        <Navbar/>

        <div className="h-screen flex justify-around mt-20 items-center">
        <div className="sh">
          <Image src="/../public/assets/exper.jpg" width="500" height="500" />
        </div>

        <div className="shadow-red-900 ">
          <div className="text-3xl mb-4">{t("education.first")}</div>

          <div className="m-3">
            <Link href="https://codeforces.com/profile/husam_kh95">
              <Image
                width="50"
                height="50"
                src={`/../public/assets/icons8-codeforces.png`}
                className="cursor-pointer"
              />
            </Link>
            <p className="font-bold ">codeforcers</p>
          </div>
        </div>
      </div>



        <Footer/>
    </div>
  )
}


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }