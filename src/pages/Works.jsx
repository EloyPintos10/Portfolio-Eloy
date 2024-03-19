import React from "react";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";

import AOS from "aos"
import "../css/work.css";


const Works = () => {

  AOS.init();

  return (
    <div id="section-work">
      <div className="div-work text-light">
        <div className="presentacion"  data-aos="fade-up-right" data-aos-duration="2000" data-aos-offset="0">
          <p className="text-work">
            Mi <br /> trabajo
          </p>
          <p className="text-work2">
            Realice trabajos de diseños y desarrollo utilizando distintas
            herramientas, para conseguir un estilo único y llamativo para el
            cliente y usuario. Desarrolle aplicaciones web como asi tambien
            mobile utilizando React js y React Native respectivamente.
            Implementé maquetados web responsive con Html, Css, Javascript.{" "}
          </p>
        </div>
        <div className="mt-5 skills">
          <p className="text-skill">SKILLS</p>

          <div className="div-skills" data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="0">
            <div className="contain-skill">
              <TiHtml5 className="icon-skill" />
              <span>HTML 5</span>
            </div>
            <div className="contain-skill">
              <SiCsswizardry className="icon-skill" />
              <span>Css</span>
            </div>
            <div className="contain-skill">
              <IoLogoJavascript className="icon-skill" />             
              <span>Javascript</span>
            </div>
            <div className="contain-skill">
              <FaReact className="icon-skill" />
              <span>React JS</span>
            </div>
            <div className="contain-skill">
              <SiVite className="icon-skill" />
              <span>Vite</span>
            </div>
            <div className="contain-skill">
                <FaNode className="icon-skill" />
                <span>Node JS</span>
              </div>
            </div>
            <div className="div-skills" data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="0">
              <div className="contain-skill">
                <SiExpo className="icon-skill" />
                <span>Expo</span>
              </div>
              <div className="contain-skill">
                <FaGitSquare className="icon-skill" />
                <span>Git</span>
              </div>
              <div className="contain-skill">
                <FaGithub className="icon-skill" />
                <span>GitHub</span>
              </div>
              <div className="contain-skill">
                <FaNpm className="icon-skill" />
                <span>Npm</span>
              </div>
              <div className="contain-skill">
                <FaBootstrap className="icon-skill" />
                <span>Bootstrap</span>
              </div>
              <div className="contain-skill">
                <SiMui className="icon-skill" />
                <span>Material UI</span>
              </div>
             
            </div>

            <div className="div-skills" data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="0">
              <div className="contain-skill">
                <SiExpress className="icon-skill" />
                <span>Express JS</span>
              </div>
              <div className="contain-skill">
                <SiJsonwebtokens className="icon-skill" />
                <span>JWT</span>
              </div>
              <div className="contain-skill">
                <SiMongodb className="icon-skill" />
                <span>Mongo DB</span>
              </div>
              <div className="contain-skill">
                <SiVercel className="icon-skill" />
                <span>Vercel</span>
              </div>
              <div className="contain-skill">
                <FaFigma className="icon-skill" />
                <span>Figma</span>
              </div>
              <div className="contain-skill">
                <SiNetlify className="icon-skill" />
                <span>Netlify</span>
              </div>
            </div>
          
        </div>
      </div>     
    </div>
  );
};

export default Works;
