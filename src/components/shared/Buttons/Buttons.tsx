import React from 'react';
import { ButtonTypes, iconPlaceTypes } from './types';
import { Themes } from '../../../constants/thems';

interface ButtonProps {
    type?: ButtonTypes;
    placeholder?: string;
    icon?: any;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconPlace?: iconPlaceTypes;
    className?: string;
    theme?: keyof typeof Themes; 
}

const Buttons: React.FC<ButtonProps> = ({ onClick, type, placeholder, icon, iconPlace = 'left', className, theme = 'primary' }) => {
    const selectedTheme = Themes[theme];

    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={`w-full flex ${iconPlace === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-center items-center p-2 border-2 mt-2 rounded-lg ${selectedTheme.color} ${selectedTheme.hoverColor} ${className}`}
            >
                <span className={`${iconPlace === 'left' ? 'pr-3' : 'pl-3'}`}>{icon}</span>
                {placeholder}
            </button>
        </div>
    );
};

export default Buttons;