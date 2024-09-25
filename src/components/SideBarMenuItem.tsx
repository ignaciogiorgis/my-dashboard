"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

const SideBarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const currentPath = usePathname();
  return (
    <div>
      <Link
        href={path}
        className={`w-full px-2 inline-flex space-x-2 items-center border-b  py-3 ${
          currentPath === path ? "bg-blue-800" : ""
        }  hover:bg-white/5 transition ease-linear duration-150 rounded-md`}
      >
        <div>
          <svg
            xmlns={path}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            {icon}
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            {title}
          </span>
          <span className="text-sm text-white/50 hidden md:block">
            {subtitle}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SideBarMenuItem;
