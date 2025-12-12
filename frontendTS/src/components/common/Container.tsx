import React, { type ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

function Container({children}: ContainerProps) {
  return (
    <div className="flex justify-center items-center w-10/12 mx-auto my-4">
      {children}
    </div>
  );
}

export default Container;
