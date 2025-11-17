import React from 'react';
import { GrMenu } from "react-icons/gr";

const BottomHeader = () => {
    return (
        <div className='border border-[#E8E8E8] bg-white flex items-center'>
            <ul className='max-w-[1320px] mx-auto overflow-x-scroll xl:overflow-x-visible flex items-center gap-[30px] justify-between w-full'>
                <li className='flex items-center gap-[10px] bg-primary-orange h-[40px] px-[30px] cursor-pointer flex-shrink-0'><GrMenu className='text-white text-[22px]' /> Каталог товаров</li>
                <li className='cursor-pointer flex-shrink-0'>О компании</li>
                <li className='cursor-pointer flex-shrink-0'>Отзывы</li>
                <li className='cursor-pointer flex-shrink-0'>Наши работы</li>
                <li className='cursor-pointer flex-shrink-0'>Доставка</li>
                <li className='pr-[30px] cursor-pointer flex-shrink-0'>Контакты</li>
            </ul>
        </div>
    );
};

export default BottomHeader;