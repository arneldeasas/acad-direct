const InputField = ({
   value,
   onChange,
   className,
   required=true,
   label = "",
   name = "",
   icon,
   type = "text",
   readOnly = false,
   disabled = false,
}) => {
   return (
      <div
         className={`${className} border-b-2 border-gray-300 relative input-container pt-5`}
      >
         <input
            disabled={disabled}
            readOnly={readOnly}
            className=" w-full py-2 px-4"
            value={value}
            onChange={onChange}
            required={required}
            type={type}
            name={name}
            placeholder="placeholder"
         />
         <label className="absolute left-0 top-1/2  font-semibold px-4 opacity-50 pointer-events-none">
            <div className="flex items-center gap-2">
               {icon}
               <p className="capitalize">{label}</p>
            </div>
         </label>
      </div>
   );
};

export default InputField;
