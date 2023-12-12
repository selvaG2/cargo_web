import React, { useState } from 'react'
import InputField from '../shared/Inputs/Input'
import ImageInput from '../shared/Inputs/ImageInput';
import CheckBox from '../shared/Inputs/CheckBox';

const ContactForm = () => {
    const [username, setUsername] = useState<string>("");

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    console.log(selectedFile);

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

            <ImageInput onFileChange={handleFileChange} key={1} label='Profile' selectedFile={selectedFile} />

        </form>
    )
}

export default ContactForm