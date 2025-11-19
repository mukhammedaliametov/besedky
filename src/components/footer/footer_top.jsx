import React from 'react';
import logo from '../../assets/footer_logo.svg';
import Button from '../button';

const FooterTop = () => {
    return (
        <div className='flex items-center justify-center md:justify-between py-[20px]'>
            <div className='flex items-center gap-[60px]'>
                <img src={logo} alt="logo" />
                <div className='hidden lg:block'>
                    <p>Наш адрес: <br /> Москва, ул. Новокосимская д.7</p>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-[60px]'>
                <p>График работы: <br /> Ежедневно с <span className='text-dark-orange'>9:00</span> до <span className='text-dark-orange'>21:00</span></p>
                <Button name='Заказать звонок' />
            </div>
        </div>
    );
};

export default FooterTop;