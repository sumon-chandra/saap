"use client";

import { FC, useState } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { IconType } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputBoxProps {
  label: string;
  type: "email" | "password" | "text";
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  placeholder: string;
  Icon?: IconType;
  name: "email" | "password" | "name";
}

const InputBox: FC<InputBoxProps> = ({
  label,
  register,
  disabled,
  required,
  type,
  placeholder,
  Icon,
  name,
}) => {
  const [passHidden, setPassHidden] = useState(true);

  const handlePasswordVisibility = () => {
    setPassHidden(!passHidden);
  };

  const inputType = type === "password" ? (passHidden ? "password" : "text") : type;

  return (
    <>
      <Input
        id={type}
        type={inputType}
        isRequired
        autoComplete={type}
        label={label}
        variant="bordered"
        disabled={disabled}
        placeholder={placeholder}
        {...register(name, { required })}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: "bg-saap-transparent",
          innerWrapper: "bg-transparent",
          inputWrapper: "bg-saap-bg-secondary dark:bg-saap-bg-dark-primary border-none",
        }}
        {...(Icon && { startContent: <Icon size={18} /> })}
        endContent={
          type === "password" &&
          (passHidden ? (
            <FaEye
              size={18}
              className="cursor-pointer"
              onClick={handlePasswordVisibility}
            />
          ) : (
            <FaEyeSlash
              size={18}
              className="cursor-pointer"
              onClick={handlePasswordVisibility}
            />
          ))
        }
      />
    </>
  );
};

export default InputBox;
