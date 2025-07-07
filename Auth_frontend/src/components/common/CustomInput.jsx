import { Label, TextInput } from "flowbite-react";
import React from "react";

const CustomInput = ({ label, placeholder, name, ...rest }) => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={label} value={label}></Label>
      </div>
      <TextInput
        id={label}
        name={name}
        type="text"
        placeholder={placeholder}
        required
        {...rest}
      />
    </>
  );
};

export default CustomInput;
