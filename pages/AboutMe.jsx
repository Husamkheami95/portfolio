import React from 'react'
import Footer from '../components/Footer/Footer'
import Gretting from '../components/Grettings/Gretting'
import Navbar from '../components/Navbar/Navbar'
import Skills from '../components/Skills/Skills'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function AboutMe() {
  return (
    <div>
        <Navbar/>
        <Gretting/>
        <Skills/>
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