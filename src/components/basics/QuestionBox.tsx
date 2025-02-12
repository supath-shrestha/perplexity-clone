"use client";

import { useState, memo } from "react";
import { CopyIcon, PenToSquareIcon } from "../icons";

interface IQuestionBoxProps {
  question: string;
  queryUpdateSubmitHanlder: ({
    oldQuery,
    newQuery,
  }: {
    oldQuery: string;
    newQuery: string;
  }) => void;
}

const QuestionBox = memo((props: IQuestionBoxProps) => {
  const { question, queryUpdateSubmitHanlder } = props;

  const [isEditable, setIsEditable] = useState(false);

  const [newQuery, setNewQuery] = useState<string>(question);

  const editQueryHandler = () => {
    setIsEditable(true);
  };

  const saveQueryHandler = () => {
    setIsEditable(false);

    if (question.trim() !== newQuery.trim()) {
      queryUpdateSubmitHanlder({
        oldQuery: question,
        newQuery: newQuery.trim(),
      });
    }
  };

  const cancelQueryHandler = () => {
    setIsEditable(false);
  };

  return (
    <div className="my-md md:my-lg">
      {isEditable ? (
        <div style={{ height: "36px" }}>
          <div>
            <div style={{ opacity: "1" }}>
              <div className="relative w-full">
                <div className="-inset-sm border-border/50 bg-background-200/50 absolute rounded-md border"></div>
                <div className="relative grid">
                  <textarea
                    placeholder="Ask anything..."
                    rows={1}
                    className="caret-super text-textMain selection:bg-superDuper selection:text-textMain placeholder:text-text-200/25 block h-auto w-full resize-none appearance-none bg-transparent focus:outline-none
                    whitespace-pre-line break-words overflow-hidden !font-display !text-3xl"
                    style={{ gridArea: "1 / -1" }}
                    value={newQuery}
                    onChange={(e) => {
                      setNewQuery(e.target.value);
                    }}
                    autoFocus
                    onFocus={(e) => {
                      e.target.setSelectionRange(
                        question.length,
                        question.length
                      );
                    }}
                  ></textarea>

                  <div
                    className="pointer-events-none col-start-1 row-start-1 opacity-0 whitespace-pre-line break-words overflow-hidden !font-display !text-3xl default font-sans text-base text-textMain 
                  dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                  >
                    <span>
                      {question}
                      <br />
                    </span>
                  </div>
                </div>

                <div
                  className="-inset-x-sm bg-background pointer-events-none absolute top-[calc(100%+var(--size-sm))] h-[80px] md:hidden"
                  style={{ maskImage: "linear-gradient(black, transparent)" }}
                ></div>

                <div
                  className="absolute right-0 top-[calc(100%+var(--size-sm))]"
                  style={{ transform: "none" }}
                >
                  <div className="gap-2xs border-border/50 bg-background p-2xs flex -translate-y-1/2 rounded-md border shadow-sm">
                    <button
                      type="button"
                      className="border border-borderMain/50 dark:border-borderMainDark/50 text-textOff dark:text-textOffDark  md:hover:text-textMain md:dark:hover:text-textMainDark focus-visible:ring-2 
                      focus-visible:ring-super/50 ring-offset-1 ring-offset-background border-0 hover:bg-background-200 font-sans focus:outline-none outline-none outline-transparent transition duration-300
                       ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo
                        origin-center whitespace-nowrap inline-flex text-xs h-6 aspect-[9/8]"
                      onClick={cancelQueryHandler}
                    >
                      <div className="flex items-center min-w-0 font-medium gap-1 justify-center">
                        <div className="flex shrink-0 items-center justify-center size-3.5">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="xmark"
                            className="svg-inline--fa fa-xmark fa-fw fa-1x "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="currentColor"
                              d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 focus-visible:ring-2 focus-visible:ring-super/50 ring-offset-1 ring-offset-background  
                      font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center
                       items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-xs h-6 pl-2.5 pr-2.5"
                      onClick={saveQueryHandler}
                    >
                      <div className="flex items-center min-w-0 font-medium gap-1 justify-center">
                        <div className="text-align-center relative truncate leading-loose -mb-px">
                          Save
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="group/title relative">
          <div className="-inset-md absolute"></div>

          <div className="-inset-sm border-border/30 pointer-events-none absolute rounded-md border opacity-0 duration-150 group-hover/title:opacity-100"></div>

          <h1
            className="group/query relative whitespace-pre-line break-words [word-break:break-word] default font-display text-3xl font-regular text-textMain dark:text-textMainDark 
          selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
          >
            {question}
          </h1>

          <div
            className="border-border/50 bg-background p-2xs pointer-events-none absolute bottom-0 right-0 flex items-center rounded-md border opacity-0 shadow-sm duration-150 group-hover/title:pointer-events-auto
          group-hover/title:opacity-100 md:bottom-auto md:top-[calc(100%+var(--size-sm))] md:-translate-y-1/2"
          >
            <button
              type="button"
              className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-xs h-6 pl-2 pr-2.5"
              onClick={editQueryHandler}
            >
              <div className="flex items-center min-w-0 font-medium gap-1 justify-center">
                <div className="flex shrink-0 items-center justify-center size-3.5">
                  <PenToSquareIcon />
                </div>
                <div className="text-align-center relative truncate leading-loose -mb-px">
                  Edit Query
                </div>
              </div>
            </button>

            <div className="mx-2xs h-4 border-l border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"></div>

            <button
              type="button"
              className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-xs h-6 aspect-[9/8]"
            >
              <div className="flex items-center min-w-0 font-medium gap-1 justify-center">
                <div className="flex shrink-0 items-center justify-center size-3.5">
                  <CopyIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

QuestionBox.displayName="QuestionBox"

export default QuestionBox;
