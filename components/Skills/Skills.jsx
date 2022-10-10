import React from "react";
import {
  FrontEndDevelopment,
  BackEndWebDevelopment,
  MobileDevelopment,
  Cloud_Infra_Architecture,
} from "../utility/FullStackImg";
import Slide from "react-reveal/Slide";



function Skills() {


  return (
    <div className=" p-8">
      <h1 className="text-5xl  grid grid-rows-3 justify-center ">
        What I Do?
      </h1>

      <div className="h-screen w-screen grid grid-cols-2 md:grid-row-2 container mx-auto">
        <Slide left>
          <div>
            <FrontEndDevelopment />
          </div>
        </Slide>

        <Slide right>
          <div>
            <h1 className="text-4xl mb-4">Front END Dev</h1>
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

      <div className="h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-10">
          <Slide left>
            <div>
  
              <BackEndWebDevelopment />
            </div>
          </Slide>
        </div>
        <Slide right>
          <div>
            <h1 className="text-4xl mb-4 order-1">Back END Dev</h1>
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

      <div className="h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <Slide left>
          <div>
            <MobileDevelopment />
          </div>
        </Slide>

        <Slide right>
          <div>
            <h1 className="text-4xl mb-4">Mobile Dev</h1>
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

      <div className="h-screen w-screen grid grid-cols-2 md:grid-rows-2  container mx-auto">
        <div className="order-2 ml-10">
          <Slide left>
            <div>
              <Cloud_Infra_Architecture />
            </div>
          </Slide>
        </div>

        <Slide right>
          <div>
            <h1 className="text-4xl mb-4 order-1">Cloud_Infra & Deploynemt</h1>
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
