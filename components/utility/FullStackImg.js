import React from "react";
import Image from "next/image";

const image = (title, name) => {
  return (
    <div>
      <Image width="50" height="50" src={`/../public/assets/${name}`} />
      <p className="font-bold ">{title}</p>
    </div>
  );
};

export function FrontEndDevelopment() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3  ">

      {image("javascript", "icons8-javascript-96.png")}
      {image("nextJS", "icons8-next.js-96.png")}
      {image("reactJS", "icons8-react-100.png")}
      {image("redux", "icons8-redux-96.png")}
      {image("tailwind", "tailwind.png")}
      {image("bootstrap", "icons8-bootstrap-96.png")}
      {image("material-ui", "icons8-material-ui-96.png")}
      {image("css3", "icons8-css3-96.png")}
      {image("html-5", "icons8-html-5-96.png")}

    </div>
  );
}

export function BackEndWebDevelopment() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3  ">

      {image("rest-api", "icons8-rest-api-48.png")}
      {image("node-js", "icons8-node-js-96.png")}
      {image("mongodb", "icons8-mongodb-96.png")}
      {image("express", "icons8-express-js-96.png")}
      {image("redis", "icons8-redis-96.png")}
      {image("graphql", "icons8-graphql-96.png")}
      {image("jest", "jest-logo-png-transparent.png")}
      {image("java", "icons8-java-96.png")}

    </div>
  );
}

export function MobileDevelopment() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3  ">

      {image("react-native", "icons8-react-native-96.png")}
      {image("tailwind", "tailwind.png")}
      {image("bootstrap", "icons8-bootstrap-96.png")}
      {image("material-ui", "icons8-material-ui-96.png")}
      
    </div>
  );
}

export function Cloud_Infra_Architecture() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3  ">

      {image("amazon", "icons8-amazon-web-services-96.png")}
      {image("docker", "icons8-docker-96.png")}
      {image("webpack", "icons8-webpack-64.png")}
      {image("firebase", "icons8-firebase-96.png")}
      {image("git", "icons8-git-96.png")}
      {image("react-native", "icons8-react-native-96.png")}

    </div>
  );
}
