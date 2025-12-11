import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  textColor?: string;
  className?: string;
}
function Input({
    type = "text",
    bgColor = "bg-white",
    textColor = "text-black",
    className = "",
    ...props
}: InputProps       
) {
  return (
    <input type={type} className={`border-2 border-gray-400 rounded-md py-2 px-4 mx-2 my-4 ${bgColor} ${textColor} ${className}`} {...props} />
  )
}

export default Input