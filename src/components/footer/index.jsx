import React from "react";
import FooterForm from "./footer_form";
import FooterTop from "./footer_top";
import FooterCenter from "./footer_center";
import FooterBottom from "./footer_bottom";

const Footer = () => {
  return (
    <div>
      <FooterForm />
      <div className="bg-[#1F1F1F]">
        <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0 text-white">
          <FooterTop />
          <FooterCenter />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;
