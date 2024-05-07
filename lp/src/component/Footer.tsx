import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-black py-4 text-white">
      <div className="container mx-auto flex items-center justify-center gap-8 text-center">
        <p className="japanese_thin">&copy; 2024 PulluP team.</p>
        <a href="https://github.com/charokoukuu/line-bot-award-osaka2024">
          <img
            className="w-16 rounded-full p-1"
            src="/github-mark-white.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
