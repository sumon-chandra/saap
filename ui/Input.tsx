"use client"
import { inputBox } from "@/components/primitives";
import clsx from "clsx";
import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: FC<InputProps> = ({ label, errors, id, register, disabled, required, type }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 md:text-lg">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={inputBox()}
                />
            </div>
        </div>
    )
}

export default Input