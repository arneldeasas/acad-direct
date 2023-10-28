"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
import lottie from "lottie-web";
const SquareButton = ({
   icon,
   onClick,
   buttonStyle,
   className,
   classForButton,
   type = "submit",
   loadingName = "",
   isPending = false,
}) => {
   const [buttonClass, setButtonClass] = useState("");
   const blue = `bg-[#355c8a]`;
   const red = ``;
   const black = `bg-gray-950 text-white disabled:bg-gray-950/70`;
   const divRef = useRef();
   useEffect(() => {
      switch (buttonStyle) {
         case "blue":
            setButtonClass(blue);
            break;
         case "red":
            setButtonClass(red);
            break;
         case "black":
            setButtonClass(black);
            break;
      }
   }, []);

   useEffect(() => {
      if (isPending) {
         lottie.loadAnimation({
            container: divRef.current,
            animationData: require("loader.json"),
            renderer: "svg", // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "load", // Name for future reference. Optional.
            rendererSettings: {},
         });
      } else {
         lottie.destroy("load");
      }
   }, [isPending]);
   return isPending ? (
      <button
         disabled
         type={type}
         className={` ${buttonClass} py-[9px] ${className} text-white text-lg  flex items-center gap-2`}
      >
         <div ref={divRef} className="shrink-0 w-[30px]"></div>
         <div className={`font-semibold text-xs uppercase  `}>
            {loadingName}
         </div>
      </button>
   ) : (
      <button
         type={type}
         className={` ${buttonClass}  ${className} p-3 text-white text-lg`}
         onClick={onClick}
      >
         <div className="font-semibold text-xs uppercase ">{icon}</div>
      </button>
   );
};

export default SquareButton;
