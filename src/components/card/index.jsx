import React from "react";
import { IoMdResize } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Card = (props) => {
  return (
    <div>
      <div className="border border-[#E8E8E8] p-[10px]">
        <img src={props.img} alt="card_image" className="w-full" />
        <div className="text-[12px] flex justify-between mt-[10px] mb-[6px] opacity-75">
          <p>Артикул:</p>
          <p>{props.article}</p>
        </div>
        <p className="text-[18px] font-[400]">{props.name}</p>
        <div className="my-[8px] text-[13px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-[4px]">
              <IoMdResize className="text-dark-orange" />
              Размеры:
            </p>
            <p>{props.size}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-[4px]">
              <IoMdResize className="text-dark-orange" />
              Площадь:
            </p>
            <p>{props.room}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-[4px]">
              <FaUser className="text-dark-orange" />
              Вместимость:
            </p>
            <p>{props.person}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-[4px]">
              <FaCheckCircle className="text-dark-orange" />
              Гарантия:
            </p>
            <p>{props.support}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start w-full md:w-auto gap-[10px] md:gap-0 md:items-center justify-between">
          <div>
            <p className="flex items-center gap-[5px] text-[12px] text-[#BBBBBB]">
              <span className="line-through">{props.old_price}</span>{" "}
              <span className="bg-primary-yellow text-[#2B150D] py-[2px] px-[6px] rounded-[2px] font-[400]">
                {props.sell_of}
              </span>
            </p>
            <p className="text-[#FF3838] text-[18px] font-[600] pt-[3px]">
              {props.price}
            </p>
          </div>
          <button className="px-[22px] py-[8px] w-full md:w-auto rounded-[5px] bg-primary-yellow cursor-pointer hover:opacity-80">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
