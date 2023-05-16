import React from "react";

interface NavItemProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, isActive, children }: NavItemProps) => {
  const activeClass = isActive
    ? "bg-gray-900 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white";
  return (
    <a
      href={href}
      className={`rounded-md px-3 py-2 text-sm font-medium flex lg:inline ${activeClass}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  );
};

export default NavItem;
