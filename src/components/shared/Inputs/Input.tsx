import React, { FC } from 'react';

type InputType = 'text' | 'password' | 'email' | 'number';

interface InputProps {
    setValue: (value: string) => void;
    value: string | number;
    labelText?: string;
    labelFor?: string;
    id?: string | number;
    name?: string;
    type: InputType;
    isRequired: boolean;
    placeholder: string;
    inputClass?: string;
    labelClass?: string;
}

const InputField: FC<InputProps> = ({
    setValue,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired,
    placeholder,
    inputClass,
    labelClass
}) => {
    
    return (
        <div className="w-full px-2 md:px-4 lg:px-6 mt-2">
            {labelText && <label htmlFor={labelFor} className={`block text-sm sm:text-base font-medium leading-6 text-black ${labelClass}`}>{labelText}</label>}
            <div className="mt-1">
                <input
                    type={type}
                    id={id ? String(id) : undefined}
                    name={name}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required={isRequired}
                    placeholder={placeholder}
                    className={`w-full p-0 sm:p-2 px-1 md:px-1 lg:px-2 rounded-sm sm:rounded-md border-2 border-gray-500 focus:outline-gray-950 ${inputClass}`}
                />
            </div>
        </div>
    );
};

export default InputField;
