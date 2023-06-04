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
            <button className="bg-light-orange rounded-md p-2 text-white mt-5 w-full lg:max-w-[295px]">
              Hire Me!
            </button>
            <div className="mt-5 flex flex-row justify-between">
              <Link href="/">
                <a className="mr-5">
                  <Image src={Github} alt="github" />
                </a>
              </Link>
              <Link href="/">
                <a className="mr-5">
                  <Image src={Linkedin} alt="linkedin" />
                </a>
              </Link>
              <Link href="/">
                <a className="mr-5">
                  <Image src={Instagram} alt="instagram" />
                </a>
              </Link>
              <Link href="/">
                <a className="mr-5">
                  <Image src={UpWork} alt="upwork" />
                </a>
              </Link>
              <Link href="/">
                <a className="mr-5">
                  <Image src={Youtube} alt="youtube" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image src={Discord} alt="discord" />
                </a>
              </Link>
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
      <div className="mt-[70px] mb-[80px]">
        <h1 className="font-bold text-base mb-2 lg:text-[22px]">Our Service</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[200px]">
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
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[200px]">
            <Image src={CoachingMentoring} alt="web-app" />
            <h1 className="my-[10px] font-bold text-base">
              Coaching & Mentoring
            </h1>
            <p className="text-sm">
              Sharing my journey and my knowledge for the others, and help them
              to grow to survive for professional career in the real world.
            </p>
          </div>
          <div className="bg-dark-blue my-3 rounded-md p-5 flex flex-col lg:max-w-[200px]">
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
