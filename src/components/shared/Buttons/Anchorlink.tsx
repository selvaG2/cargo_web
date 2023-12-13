import React from 'react';
import { iconPlaceTypes } from './types';
import { Link } from 'react-router-dom';
import { Themes } from '../../../constants/thems';

interface LinkProps {
    theme?: keyof typeof Themes;
    href: string;
    className?: string;
    placeholder: string;
    icon?: any;
    iconPlace?: iconPlaceTypes;
}

const Anchorlink: React.FC<LinkProps> = ({ theme = 'primary', href, placeholder, icon, iconPlace = 'left', className }) => {

    const selectedTheme = Themes[theme];

    return (
        <div>
            <Link
                to={href}
                className={`w-full flex ${iconPlace === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-center items-center p-2 mt-2 ${selectedTheme.color} ${selectedTheme.hoverColor} ${className} `}
            >
                {icon} {placeholder}
            </Link>
        </div>
    );
};

export default Anchorlink;
