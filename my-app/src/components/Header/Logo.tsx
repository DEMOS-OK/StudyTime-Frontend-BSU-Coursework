import Image from "next/image";
import sourceImage from "../../../public/img/logo.svg";
import React from "react";

interface LogoProps {
  additionalClasses: string;
}

const Logo = ({ additionalClasses }: LogoProps) => {
  return (
    <a href="/">
      <div className={`flex items-center gap-4 h-16 ${additionalClasses}`}>
        <Image src={sourceImage} alt="Logo" className="w-9" />
        <p className="text-white hidden sm:block">
          StudyTime - расписание студента!
        </p>
      </div>
    </a>
  );
};

export default Logo;
