import React from "react";
import heroImg from "../../assets/hero.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import heroIcon1 from "../../assets/hero_icon1.svg";
import heroIcon2 from "../../assets/hero_icon2.svg";
import heroIcon3 from "../../assets/hero_icon3.svg";
import heroIcon4 from "../../assets/hero_icon4.svg";
import heroIcon5 from "../../assets/hero_icon5.svg";

const Hero = () => {
  const heroItems = [
    {
      icon: heroIcon1,
      name: "Изготовливаем конст дизайн-проекту",
    },
    {
      icon: heroIcon2,
      name: "Изготовили более 2 400 деревянных конструкций",
    },
    {
      icon: heroIcon3,
      name: "Собственное производство 6 000 м2",
    },
    {
      icon: heroIcon4,
      name: "Производим изделия из дерева с 1998 года",
    },
    {
      icon: heroIcon5,
      name: "Гарантия от 3х лет на все конструкции",
    },
  ];
  return (
    <div className="max-w-[1320px] mx-auto mt-[3px] pb-[120px]">
      <div className="relative">
        <img src={heroImg} alt="heroImg" className="hidden md:block" />
        <div className="block bg-[#6E9425] md:hidden h-[300px] flex items-center px-[40px]">
          <p className="text-[32px]/[37px] text-white font-[600]">
            Беседки по ключ за 7 дней
          </p>
        </div>
        <div className="absolute hidden md:flex items-center w-full justify-between top-[50%]">
          <span className="bg-[#AFAFAF40] p-[10px] text-white rounded-full ml-[10px] cursor-pointer">
            <FaAngleLeft />
          </span>
          <span className="bg-[#AFAFAF40] p-[10px] text-white rounded-full mr-[10px] cursor-pointer">
            <FaAngleRight />
          </span>
        </div>
        <div className="absolute flex md:hidden items-center w-full justify-between top-[50%] text-[25px] text-white">
          <BsChevronCompactLeft />
          <BsChevronCompactRight />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] px-[16px] xl:px-0 pt-[25px]">
        {heroItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-[13px] gap-[10px]"
          >
            <img src={item.icon} className="w-[60px]" alt="icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
