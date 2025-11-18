import React from "react";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterCenter = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between border-y border-[#BBBBBB] py-[20px] text-[14px]">
      <div className="flex items-start gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <p className="font-[600]">Для покупателей:</p>
          <a href="#" className="opacity-75">Доставка</a>
          <a href="#" className="opacity-75">Гарантия</a>
          <a href="#" className="opacity-75">Политика конфиденциальности</a>
          <a href="#" className="opacity-75">Отзывы</a>
          <a href="#" className="opacity-75">Наши работы</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-[600]">О компании:</p>
          <a href="#" className="opacity-75">О Нас</a>
          <a href="#" className="opacity-75">Доставка и оплата</a>
          <a href="#" className="opacity-75">Наши работы</a>
          <a href="#" className="opacity-75">Контакты</a>
          <a href="#" className="opacity-75">Гарантия</a>
        </div>
        <div className="hidden sm:flex lg:hidden xl:flex flex-col gap-[10px]">
          <p className="font-[600]">Категории:</p>
          <a href="#" className="opacity-75">Беседки</a>
          <a href="#" className="opacity-75">Бани</a>
          <a href="#" className="opacity-75">Площадки</a>
          <a href="#" className="opacity-75">Дома</a>
          <a href="#" className="opacity-75">Перголы</a>
          <a href="#" className="opacity-75">Бренды</a>
        </div>
      </div>
      <div className="flex items-start gap-[30px] border-t mt-[20px] pt-[20px] lg:mt-0 lg:pt-0 border-[#333333] lg:border-none">
        <div className="flex flex-col gap-[10px]">
          <p>
            Для регионов
            <br />
            (звонок бесплатный)
          </p>
          <a href="tel: 8 (800) 800-00-00" className="text-[18px]">
            8 (800) <span className="text-dark-orange">800-00-00</span>
          </a>
          <a href="mailto: youremail@mailbox.ru">Email: youremail@mailbox.ru</a>
          <p>Мы в соц.сетях:</p>
          <div className="flex items-center gap-[10px]">
            <a href="#" className="text-[16px] p-[8px] border border-[#BBBBBB] text-[#BBBBBB] hover:text-dark-orange hover:border-dark-orange rounded-full">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-[16px] p-[8px] border border-[#BBBBBB] text-[#BBBBBB] hover:text-dark-orange hover:border-dark-orange rounded-full">
              <FaYoutube />
            </a>
            <a href="#" className="text-[16px] p-[8px] border border-[#BBBBBB] text-[#BBBBBB] hover:text-dark-orange hover:border-dark-orange rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>
            Для Москвы
            <br />и Московской области
          </p>
          <a href="tel: 8 (495) 700-00-00" className="text-[18px]">
            8 (495) <span className="text-dark-orange">700-00-00</span>
          </a>
          <p>Сообщить об ошибке на сайте</p>
          <p>
            ООО "Фаза Групп" <br />
            ИНН: 7751140879 <br />
            ОГРН: 1187746273461
          </p>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default FooterCenter;
