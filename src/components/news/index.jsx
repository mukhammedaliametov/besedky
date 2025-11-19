import React from "react";
import { news } from "../../news";
import { FaAngleRight } from "react-icons/fa6";

const News = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0 mt-[30px]">
      <h2 className="text-[26px] font-semibold">Акционные модели</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] my-[30px]">
            {news.map((item, index) => {
                return(
                    <div key={index}>
                        <img src='https://picsum.photos/480/228' alt="image" className="rounded-[8px]" />
                        <p className="text-[20px] mt-[10px] mb-[-5px] text-dark-orange font-[600]">{item.title}</p>
                        <span className="text-[#BBBBBB] text-[12px]">{item.date}</span>
                        <p className="text-[14px] my-[10px]">{item.desc}</p>
                        <button className="flex items-center mt-[20px] text-dark-orange text-[14px] cursor-pointer">Читать далее <FaAngleRight /></button>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default News;
