import React, { ChangeEvent } from 'react';

interface TextareaProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  placeholder?: string;
  labelClass?: string;
  rows: number;
}

const Textarea: React.FC<TextareaProps> = ({ value, setValue, label, placeholder, labelClass, rows }) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='w-full px-2 md:px-4 lg:px-6 mt-2'>
      {label && <label className={`block text-sm sm:text-base font-medium leading-6 text-black ${labelClass}`}>{label}</label>}
      <div className="mt-2">
        <textarea
          name="message"
          placeholder={placeholder}
          id="message"
          rows={rows}
          value={value}
          onChange={handleInputChange}
          className="block w-full p-0 py-1 sm:p-2 px-1 md:px-1 lg:px-2 rounded-lg border-2 border-gray-500 focus:outline-gray-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-base"
        />
      </div>
    </div >
  );
};

export default Textarea;
