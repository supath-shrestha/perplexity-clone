"use client";

import { NAV_ITEM_LIST } from "@/data";
import { SearchBar } from "../basics";
import Tooltip from "../basics/Tooltip";
import {
  ArrowLeftToLineIcon,
  ArrowRightFromLineIcon,
  MinimizedPerplexityLogo,
  PerplexityLogo,
  PlusIcon,
  UserIcon,
} from "../icons";
import NavItem from "../basics/NavItem";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const searchBarHandler = () => {};

  return (
    <div
      className="hidden z-20  md:block border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50
     bg-transparent"
    >
      <div
        className={`group/bar isolate transition-all duration-300 ease-in-out ${
          isSidebarMinimized ? "w-collapsedSideBarWidth" : "w-sideBarWidth"
        }`}
      >
        <div
          className={`fixed h-full transition-all duration-300 ease-in-out border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50
        dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent pt-md top-0 flex min-h-0 flex-1 flex-col
        ${isSidebarMinimized ? "w-collapsedSideBarWidth" : "w-sideBarWidth"}
        `}
        >
          <div
            className={`flex items-center ${
              isSidebarMinimized ? "justify-center" : "mb-md justify-between"
            }`}
          >
            <div className="overflow-hidden">
              {/* Perplexity Logo  */}
              {isSidebarMinimized && (
                <span>
                  <a aria-label="Perplexity" className="block" href="/">
                    <div
                      className={`h-auto group w-10 transition-all duration-300 ease-in-out hover:scale-105`}
                    >
                      <MinimizedPerplexityLogo />
                    </div>
                  </a>
                </span>
              )}

              {!isSidebarMinimized && (
                <span>
                  <a aria-label="Perplexity" className="block" href="/">
                    <div className="ml-xs pl-md pr-sm pt-xs">
                      <div className="h-auto group w-28 md:w-[140px]">
                        <PerplexityLogo />
                      </div>
                    </div>
                  </a>
                </span>
              )}
            </div>

            {!isSidebarMinimized && (
              <div className="mr-xs pt-two">
                <button
                  aria-label="Collapse"
                  type="button"
                  className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark
                dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out  select-none items-center relative group justify-center text-center
                 rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                  data-state="closed"
                  onClick={() => setIsSidebarMinimized(true)}
                >
                  <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                    <div className="flex items-center justify-center size-4">
                      <ArrowLeftToLineIcon />
                    </div>
                  </div>

                  <Tooltip text={"Collapse"} className="text-textMain" />
                </button>
              </div>
            )}
          </div>

          {/* New Thread Bar  */}
          {isSidebarMinimized ? (
            <div className="-mb-sm py-lg flex items-center justify-center">
              <button
                aria-label="New Thread"
                type="button"
                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  
              select-none items-center relative group justify-center text-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap
               inline-flex text-base h-10 aspect-square"
                data-state="closed"
              >
                <div className="flex items-center min-w-0 font-medium gap-2 justify-center gap-sm size-5">
                  <PlusIcon />
                </div>

                <Tooltip
                  text={"New Thread"}
                  pos="RIGHT"
                  className="text-textMain"
                />
              </button>
            </div>
          ) : (
            <div className="pt-sm ml-xs">
              <SearchBar
                placeholder={"New Thread"}
                kbd={["Ctrl", "I"]}
                handler={searchBarHandler}
              />
            </div>
          )}

          {/* NavItem List  */}
          <div
            className={`w-full relative pt-md scrollbar-thin scrollbar-track-transparent scrollbar-thumb-idle dark:scrollbar-thumb-idleDark min-h-0 flex-1 items-center space-y-xs
            ${isSidebarMinimized ? "justify-center" : ""}
            `}
          >
            {NAV_ITEM_LIST.map((navItem) => (
              <NavItem
                key={navItem.id}
                item={navItem}
                isSidebarMinimized={isSidebarMinimized}
              />
            ))}
            {isSidebarMinimized && (
              <NavItem
                key={5}
                item={{ id: 5, text: "Sign In", icon: <UserIcon /> }}
                isSidebarMinimized={isSidebarMinimized}
              />
            )}
          </div>

          {isSidebarMinimized ? (
            <div className="flex flex-col items-center justify-center pb-md">
              <button
                aria-label="Expand sidebar"
                type="button"
                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark focus:outline-none outline-none
               outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group  justify-center text-center rounded-full 
               cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-base h-10 aspect-square"
                data-state="closed"
                onClick={() => setIsSidebarMinimized(false)}
              >
                <div className="relative group flex items-center min-w-0 font-medium gap-2 justify-center gap-sm">
                  <div className="flex items-center justify-center size-5">
                    <ArrowRightFromLineIcon />
                  </div>
                </div>

                <Tooltip
                  text={"Expand"}
                  pos="RIGHT"
                  className="text-textMain"
                />
              </button>
            </div>
          ) : (
            <div className="mb-lg ml-md mr-md mt-md hidden md:block">
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="bg-super dark:bg-superDark dark:text-backgroundDark text-textMain hover:opacity-80 focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans 
               select-none relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap
                flex w-full text-base h-10 pl-4 pr-4"
                >
                  <div className="flex items-center min-w-0 font-medium gap-2 justify-center w-full gap-sm">
                    <div className="text-align-center relative truncate leading-loose -mb-[2px]">
                      Sign Up
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark focus:outline-none
               outline-none outline-transparent transition duration-300 ease-out font-sans  select-none relative group/button  justify-center text-center items-center rounded
                cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap flex w-full text-base h-10 pl-4 pr-4"
                >
                  <div className="flex items-center min-w-0 font-medium gap-2 justify-center w-full gap-sm">
                    <div className="text-align-center relative truncate leading-loose -mb-[2px]">
                      Log in
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
