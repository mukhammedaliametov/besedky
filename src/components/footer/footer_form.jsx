import React from "react";
import Button from "../button";

const FooterForm = () => {
  return (
    <div className="bg-primary-white h-[120px] flex items-center">
      <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0 flex flex-col lg:flex-row items-center justify-between w-full">
        <p className="text-[19px] font-semibold text-center md:text-left">
          Хотите быть в курсе выгодных предложений, акций и новинок?
        </p>
        <form className="flex flex-col md:flex-row item-center gap-[10px] py-[20px] w-full md:w-auto">
          <input
            type="text"
            className="bg-white border border-[#E8E8E8] outline-none px-[10px] py-[10px] rounded-[5px]"
            placeholder="Имя"
          />
          <input
            type="email"
            className="bg-white border border-[#E8E8E8] outline-none px-[10px] py-[10px] rounded-[5px]"
            placeholder="Email"
          />
          <Button name="Подписаться" />
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
