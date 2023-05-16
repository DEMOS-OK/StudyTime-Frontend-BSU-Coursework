"use client";

import Burger from "@/components/Header/Navbar/Burger";
import NavItem from "@/components/Header/Navbar/NavItem";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileNavigationStatus, setMobileNavigationStatus] =
    useState<boolean>(false);

  const toggleMobileNavigationStatus = () => {
    setMobileNavigationStatus(!mobileNavigationStatus);
  };

  const requestURI = usePathname();
  const pages = [
    {
      href: "/",
      isActive: requestURI === "/",
      title: "Главная",
    },
    {
      href: "/schedule",
      isActive: requestURI === "/schedule",
      title: "Расписание",
    },
    {
      href: "/admin/auth",
      isActive: requestURI === "/admin/auth",
      title: "Вход",
    },
  ];

  return (
    <>
      <div className="flex h-1 sm:h-16 items-center">
        <Burger onClick={toggleMobileNavigationStatus} />
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {pages.map((page, key) => {
              return (
                <NavItem href={page.href} isActive={page.isActive} key={key}>
                  {page.title}
                </NavItem>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${mobileNavigationStatus ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {pages.map((page, key) => {
            return (
              <NavItem href={page.href} isActive={page.isActive} key={key}>
                {page.title}
              </NavItem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
