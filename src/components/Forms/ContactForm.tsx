import React, { useState } from 'react'
import InputField from '../shared/Inputs/Input'
import ImageInput from '../shared/Inputs/ImageInput';
import CheckBox from '../shared/Inputs/CheckBox';
import RadioButton from '../shared/Inputs/RadioButton';
import DataInput from '../shared/Inputs/DateInput';

const ContactForm = () => {
    const [username, setUsername] = useState<string>("");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isRadio, setIsRadio] = useState<boolean>(false);

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    const [data, setData] = useState('');

    const handleDataChange = (value: string) => {
        setData(value);
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

        </form>
    )
}

export default ContactForm