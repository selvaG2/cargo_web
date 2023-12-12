import React, { useState } from 'react'
import InputField from '../shared/Inputs/Input'
import ImageInput from '../shared/Inputs/ImageInput';
import CheckBox from '../shared/Inputs/CheckBox';
import RadioButton from '../shared/Inputs/RadioButton';
import DataInput from '../shared/Inputs/DateInput';
import Datepicker from 'react-tailwindcss-datepicker';

const ContactForm = () => {
    const [username, setUsername] = useState<string>("");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isRadio, setIsRadio] = useState<boolean>(false);

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date(new Date())
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };    

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

            <Datepicker
                value={value}
                onChange={handleValueChange}
                asSingle={true}
                placeholder='Enter your date of birth'
                startFrom={new Date()}
                showShortcuts={true}
                showFooter={true}
                containerClassName="relative mt-8 border-2 border-black rounded-lg" 
                primaryColor={"indigo"} 
            />

        </form>
    )
}

export default ContactForm