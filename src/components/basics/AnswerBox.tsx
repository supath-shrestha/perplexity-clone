"use client";

import { memo } from "react";
import {
  CopyIcon,
  EllipsisIcon,
  RepeatIcon,
  ShareIcon,
  ThumpsDownIcon,
  ThumpsUpIcon,
} from "../icons";
import Tooltip from "./Tooltip";
import { marked } from "marked";
import Skeleton from "./Skeleton";

interface IAnswerBoxProps {
  answer: string;
  isLoading?: boolean;
}

const AnswerBox = memo((props: IAnswerBoxProps) => {
  const { answer, isLoading = false } = props;

  return (
    <div className="border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
      <div className="flex items-center justify-between border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
        <div className="mb-sm flex w-full items-center justify-between">
          <div className="">
            <div color="super" className="space-x-sm flex items-center">
              <div className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                <div className="relative -top-[1px] flex w-[24px] transform-gpu items-center justify-center">
                  <div
                    className="text-textMain dark:text-textMainDark flex aspect-[60/74] items-center justify-start overflow-hidden"
                    style={{ height: "24px" }}
                  >
                    <svg
                      width="60"
                      height="74"
                      viewBox="0 0 60 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-auto shrink-0 transform-gpu"
                    >
                      <path
                        d="M29.6848 25.4603L48.3092 41.4828V65.1065L29.6848 49.0293M29.6848 25.4603L10.5359 40.7925L10.5892 64.669L29.6316 49.0293M29.6848 25.4603L3.4071 24.8588V48.5542L10.0911 48.6959M29.6848 25.4603L55.9884 25.7611V49.5761L48.6649 49.4467M29.6848 25.4603L11.3722 9.03792L11.2884 24.5988M29.6848 25.4603L48.7956 9.74877V25.4474M29.6848 25.4603L29.63 2.75943M29.6848 25.4603V49.1113M29.63 71.6481L29.6848 49.0839"
                        stroke="currentColor"
                        strokeWidth="4.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Answer
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading || answer.length === 0 ? (
        <Skeleton />
      ) : (
        <>
          <div className="mb-md">
            <div className="relative default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
              <div className="min-w-0 break-words [word-break:break-word]">
                <div dir="auto">
                  <div className="prose text-pretty dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]">
                    <div
                      className="answer"
                      dangerouslySetInnerHTML={{
                        __html: marked(answer as string),
                      }}
                    ></div>

                    {/* <ul className="marker:text-textOff list-disc pl-8">
                        <li>
                          <span
                            className="hover:duration-80 duration-800 cursor-pointer underline decoration-textOff/25 decoration-1 underline-offset-[4px] hover:text-super hover:decoration-super/80 hover:underline-offset-[6px] dark:decoration-textOffDark/30 dark:hover:text-superDark dark:hover:decoration-superDark/80 transition-all first:mt-3 motion-reduce:transition-none"
                            data-state="closed"
                          >
                            <strong>Natural Sciences</strong>
                          </span>
                          <span className="">
                            : Include biological sciences (study of living
                            organisms) and physical sciences (study of the
                            material universe, including physics, chemistry,
                            space science).
                          </span>
                        </li>
                      </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-sm flex items-center justify-between">
            <div className="-ml-sm gap-xs flex items-center">
              <button
                type="button"
                className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark 
                   dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group 
                    justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
                data-state="closed"
              >
                <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                  <div className="flex shrink-0 items-center justify-center size-4">
                    <ShareIcon />
                  </div>
                  <div className="text-align-center relative truncate leading-loose -mb-px">
                    Share
                  </div>
                </div>
                <Tooltip
                  text={"Share Link"}
                  pos="TOP"
                  className="text-textMain"
                />
              </button>

              <div>
                <span>
                  <button
                    type="button"
                    className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark
                        dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button 
                         justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
                  >
                    <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                      <div className="flex shrink-0 items-center justify-center size-4">
                        <RepeatIcon />
                      </div>
                      <div className="text-align-center relative truncate leading-loose -mb-px">
                        Rewrite
                      </div>
                    </div>
                  </button>
                </span>
              </div>
            </div>

            <div className="gap-x-xs flex items-center">
              <div className="gap-xs flex items-center border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                <button
                  aria-label="Helpful"
                  type="button"
                  className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark
                      dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group
                       justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                  data-state="closed"
                >
                  <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                    <div className="flex shrink-0 items-center justify-center size-4">
                      <ThumpsUpIcon />
                    </div>
                  </div>
                  <Tooltip
                    text={"Helpful"}
                    pos="TOP"
                    className="text-textMain"
                  />
                </button>

                <button
                  aria-label="Not helpful"
                  type="button"
                  className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark 
                     dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group
                     justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                  data-state="closed"
                >
                  <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                    <div className="flex shrink-0 items-center justify-center size-4">
                      <ThumpsDownIcon />
                    </div>
                  </div>
                  <Tooltip
                    text={"Not Helpful"}
                    pos="TOP"
                    className="text-textMain"
                  />
                </button>
              </div>

              <button
                aria-label="Copy"
                type="button"
                className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark 
                   dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group
                    justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                data-state="closed"
              >
                <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                  <div className="flex shrink-0 items-center justify-center size-4">
                    <CopyIcon />
                  </div>
                </div>
                <Tooltip text={"Copy"} pos="TOP" className="text-textMain" />
              </button>

              <div className="">
                <span>
                  <button
                    type="button"
                    className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
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
        </>
      )}
    </div>
  );
});

export default AnswerBox;
