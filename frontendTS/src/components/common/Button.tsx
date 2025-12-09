import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}
function Button({ 
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-lg flex gap-2 justify-center items-center ${bgColor} ${textColor} ${className} hover:${bgColor} scale-3d transition-all duration-200 `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
