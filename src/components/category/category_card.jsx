import React from "react";

const CategoryCard = ({ title, items, image, big }) => {
  return (
    <div
      className={`bg-[#FFF9E9] rounded-xl p-6 flex justify-between items-start shadow-sm ${
        big ? "h-full" : ""
      }`}
    >
      <div>
        <h2 className="text-[20px] font-semibold mb-3">{title}</h2>
        <ul className="space-y-1 text-[15px] text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <img
        src={image}
        alt={title}
        className={`${big ? "w-[260px]" : "w-[140px]"} object-contain`}
      />
    </div>
  );
};

export default CategoryCard;
