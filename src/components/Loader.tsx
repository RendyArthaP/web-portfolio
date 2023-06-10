import Image from "next/image";
import React from "react";
import Logo from "~/public/Logo.png";

const Loader = () => {
  return (
    <div className="flex justify-center h-screen items-center animate-pulse">
      <Image src={Logo} alt="Logo" width={150} height={150} priority={true} />
    </div>
  );
};

export default Loader;
