import React from "react";
import visa from '../../assets/visa.svg';
import jcb from '../../assets/jcb.svg';
import mastero from '../../assets/mastero.svg';
import mastercard from '../../assets/mastercard.svg';

const FooterBottom = () => {
  return (
    <div className="flex items-center justify-between py-[20px] text-[14px]">
      <p className="opacity-75">
        Публичная оферта <br />
        2013-2021 - Товары для дач, <br />
        деревянные конструкции под любые нужды
      </p>
      <div className="hidden md:flex items-center gap-[40px] opacity-75">
        <p className="pr-[40px]">Принимаем к оплате:</p>
        <img src={visa} alt="visa_card" />
        <img src={jcb} alt="jcb_card" />
        <img src={mastero} alt="mastero_card" />
        <img src={mastercard} alt="master_card" />
      </div>
    </div>
  );
};

export default FooterBottom;
