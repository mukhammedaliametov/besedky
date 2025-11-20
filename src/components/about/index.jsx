import React from "react";
import paraIcon from '../../assets/para_icon.svg';
import aboutImg from '../../assets/about_img.png';

const About = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0 mt-[30px] flex flex-col-reverse md:flex-row items-center justify-between gap-[30px] md:gap-[60px]">
      <div>
        <h2 className="text-[26px] font-semibold border-b-3 border-[#FF7A1B] pb-[10px]">
          Немного о нас
        </h2>
        <p className="text-[14px] w-full md:w-[650px] mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec
          senectus duis nibh. In faucibus adipiscing tellus enim, consequat
          integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis
          est.{" "}
        </p>
        <div className="flex items-start mt-[15px] gap-[15px]">
          <img src={paraIcon} className="w-[20px] md:w-[30px]" alt="icon" />
          <div>
            <p className="font-[600] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.{" "}
            </p>
            <span className="text-[14px] opacity-60 mt-[15px]">Никита Данилов, Руководитель компании</span>
          </div>
        </div>
      </div>
      <div className="shadow-sm shadow-[#0000001A] pl-[12px] pb-[12px] rouded-[6px]"> 
        <img src={aboutImg} className="w-auto sm:w-[500px] md:w-[2220px] rounded-[6px]" alt="about_img" />
      </div>
    </div>
  );
};

export default About;
