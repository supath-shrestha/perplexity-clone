"use client";

import {
  ArrowUpFromBracketIcon,
  BookmarkIcon,
  ClockIcon,
  EllipsisIcon,
  LinkIcon,
  MinimizedPerplexityLogo,
} from "../icons";
import { useState, useEffect, useMemo } from "react";

interface IChatHeaderProps {
  title: string;
  timestamp?: number;
}

export default function ChatHeader(props: IChatHeaderProps) {
  const { title } = props;

  const [timeAgo, setTimeAgo] = useState("");

  const timestamp = useMemo(() => {
    return Date.now();
  }, []);

  const calculateTimeAgo = (): string => {
    const currentTime = Date.now();

    const diffInSeconds = Math.floor((currentTime - timestamp) / 1000);

    if (diffInSeconds < 60) {
      return "Now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}m`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}h`;
    }

    return "Unknown";
  };

  useEffect(() => {
    setTimeAgo(calculateTimeAgo());

    const intervalId = setInterval(() => {
      setTimeAgo(calculateTimeAgo());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [timestamp, calculateTimeAgo]);

  return (
    <div className="sticky left-0 right-0 top-0 z-10 border-b md:mb-0 md:rounded-t-xl border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
      <div className="gap-x-md px-md py-sm flex items-center justify-between md:min-h-[53px]">
        {/* perplexity logo for mobile and tablet devices  */}
        <div className="gap-x-sm flex items-center md:hidden">
          <div className="">
            <div className="h-auto group  w-6 md:w-8">
              <MinimizedPerplexityLogo />
            </div>
          </div>
          <button
            type="button"
            className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
          >
            <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
              <div className="flex shrink-0 items-center justify-center size-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="plus"
                  className="svg-inline--fa fa-plus fa-fw fa-1x "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160L40 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0 0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160 160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0 0-160z"
                  ></path>
                </svg>
              </div>
              <div className="text-align-center relative truncate leading-loose -mb-px">
                New
              </div>
            </div>
          </button>
        </div>

        {/* clock icon and timer goes here */}
        <div>
          <div className="gap-sm flex min-w-0 items-center">
            <div
              className="gap-x-xs flex cursor-default items-center light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
              data-state="closed"
            >
              <span>
                <ClockIcon />
              </span>
              <span className="truncate">{timeAgo}</span>
            </div>
          </div>
        </div>

        {/* chat header title  */}
        <div className="hidden min-w-0 grow items-center justify-center text-center md:flex md:max-w-[30vw]">
          <div className="py-sm pl-sm truncate default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
            {title}
          </div>
        </div>

        <div className="gap-x-sm flex items-center">
          <div className="transition-all duration-300 opacity flex items-center gap-x-xs md:gap-x-0 opacity-100">
            <div className="gap-x-sm flex items-center">
              <button
                aria-label="Copy Link"
                type="button"
                className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 focus:outline-none outline-none outline-transparent transition
                 duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center rounded cursor-pointer active:scale-[0.97]
                  active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-[9/8]"
                data-state="closed"
              >
                <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                  <div className="flex shrink-0 items-center justify-center size-4">
                    <LinkIcon />
                  </div>
                </div>
              </button>

              <span>
                <button
                  type="button"
                  className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 focus:outline-none outline-none outline-transparent
                   transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center rounded cursor-pointer
                    active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
                >
                  <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                    <div className="flex shrink-0 items-center justify-center size-4">
                      <ArrowUpFromBracketIcon />
                    </div>
                    <div className="text-align-center relative truncate leading-loose -mb-px">
                      Share
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          <div className="gap-sm flex items-center">
            <button
              aria-label="Save to Bookmarks"
              type="button"
              className="border border-borderMain/50 dark:border-borderMainDark/50 text-textOff dark:text-textOffDark  md:hover:text-textMain md:dark:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-[9/8]"
              data-state="closed"
            >
              <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                <div className="flex shrink-0 items-center justify-center size-4">
                  <BookmarkIcon />
                </div>
              </div>
            </button>

            <div>
              <span>
                <button
                  data-testid="thread-dropdown-menu"
                  type="button"
                  className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-[9/8]"
                >
                  <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                    <div className="flex shrink-0 items-center justify-center size-4">
                      <EllipsisIcon />
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
