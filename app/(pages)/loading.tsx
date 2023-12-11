import { PiSpinnerLight } from "react-icons/pi";

const Loading = () => {
     return (
          <div className="h-screen w-screen flex items-center justify-center">
               <div className="lg:text-5xl text-3xl select-none font-bold text-center text-saap-primary">
                    <PiSpinnerLight size={25} className="animate-spin" />
               </div>
          </div>
     )
};

export default Loading;
