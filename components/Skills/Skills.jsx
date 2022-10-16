import React from "react";
import {
  FrontEndDevelopment,
  BackEndWebDevelopment,
  MobileDevelopment,
  Cloud_Infra_Architecture,
} from "../utility/FullStackIcons";
import Slide from "react-reveal/Slide";
import { useTranslation } from "next-i18next";


function Skills() {
  const { t } = useTranslation("");

  return (
    <div className=" p-8">
      <h1 className="text-5xl  grid grid-rows-3 justify-center ">
      {t("home.doning")}
      </h1>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-row-2 container mx-auto">
        <Slide left>
          <div className="md:mr-20">
            <FrontEndDevelopment />
          </div>
        </Slide>

        <Slide right>
          <div>
            <h1 className="text-4xl mb-4">{t("home.front")}</h1>
            <div className="ml-5">
              ⚡ Developing highly scalable production ready models for various
              deeplearning and statistical use cases
              <br />
              ⚡ Experience of working with Computer Vision and NLP projects
              <br />⚡ Complex quantitative modelling for dynamic forecasting
              and time series analysis
            </div>
          </div>
        </Slide>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-5">
          <Slide left>
            <div className="mr-5 md:mr-20">
 
    
              <BackEndWebDevelopment />
            </div>
          </Slide>
        </div>
        <Slide right>
          <div>
            <h1 className="text-4xl mb-4 order-1">{t("home.backend")}</h1>
            <div>
              ⚡ Developing highly scalable production ready models for various
              deeplearning and statistical use cases
              <br />
              ⚡ Experience of working with Computer Vision and NLP projects
              <br />⚡ Complex quantitative modelling for dynamic forecasting
              and time series analysis
            </div>
          </div>
        </Slide>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <Slide left>
          <div className="md:mr-20">
            <MobileDevelopment />
          </div>
        </Slide>

        <Slide right>
          <div className="md:mr-20">
            <h1 className="text-4xl mb-4 ">{t("home.mobile")}</h1>
            <div >
              ⚡ Developing highly scalable production ready models for various
              deeplearning and statistical use cases
              <br />
              ⚡ Experience of working with Computer Vision and NLP projects
              <br />⚡ Complex quantitative modelling for dynamic forecasting
              and time series analysis
            </div>
          </div>
        </Slide>
      </div>

      <div className="md:h-96 h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-10">
          <Slide left>
            <div className="mr-5 md:mr-20">
              <Cloud_Infra_Architecture />
            </div>
          </Slide>
        </div>

        <Slide right>
          <div>
            <h1 className="text-4xl mb-4  order-1">{t("home.deploy")}</h1>
            <div>
              ⚡ Developing highly scalable production ready models for various
              deeplearning and statistical use cases
              <br />
              ⚡ Experience of working with Computer Vision and NLP projects
              <br />⚡ Complex quantitative modelling for dynamic forecasting
              and time series analysis
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}



export default Skills;
