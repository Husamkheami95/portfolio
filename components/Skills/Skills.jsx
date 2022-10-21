import React from "react";
import {
  FrontEndDevelopment,
  BackEndWebDevelopment,
  MobileDevelopment,
  Cloud_Infra_Architecture,
} from "../utility/FullStackIcons";
import Slide from "react-reveal/Slide";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

function Skills() {
  const { t } = useTranslation("");

  return (
    <div className=" p-8">
      <h1 className="text-5xl  grid grid-rows-3 justify-center ">
        {t("home.doning")}
      </h1>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-row-2 container mx-auto">
        <Fade left duration={2000}>
          <div className="md:mr-20">
            <FrontEndDevelopment />
          </div>
        </Fade>
         
        <Fade right duration={2000}>
          <div>
            <h1 className="text-4xl mb-4">{t("home.front")}</h1>
            <div className="ml-5">
              ⚛ {t("descripe.frontdescribe1")}
              <br />⚛ {t("descripe.frontdescribe2")}
            </div>
          </div>
        </Fade>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-5">
          <Fade left duration={2000}>
            <div className="mr-5 md:mr-20">
              <BackEndWebDevelopment />
            </div>
          </Fade>
        </div>
        <Fade right duration={2000}>
          <div>
            <h1 className="text-4xl mb-4 order-1">{t("home.backend")}</h1>
            <div>
              ⚛ {t("descripe.backenddescribe1")}
              <br />⚛ {t("descripe.backenddescribe2")}
            </div>
          </div>
        </Fade>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <Fade right duration={2000}>
          <div className="md:mr-20">
            <MobileDevelopment />
          </div>
        </Fade>

        <Fade left duration={2000}>
          <div className="md:mr-20">
            <h1 className="text-4xl mb-4 ">{t("home.mobile")}</h1>
            <div>
              ⚛ {t("descripe.mobiledescribe1")}
              <br />⚛ {t("descripe.mobiledescribe2")}
            </div>
          </div>
        </Fade>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-10">
          <Fade right duration={2000}>
            <div className="mr-5 md:mr-20">
              <Cloud_Infra_Architecture />
            </div>
          </Fade>
        </div>

        <Fade left duration={2000}>
          <div>
            <h1 className="text-4xl mb-4  order-1">{t("home.deploy")}</h1>
            <div>
              ⚛ {t("descripe.deploydescribe1")}
              <br />⚛ {t("descripe.deploydescribe2")}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
