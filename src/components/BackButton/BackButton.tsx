import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BackbuttonIMG from "~/public/icons/back-button.svg";

const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    return router.back();
  };
  return (
    <div
      onClick={goBack}
      className="cursor-pointer mx-4 flex flex-row items-center"
    >
      <Image src={BackbuttonIMG} alt="back-button" />
      <p className="text-base ml-3">Back</p>
    </div>
  );
};

export default BackButton;