import React, { useState } from 'react'
import InputField from '../shared/Inputs/Input'
import ImageInput from '../shared/Inputs/ImageInput';
import CheckBox from '../shared/Inputs/CheckBox';
import RadioButton from '../shared/Inputs/RadioButton';
import DataInput from '../shared/Inputs/DateInput';
import Datepicker from 'react-tailwindcss-datepicker';
import DateInput from '../shared/Inputs/DateInput';
import Buttons from '../shared/Buttons/Buttons';
import Anchorlink from '../shared/Buttons/Anchorlink';

const ContactForm = () => {
    const [username, setUsername] = useState<string>("");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isRadio, setIsRadio] = useState<boolean>(false);

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date(new Date())
    });

    const handleValueChange = (newValue: any) => {
        setDateValue(newValue);
    };


    const icon = (
        <svg className="gx nj rl axp w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
    )

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const obj = {
            userName: username,
            isChecked,
            isRadio
        }
        console.log(obj);

    }

    return (
        <form>
            <InputField
                isRequired={true}
                placeholder='Enter your username'
                type='text'
                value={username}
                setValue={setUsername}
                labelText='User name'
            />

            <CheckBox isChecked={isChecked} placeholder='Terms and conditions' setIsChecked={setIsChecked} />

            <RadioButton checked={isRadio} label='Male' setIsChecked={setIsRadio} />

            <ImageInput onFileChange={handleFileChange} key={1} label='Profile' selectedFile={selectedFile} />

            <DateInput dateValue={dateValue} setDateValue={handleValueChange} />
            
            <Buttons placeholder='Submit' icon={icon} iconPlace='right' onClick={(e) => handleSubmit(e)} />

            <Anchorlink href='/' placeholder='test' theme='indigo' />


        </form>
    )
}

export default ContactForm