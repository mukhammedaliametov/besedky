import React from "react";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";
import category5 from "../../assets/category5.png";
import category6 from "../../assets/category6.png";

const Category = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0">
      <h2 className="text-[26px] font-semibold">Категории</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px] pt-[10px] pb-[30px]">
        <div className="bg-[#FFF7D9] p-[20px] rounded-[6px] row-span-3 flex flex-col justify-between">
          <div>
            <h3 className="text-[20px] font-[600]">Беседки</h3>
          <div className="grid grid-cols-2 pt-[40x]">
            <p className="py-[4px] text-[14px]">Подкатегория 1</p>
            <p className="py-[4px] text-[14px]">Подкатегория 2</p>
            <p className="py-[4px] text-[14px]">Подкатегория 3</p>
            <p className="py-[4px] text-[14px]">Подкатегория 4</p>
            <p className="py-[4px] text-[14px]">Подкатегория 5</p>
            <p className="py-[4px] text-[14px]">Подкатегория 6</p>
          </div>
          </div>
          <img src={category1} alt="category" />
        </div>
        <div className="flex items-start justify-between bg-[#FFF7D9] p-[20px] rounded-[6px] row-span-1">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-[600]">Бани</h3>
            <p className="text-[14px]">Подкатегория 1</p>
            <p className="text-[14px]">Подкатегория 2</p>
            <p className="text-[14px]">...</p>
          </div>
          <img src={category2} alt="" />
        </div>
        <div className="row-span-3 flex flex-col justify-between gap-[20px]">
          <div className="flex items-start justify-between bg-[#FFF7D9] p-[20px] rounded-[6px] h-full">
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[19px] font-[600]">Детские площадки</h3>
              <p className="text-[14px]">Подкатегория 1</p>
              <p className="text-[14px]">Подкатегория 2</p>
              <p className="text-[14px]">Подкатегория 3</p>
              <p className="text-[14px]">Подкатегория 4</p>
              <p className="text-[14px]">Подкатегория 5</p>
            </div>
            <img src={category5} alt="" />
          </div>
          <div className="flex items-start justify-between bg-[#FFF7D9] p-[20px] rounded-[6px] h-full">
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[20px] font-[600]">Дома</h3>
              <p className="text-[14px]">Подкатегория 1</p>
              <p className="text-[14px]">Подкатегория 2</p>
              <p className="text-[14px]">Подкатегория 3</p>
              <p className="text-[14px]">Подкатегория 4</p>
              <p className="text-[14px]">Подкатегория 5</p>
            </div>
            <img src={category6} alt="" />
          </div>
        </div>
        <div className="flex items-start justify-between bg-[#FFF7D9] p-[20px] rounded-[6px] row-span-1">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-[600]">Перголы</h3>
            <p className="text-[14px]">Подкатегория 1</p>
            <p className="text-[14px]">Подкатегория 2</p>
            <p className="text-[14px]">...</p>
          </div>
          <img src={category3} alt="" />
        </div>
        <div className="flex items-start justify-between bg-[#FFF7D9] p-[20px] rounded-[6px] row-span-1">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-[600]">Бренды</h3>
            <p className="text-[14px]">Подкатегория 1</p>
            <p className="text-[14px]">Подкатегория 2</p>
            <p className="text-[14px]">...</p>
          </div>
          <img src={category4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
