import { useState } from "react";
import InputField from "../shared/Inputs/Input";
import FormHeader from "./FormsHeader/FormHeader";
import Textarea from "../shared/Inputs/Textarea";
import ToggleButton from "../shared/Inputs/Toggle";
import Typography from "../shared/Typography/Typography";
import Buttons from "../shared/Buttons/Buttons";

const ContactForm = () => {
    const [firstName, setfirstName] = useState<string>("");
    const [lastName, setlastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [isChecked, setIsChecked] = useState(false);



    return (
        <form >
            <FormHeader heading="Contact support" subHeading="contact support team by filling the form" />

            <div id="formInputs" className="container px-4 md:px-20 lg:px-40 xl:px-96 2xl:px-[30rem] mt-5 md:mt-8">
                <div className="flex flex-col md:flex-row gap-3">
                    <InputField
                        isRequired={true}
                        placeholder='Enter your first name'
                        type='text'
                        value={firstName}
                        setValue={setfirstName}
                        labelText='First name'
                    />

                    <InputField
                        isRequired={true}
                        placeholder='Enter your last name'
                        type='text'
                        value={lastName}
                        setValue={setlastName}
                        labelText='Last name'
                    />
                </div>

                <div className="">
                    <InputField
                        isRequired={true}
                        placeholder='Enter your email'
                        type='email'
                        value={email}
                        setValue={setEmail}
                        labelText='Email'
                        labelClass="mt-4"
                    />

                    <InputField
                        isRequired={true}
                        placeholder='Enter your phone number'
                        type='number'
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        labelText='Phone number'
                        labelClass="mt-4"
                    />

                    <Textarea
                        setValue={setMessage}
                        value={message}
                        label="Message"
                        placeholder="Enter your message"
                        labelClass="mt-4"
                        rows={4}
                    />

                    <div className="flex flex-row items-start px-1 mt-4 md:items-end md:mt-2">
                        <ToggleButton
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                        />

                        <Typography variant="p" className="text-sm">
                            By selecting this, you agree to our
                            <Typography variant="p" as="span" className="text-indigo-600 text-sm"> privacy policy.</Typography>
                        </Typography>
                    </div>

                    <div className="mt-6">
                        <Buttons
                            type="submit"
                            placeholder="Let's talk"
                            className="bg-indigo-600 text-white shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                        />
                    </div>

                </div>

            </div>


        </form>
    )
}

export default ContactForm;