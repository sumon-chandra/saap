"use client"
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
}

const InputBox: FC<InputBoxProps> = ({ label, errors, id, register, disabled, required, type }) => {
    return (
        <Input
            id={id}
            type={type}
            isRequired
            autoComplete={id}
            label={label}
            variant="underlined"
            disabled={disabled}
            {...register(id, { required })}
            classNames={{
                input: "bg-saap-transparent"
            }}
            className="my-2"
        />
    )
}

export default InputBox