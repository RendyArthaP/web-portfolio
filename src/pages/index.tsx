import type { NextPage } from "next";
import Image from "next/image";
import GifSectionHome from "~/public/icons/section-home.gif";
import StackTransition from "../components/StackTranstition";
import Link from "next/link";
import Github from "~/public/icons/github.svg";
import Linkedin from "~/public/icons/linkedin.svg";
import Instagram from "~/public/icons/instagram.svg";
import UpWork from "~/public/icons/upwork.svg";
import Youtube from "~/public/icons/youtube.svg";
import Discord from "~/public/icons/discord.svg";
import WebAppIcon from "~/public/icons/web-apps.svg";
import CoachingMentoring from "~/public/icons/coaching-mentoring.svg";
import Community from "~/public/icons/community.svg";
import { converterMessage, textMsg } from "../utils/converterWAMessage";

const Home: NextPage = () => {
  return (
    <div className="m-4">
      {/** Opening Section */}
      <div className="lg:mt-16 flex flex-col-reverse justify-between items-center lg:flex-row">
        <div>
          <h1 className="font-bold text-lg lg:text-[28px]">
            Hi, I’m Rendy Artha Prawira
          </h1>
          <h2 className="font-bold text-base mt-1 lg:text-[22px]">
            Video Editor Become a Web Engineer
          </h2>
          <p className="text-[16px] font-normal lg:max-w-[504px] my-5">
            I’m from Indonesia, and work profesionally as a web engineer since
            2020. I work at fintech company as a Front End, but still doing and
            learning about Full Stack. Looking an opportunity as a freelancer,
            mentor, and content creator. I hope we can work together.
          </p>
          <div className="flex flex-row items-center">
            <p className="text-sm lg:text-[16px] font-normal mr-2">
              I usually use this tools
            </p>
            <StackTransition />
          </div>
          <div className="w-full lg:max-w-[295px]">
            <a
              target="_blank"
              href={`https://wa.me/+6281318979935?text=${converterMessage(
                textMsg,
              )}`}
              rel="noopener noreferrer"
            >
              <div className="bg-light-orange cursor-pointer text-center rounded-md p-2 text-white mt-5 w-full lg:max-w-[295px] hover:text-light-orange hover:bg-white duration-300">
                Hire Me!
              </div>
            </a>
            <div className="mt-5 flex flex-row">
              <a
                className="mr-4 hover:scale-125 duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/RendyArthaP"
              >
                <Image src={Github} alt="github" />
              </a>
              <a
                className="mr-5 hover:scale-125 duration-300"
                href="https://www.linkedin.com/in/rendyarthap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Linkedin} alt="linkedin" />
              </a>
              {/** Hide */}
              <a className="mr-5 hover:scale-125 duration-300 hidden">
                <Image src={Instagram} alt="instagram" />
              </a>
              <a
                className="mr-5 hover:scale-125 duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.upwork.com/freelancers/~01099d0dec85549e1e"
              >
                <Image src={UpWork} alt="upwork" />
              </a>
              {/** Hide */}
              <a className="mr-5 hover:scale-125 duration-300 hidden">
                <Image src={Youtube} alt="youtube" />
              </a>
              {/** Hide */}
              <a className="hover:scale-125 duration-300 hidden">
                <Image src={Discord} alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <Image
          src={GifSectionHome}
          width={450}
          height={365}
          priority={true}
          unoptimized={true}
        />
      </div>
      {/** End Opening Section */}

      {/** Our Service Section */}
      <div className="mt-[70px]">
        <h1 className="font-bold text-base mb-2 lg:text-[22px]">Our Service</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[320px]">
            <Image src={WebAppIcon} alt="web-app" />
            <h1 className="my-[10px] font-bold text-base">
              Web/App Design & Development
            </h1>
            <p className="text-sm">
              Create web or apps for what you needed, because in this digital
              era, every business or things need a website or apps to make
              easier their process.
            </p>
          </div>
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[320px]">
            <Image src={CoachingMentoring} alt="web-app" />
            <h1 className="my-[10px] font-bold text-base">
              Coaching & Mentoring
            </h1>
            <p className="text-sm">
              Sharing my journey and my knowledge for the others, and help them
              to grow to survive for professional career in the real world.
            </p>
          </div>
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[320px]">
            <Image src={Community} alt="web-app" />
            <h1 className="my-[10px] font-bold text-base">
              Community For Growing Together
            </h1>
            <p className="text-sm">
              I served you my community to learn together to achieved your own
              goal, because everyone need others people to grow.
            </p>
          </div>
        </div>
      </div>
      {/** End Our Service Section */}
    </div>
  );
};

export default Home;
