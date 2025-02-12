"use client";

import { useState, useRef } from "react";
import {
  ArrowUpIcon,
  CircleStopIcon,
  PaperclipIcon,
  ShuffleIcon,
} from "../icons";

interface IFixedPromptBoxProps {
  width: number;
  promptSubmitHandler: (prompt: string) => void;
  isLoading: boolean;
}

export default function FixedPromptBox(props: IFixedPromptBoxProps) {
  const { width, promptSubmitHandler, isLoading = false } = props;

  const [prompt, setPrompt] = useState<string>("");

  const btnRef = useRef<HTMLButtonElement>(null);

  const clickHandler = async () => {
    promptSubmitHandler(prompt.trim());
    setPrompt("");
  };

  return (
    <div
      className="bottom-mobileNavHeight gap-xl px-sm py-sm md:bottom-md pointer-events-none fixed z-10 grid-cols-12 md:grid md:px-0 border-borderMain/50 ring-borderMain/50 divide-borderMain/50
        dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"
      style={{ width: `${width}px` }}
      // style={{ left: "252.8px", width: "898.4px" }}
    >
      <div className="pointer-events-auto md:col-span-full">
        <div className="w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
          <div className="gap-x-xs relative flex w-full items-center justify-end">
            <div style={{ width: "100%" }}>
              <div className="flex items-center gap-4">
                {isLoading && (
                  <button
                    aria-label="Stop generating response"
                    type="button"
                    className="bg-offsetPlus dark:bg-offsetPlusDark  text-textMain dark:text-textMainDark  hover:bg-superAlt hover:text-white focus:outline-none outline-none outline-transparent
                   transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center rounded-full cursor-pointer active:scale-[0.97] 
                   active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-base h-10 aspect-square"
                    data-state="closed"
                  >
                    <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                      <div className="flex shrink-0 items-center justify-center size-5">
                        <CircleStopIcon />
                      </div>
                    </div>
                  </button>
                )}

                <span className="grow block">
                  <div className="rounded-full md:p-sm bg-offset dark:bg-offsetDark">
                    <div
                      className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans items-center text-textMain placeholder-textOff border border-borderMain focus:ring-1 dark:bg-offsetDark dark:text-textMainDark
                     dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background shadow-sm rounded-t-[32px] rounded-b-[32px] py-sm px-sm grid"
                    >
                      <div className="flex">
                        <div className="flex-grow flex-shrink p-sm rounded-full order-1 overflow-hidden relative flex w-full">
                          <textarea
                            placeholder="Ask follow-up"
                            className="overflow-auto  outline-none w-full font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark
                              dark:placeholder-textOffDark placeholder:select-none bg-background text-textMain placeholder-textOff  scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-thin scrollbar-track-transparent"
                            autoComplete="off"
                            style={{ height: "24px" }}
                            data-1p-ignore="true"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                btnRef.current?.click();
                              }
                            }}
                          ></textarea>
                        </div>

                        <div className="bg-background dark:bg-offsetDark gap-sm flex rounded-l-lg order-0">
                          <div className="gap-sm flex">
                            <span>
                              <button
                                type="button"
                                className="border border-borderMain/50 dark:border-borderMainDark/50 text-textOff dark:text-textOffDark  md:hover:text-textMain md:dark:hover:text-textMainDark focus:outline-none outline-none outline-transparent 
                                transition  duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center rounded-full  cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center
                                 whitespace-nowrap inline-flex text-base h-10 pl-3 pr-4"
                              >
                                <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                                  <div className="flex shrink-0 items-center justify-center size-5">
                                    <ShuffleIcon />
                                  </div>
                                  <div className="text-align-center relative truncate leading-loose -mb-[2px]">
                                    Auto
                                  </div>
                                </div>
                              </button>
                            </span>
                          </div>
                        </div>

                        <div className="bg-background dark:bg-offsetDark flex items-center space-x-2 justify-self-end rounded-full order-2">
                          <div className="flex items-center">
                            <button
                              aria-label="Attach images, text, or PDFs.  Sign in to attach files."
                              type="button"
                              className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark  md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark 
                               dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent   transition duration-300 ease-out select-none relative group/button  justify-center text-center
                                items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150    active:ease-outExpo origin-center whitespace-nowrap inline-flex text-base h-10 aspect-square"
                              data-state="closed"
                            >
                              <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                                <div className="flex shrink-0 items-center justify-center size-5">
                                  <PaperclipIcon />
                                </div>
                              </div>
                            </button>
                            <input
                              multiple
                              accept=".pdf,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,
                              .yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex,.less,.pptx,.docx,.xlsx,.jpeg,.jpg,.jpe,.jp2,.png,.gif,.bmp,.tiff,.tif,.svg,.webp,.ico,.avif,.heic,.heif"
                              type="file"
                              style={{ display: "none" }}
                            />
                          </div>
                          <button
                            type="button"
                            ref={btnRef}
                            aria-label="Submit"
                            disabled={prompt.trim().length === 0}
                            className={`focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button 
                              justify-center text-center rounded-full whitespace-nowrap inline-flex text-sm h-8 aspect-square
                              ${
                                prompt.trim().length > 0
                                  ? "bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center"
                                  : "bg-idle text-textOff dark:bg-idleDark dark:text-textOffDark cursor-default opacity-50"
                              }
                              `}
                            onClick={clickHandler}
                          >
                            <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                              <div className="flex shrink-0 items-center justify-center size-4">
                                <ArrowUpIcon />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
