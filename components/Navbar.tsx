"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <Image
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      /> 
      <ul 
        className={`${isMenuOpen ? "absolute top-10 right-[50px] bg-white shadow-lg h-[210px] p-5 m-5 transition-transform duration-300 transform lg:hidden" : "hidden h-full gap-12 lg:flex"}
      `}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
