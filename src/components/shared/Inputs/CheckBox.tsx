import React from 'react'

interface CheckBoxProps {
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
    id?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onChange, className, id, name }) => {
    return (
        <div className="flex h-6 items-center">
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 ${className}`}
            />
        </div>
    );
};


export default CheckBox