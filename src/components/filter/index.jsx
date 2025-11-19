import React from 'react';

const Filter = () => {
    return (
        <div className='flex items-center bg-[#F9F8F3] mt-3 mb-[25px]'>
            <p className='w-[160px] h-[60px] items-center flex justify-center bg-white text-center border-b-2 border-dark-orange'>Беседки</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer'>Бани</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer'>Площадки</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer'>Дома</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer'>Перголы</p>
            <p className='w-[160px] text-center opacity-80 cursor-pointer'>Бренды</p>
        </div>
    );
};

export default Filter;