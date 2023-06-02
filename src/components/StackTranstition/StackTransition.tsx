import React, { useEffect } from "react";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { dataStackTranstition } from "./constant";

const StackTransition = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.stiff}>
      <div className="flex flex-row items-center">
        <Image
          src={dataStackTranstition[index % dataStackTranstition.length].icon}
        />
        <h1 className="ml-1 text-sm lg:text-[16px] font-normal">
          {dataStackTranstition[index % dataStackTranstition.length].name}
        </h1>
      </div>
    </TextTransition>
  );
};

export default StackTransition;
