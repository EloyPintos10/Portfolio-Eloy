import React from "react";
import "../css/practicas.css";
import restaurant from "../assets/restaurant-rolling.png";
import banco from "../assets/rolling-bank.png";
import rollingplus from "../assets/rolling+.png";
import vikingo from "../assets/vikingo.png"
import clima from "../assets/api-clima.png"
import AOS from "aos";
const Practicas = () => {

  AOS.init();
  return (
    <div id="section-practicas">
      <div className="div-practicas">
        <p className="text-practicas"  data-aos="fade-up-right" data-aos-duration="2000" data-aos-offset="0" >
          Mis <br /> practicas
        </p>
        <div id="global"  data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="0">
          <div className="contain-img container">
            <div className="d-flex justify-content-end">
              <a href="https://vikingo-cerveceria.netlify.app/" target="_blank" ><img src={vikingo} alt="" className="img-practicas" /></a>
              
            </div>
            <div className="d-flex justify-content-end">
              <a href="https://clima-eloy-api.netlify.app/" target="_blank" ><img src={clima} alt="" className="img-practicas" /></a>
              
            </div>
            <div className="text-center">
              <a href="https://rollingbankep.netlify.app/" target="_blank"> <img src={banco} alt="" className="img-practicas" /></a>
             
            </div>
            <div className="text-start">
              <a href="https://rollingplusg1.netlify.app/" target="_blank" ><img src={rollingplus} alt="" className="img-practicas" /></a>
              
            </div>
            <div className="text-center">
              <a href="https://dainty-salamander-578a90.netlify.app/" target="_blank">  <img src={restaurant} alt="" className="img-practicas" /></a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practicas;
