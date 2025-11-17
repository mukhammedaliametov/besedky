import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const TopHeader = () => {
    return (
        <div className='bg-primary-black text-white h-[40px] flex items-center text-[13px]'>
            <div className='max-w-[1320px] mx-auto px-[16px] xl:px-0  flex justify-between items-center w-full'>
                <div className='flex items-center gap-[40px]'>
                    <p className='hidden lg:flex items-center gap-[6px]'><FaLocationDot className='text-primary-orange' /> <b className='font-[600]'>Ваш город:</b> Константинополь</p>
                    <p className='flex items-center gap-[6px]'><FaLocationDot className='text-primary-orange' /> <b className='font-[600]'>Наш офис: </b> Москва, ул. Новокосимская д.7</p>
                </div>
                <div className='hidden md:flex items-center gap-[30px]'>
                    <a href="#">Статьи</a>
                    <a href="#">Оплата</a>
                    <a href="#">Гарантия</a>
                    <a href="#">Дилерам</a>
                    <a href="#">Вакансии</a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;