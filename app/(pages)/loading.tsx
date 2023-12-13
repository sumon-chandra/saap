import { PiSpinnerLight } from "react-icons/pi";

const Loading = () => {
     return (
          <div className="flex py-40 items-center justify-center">
               <div className="lg:text-5xl text-3xl select-none font-bold text-center text-saap-primary">
                    <PiSpinnerLight size={25} className="animate-spin" />
               </div>
          </div>
     )
};

export default Loading;
