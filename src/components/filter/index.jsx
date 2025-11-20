import React from 'react';

const Filter = () => {
    return (
        <div className='flex items-center bg-[#F9F8F3] mt-3 mb-[25px] overflow-x-scroll lg:overflow-visible'>
            <p className='w-[160px] h-[60px] items-center flex justify-center bg-white text-center border-b-2 border-dark-orange flex-shrink-0'>Беседки</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer flex-shrink-0'>Бани</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer flex-shrink-0'>Площадки</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer flex-shrink-0'>Дома</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer flex-shrink-0'>Перголы</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer flex-shrink-0'>Бренды</p>
        </div>
    );
};

export default Filter;