import clsx from "clsx";
import { FC, SetStateAction } from "react";
import { IoImage } from "react-icons/io5";

interface InsertImageBtnProps {
   setFile: (value: SetStateAction<File | null>) => void;
   isLoading: boolean;
}
const InsertImageBtn: FC<InsertImageBtnProps> = ({ setFile, isLoading }) => {
   return (
      <label htmlFor="imageUploader" className={clsx(
         "rounded-full cursor-pointer font-semibold bg-saap-bg-primary-light dark:bg-saap-bg-dark-secondary text-saap-primary flex items-center justify-center gap-2 px-3 py-1",
         isLoading && "opacity-50 cursor-not-allowed"
      )}>
         <input
            type="file"
            name="imageUploader"
            id="imageUploader"
            className="w-[0.000001px]"
            onChange={(e) => {
               setFile(e.target.files?.[0]!);
            }}
         />
         <IoImage size={18} />
         <div className="text-sm">Add image</div>
      </label>
   )
}

export default InsertImageBtn
