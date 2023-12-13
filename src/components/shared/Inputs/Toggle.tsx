import React, { useState } from 'react';

interface ToggleProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleButton: React.FC<ToggleProps> = ({ isChecked, setIsChecked }) => {

    const handleToggle = () => {
        setIsChecked((prevState) => !prevState);
    };

    return (
        <div className="flex h-6 items-center px-2 md:px-4 lg:px-6 mt-4">
            <button
                type="button"
                className={`bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isChecked ? 'bg-indigo-600' : ''
                    }`}
                role="switch"
                aria-checked={isChecked}
                onClick={handleToggle}
                aria-labelledby="switch-1-label"
            >
                <span className="sr-only">Agree to policies</span>
                <span
                    aria-hidden="true"
                    className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${isChecked ? 'translate-x-[87%]' : 'translate-x-0'
                        }`}

                ></span>
            </button>
        </div>
    );
};

export default ToggleButton;
