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
        <div className="mt-2">
            <Input
                id={id}
                type={type}
                isRequired={id === "email" || id === "password"}
                autoComplete={id}
                label={label}
                radius="sm"
                disabled={disabled}
                {...register(id, { required })}
            />
        </div>
    )
}

export default InputBox