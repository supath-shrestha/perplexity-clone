"use client";

import { SetStateAction, useRef, useState } from "react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  GlobeIcon,
  PaperclipIcon,
  ShuffleIcon,
} from "../icons";

interface IPromptBoxProps {
  setIsInitialPrompt: React.Dispatch<SetStateAction<boolean>>;
  promptSubmitHandler: (prompt: string) => void;
}

export default function PromptBox(props: IPromptBoxProps) {
  const { setIsInitialPrompt,promptSubmitHandler } = props;

  const [prompt, setPrompt] = useState<string>("");

  const btnRef = useRef<HTMLButtonElement>(null);

  const clickHandler = async () => {
    promptSubmitHandler(prompt.trim())
    setIsInitialPrompt(false);
    setPrompt("");
  };

  return (
    <div className="w-full">
      <div>
        <span className="grow block">
          <div className="rounded-md">
            <div
              className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans grid text-textMain placeholder-textOff border border-borderMain focus:ring-1 dark:bg-offsetDark 
            dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all
             bg-background shadow-sm rounded-t-lg rounded-b-lg px-md pt-3 pb-sm items-center"
            >
              <div className="grid-rows-1fr-auto grid grid-cols-3">
                <div className="col-start-1 col-end-4 pb-sm overflow-hidden relative flex h-full w-full">
                  <textarea
                    autoFocus
                    placeholder="Ask anything..."
                    className="overflow-auto max-h-[45vh] lg:max-h-[40vh] sm:max-h-[25vh] outline-none w-full font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark
                    dark:text-textMainDark dark:placeholder-textOffDark placeholder:select-none bg-background text-textMain placeholder-textOff  scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-thin scrollbar-track-transparent"
                    autoComplete="off"
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

                <div className="bg-background dark:bg-offsetDark gap-sm flex rounded-l-lg col-start-1 row-start-2 -ml-2">
                  <div className="gap-sm flex">
                    <span>
                      <button
                        type="button"
                        className="border border-borderMain/50 dark:border-borderMainDark/50 text-textOff dark:text-textOffDark  md:hover:text-textMain md:dark:hover:text-textMainDark rounded-md 
                        focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center cursor-pointer 
                        active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
                      >
                        <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                          <div className="flex items-center justify-center size-4">
                            <ShuffleIcon />
                          </div>
                          <div className="text-align-center relative truncate leading-loose -mb-px">
                            Auto
                          </div>
                          <ChevronDownIcon />
                        </div>
                      </button>
                    </span>

                    <span>
                      <button
                        type="button"
                        className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain
                         dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark focus:outline-none outline-none ml-1 outline-transparent transition duration-300 ease-out
                          font-sans  select-none items-center relative group/button  justify-center text-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150
                           active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                        data-state="closed"
                      >
                        <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                          <div>
                            <GlobeIcon />
                          </div>
                        </div>
                      </button>
                    </span>
                  </div>
                </div>

                <div className="bg-background dark:bg-offsetDark flex items-center space-x-2 justify-self-end rounded-full col-start-3 row-start-2 -mr-2">
                  <div className="flex items-center">
                    <button
                      aria-label="Attach text or PDF files.  Sign in to attach files."
                      type="button"
                      className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                      data-state="closed"
                    >
                      <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                        <div className="flex items-center justify-center size-4">
                          <PaperclipIcon />
                        </div>
                      </div>
                    </button>
                    <input
                      type="file"
                      hidden
                      multiple
                      accept=".pdf,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex,.less,.pptx,.docx,.xlsx"
                    />
                  </div>

                  <button
                    type="button"
                    ref={btnRef}
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
                    <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                      <div className="flex items-center justify-center size-4">
                        <ArrowRightIcon />
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
  );
}
