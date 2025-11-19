import React from "react";
import Filter from "../filter";
import { items } from "../../api";
import Card from '../card';

const Promotional = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-[16px] xl:px-0 mt-[30px]">
      <h2 className="text-[26px] font-semibold">Акционные модели</h2>
      <Filter />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              article={item.article}
              name={item.name}
              size={item.size}
              room={item.room}
              person={item.perso}
              support={item.support}
              old_price={item.old_price}
              price={item.price}
              sell_of={item.sell_of}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Promotional;
