import React from 'react';

const Button = (props) => {
    return (
                    <button className="text-[14px] sm:text-[16px] bg-dark-orange py-[10px] px-[25px] text-white rounded-[6px] cursor-pointer hover:opacity-90">{props.name}</button>

    );
};

export default Button;