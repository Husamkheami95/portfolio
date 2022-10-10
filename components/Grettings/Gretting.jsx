import React from "react";
import { Fade } from "react-reveal";
import Bounce from "react-reveal/Bounce";


function Gretting() {
  return (
    <>
    <Fade bottom duration={500} distance="20px">
    <div className="container  p-8  mt-20">
          <header className="mb-16 group ">
          <h1 className="mb-1 font-mono text-4xl  md:text-4xl">
            Hi, I'm <br className="block md:hidden" />
            <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
              Hussam 🤝
            </span>
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>
          <div className="text-xl font-semibold md:text-2xl">
            developer by choice and designer for fun
          </div>
        </header>
      
      <h1 className="grid md:grid-rows-6">
          <Bounce right cascade>
            <p>
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
          </Bounce>
        </h1>
    </div>
     </Fade>
    </>
  
     
  );
}

export default Gretting;
