import React from 'react';
import TopHeader from './top_header';
import CenterHeader from './center_header';
import BottomHeader from './bottom_header';

const Header = () => {
    return (
        <div>
            <TopHeader />
            <CenterHeader />
            <BottomHeader />
        </div>
    );
};

export default Header;