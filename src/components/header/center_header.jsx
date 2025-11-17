import React from "react";
import logo from "../../assets/logo.svg";
import { FaCheck } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const CenterHeader = () => {
  return (
    <div className="bg-primary-white h-[80px] sm:h-[130px] flex items-center">
      <div className="max-w-[1300px] mx-auto px-[16px] xl:px-0 w-full flex items-center justify-between">
        <a href="/" className="w-[150px] lg:w-[200px]">
          <img src={logo} alt="logo" />
        </a>
        <div className="hidden lg:flex flex-col gap-[10px]">
          <div className="flex items-center gap-[13px] text-[13px]">
            <span className="flex items-center gap-[3px]">
              <FaCheck className="text-primary-orange" /> Лучшие цены
            </span>
            <span className="flex items-center gap-[3px]">
              <FaCheck className="text-primary-orange" /> Бесплатная доставка
            </span>
            <span className="flex items-center gap-[3px]">
              <FaCheck className="text-primary-orange" /> Гарантия от 3х лет
            </span>
            <span className="flex items-center gap-[3px]">
              <FaCheck className="text-primary-orange" /> Более 1 000 товаров
            </span>
          </div>
          <div className="flex items-center justify-between border border-[#E8E8E8] overflow-hidden bg-white rounded-[6px] pl-[15px]">
            <input
              type="text"
              className="w-full outline-0"
              placeholder="Поиск по каталогу..."
            />
            <button className="bg-primary-orange text-black px-[30px] py-[10px] hover:opacity-90 cursor-pointer font-[500]">
              Найти
            </button>
          </div>
        </div>
        <div className="flex items-start gap-[20px]">
          <div className="hidden md:flex lg:hidden xl:flex flex-col gap-[6px] text-center">
            <span className="text-[13px] flex items-center gap-[5px]">
              <CiClock2 className="text-primary-orange text-[15px]" /> Ежедневно с 9:00 до 21:00
            </span>
            <a href="tel: 8 (800) 800-00-00">8 (800) <b className="font-[600]">800-00-00</b></a>
            <a href="tel: 8 (495) 700-00-00">8 (495) <b className="font-[600]">700-00-00</b></a>
          </div>
          <div className="flex flex-col gap-[10px] text-center">
            <a href="mailto: youremail@mailbox.ru" className="hidden sm:flex text-[13px] flex items-center gap-[5px]">
              <MdEmail className="text-primary-orange" /> youremail@mailbox.ru
            </a>
            <button className="text-[14px] sm:text-[16px] bg-dark-orange py-[10px] px-[25px] text-white rounded-[6px] cursor-pointer hover:opacity-90">Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterHeader;
