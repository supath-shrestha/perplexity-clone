"use client";

import { INavItemOptions } from "@/constants";
import { usePathname } from "next/navigation";
import Tooltip from "./Tooltip";
import Link from "next/link";

interface INavItemProps {
  item: INavItemOptions;
  isSidebarMinimized?: boolean;
}

export default function NavItem(props: INavItemProps) {
  const { item, isSidebarMinimized = false } = props;

  const pathName = usePathname();

  const isActive = pathName === item.navigateTo;

  return (
    <div className="relative justify-center w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
      <div className="px-xs transition duration-300 relative  flex items-center">
        <NavItemWrapper
          type={item?.navigateTo ? "ANCHOR" : "BUTTON"}
          style={`
                relative group focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:md:hover:bg-offsetPlusDark py-md focus:outline-none 
                outline-none outline-transparent transition duration-300 ease-out font-sans select-none items-center relative group/button rounded cursor-pointer active:scale-[0.97] 
                active:duration-150 active:ease-outExpo origin-center whitespace-nowrap flex w-full text-base h-10 ${
                  isSidebarMinimized
                    ? "justify-center text-center items-center aspect-[9/8]"
                    : "justify-start pl-3 pr-4"
                }`}
          item={item}
        >
          <div
            className={`flex items-center min-w-0 font-medium w-full gap-1.5 hover:text-textMain
              ${isSidebarMinimized ? "justify-center" : "justify-left"}
                ${isActive ? "text-textMain" : "text-textOffDark"}`}
          >
            <div className={`flex items-center justify-center size-5`}>
              {item?.icon}
            </div>

            {!isSidebarMinimized && (
              <div
                className={`text-align-center relative truncate leading-loose -mb-[2px]`}
              >
                {item.text}
              </div>
            )}

            {isSidebarMinimized && isActive && (
              <div
                className="absolute right-0 h-full w-[3px] rounded-l-sm bg-textMain dark:bg-textMainDark"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              ></div>
            )}
          </div>

          {isSidebarMinimized && (
            <Tooltip text={item.text} pos="RIGHT" className="text-textMain" />
          )}
        </NavItemWrapper>
      </div>
    </div>
  );
}

function NavItemWrapper({
  type,
  style,
  item,
  children,
}: {
  type: "BUTTON" | "ANCHOR";
  style: string;
  item: INavItemOptions;
  children: React.ReactNode;
}) {
  if (type === "BUTTON") {
    return (
      <button type="button" aria-label={item.text} className={`${style}`}>
        {children}
      </button>
    );
  } else {
    return (
      <Link
        role="button"
        aria-label={item.text}
        className={`${style}`}
        href={`${item.navigateTo}`}
      >
        {children}
      </Link>
    );
  }
}
