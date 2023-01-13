import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-black pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-white">
            Caio Santos
          </p>
          <p className="font-playfair text-md text-white">
            © 2023 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
