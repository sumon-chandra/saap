"use client";

import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { Input } from "@nextui-org/react";

interface InputBoxProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
}

const InputBox: FC<InputBoxProps> = ({
  label,
  id,
  register,
  disabled,
  required,
  type,
  placeholder,
}) => {
  return (
    <Input
      id={id}
      type={type}
      isRequired
      autoComplete={id}
      label={label}
      variant="bordered"
      disabled={disabled}
      placeholder={placeholder}
      {...register(id, { required })}
      classNames={{
        input: "bg-saap-transparent",
        inputWrapper:
          "p-4 dark:border-saap-bg-dark-primary group-data-[focus=true]:border-saap-primary rounded",
      }}
    />
  );
};

export default InputBox;
