import React, { FC, useEffect, useState } from 'react';
import { InputType } from '../../../types';

interface InputProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
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

    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (isRequired && !value) {
            setError('Field required');
        } else {
            setError('');
        }
    }, [isRequired, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setError('');
    };


    return (
        <div className="w-full px-2 md:px-4 lg:px-6 mt-2">
            <div className="flex justify-between">
                {labelText && (
                    <label htmlFor={labelFor} className={`block text-sm sm:text-base font-medium leading-6 text-black ${labelClass}`}>
                        {labelText}
                        {isRequired && <span className="text-red-500">*</span>}
                    </label>
                )}
                {error && <label htmlFor={labelFor} className={`block text-sm sm:text-base font-medium leading-6 text-red-500 ${labelClass}`}>{error}</label>}
            </div>
            <div className="mt-2">
                <input
                    type={type}
                    id={id ? String(id) : undefined}
                    name={name}
                    value={value}
                    onChange={(e) => handleInputChange(e)}
                    required={isRequired}
                    placeholder={placeholder}
                    className={`w-full p-0 py-1 sm:p-2 px-1 md:px-1 lg:px-2 rounded-md sm:rounded-lg border-2 border-gray-500 focus:outline-gray-950 ${inputClass}`}
                />
            </div>
        </div>
    );
};

export default InputField;
