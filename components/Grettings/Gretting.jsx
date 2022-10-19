import React from "react";
import { Fade } from "react-reveal";
import Bounce from "react-reveal/Bounce";
import { useTranslation } from "next-i18next";

function Gretting() {
  const { t } = useTranslation("");

  return (
    <>
      <Fade bottom duration={500} distance="20px">
        <div className="container  p-8  mt-20">
          <header className="mb-16 group ">
            <h1 className="mb-1 font-mono text-2xl  md:text-5xl">
              {t("home.gretting")} <br className="block md:hidden" />
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                {t("home.myfname")} 🤝
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
            </h1>
            <div className="text-xl font-semibold md:text-2xl">
            {t("home.fullstack")} 
            </div>
          </header>

          <div className="grid md:grid-rows-6">
            <Bounce left cascade>
              <div>
              <p className="text-xl">{t("home.descreibe")}</p>
              </div>
              
            </Bounce>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Gretting;
