
import React from "react";
import { SocialIcon } from 'react-social-icons';
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Ioan Barbaroș
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#moreInfo" className="mr-5 hover:text-white">
            About me
          </a>
        </nav>
        <nav className="flex flex-wrap items-center text-base justify-right">
          <SocialIcon url="https://github.com/ioanb" className="hover:text-white" bgColor="white"/>
          <SocialIcon url="https://www.linkedin.com/in/ioan-barbaros-289a99192/" bgColor="white"/>
        </nav>
      </div>
    </header>
  );
}
