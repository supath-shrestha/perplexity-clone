"use client";

import {
  AnswerBox,
  QuestionBox,
  FixedPromptBox,
  HelpMenu,
  PromptBox,
  PromptHeading,
  SuggestionBox,
} from "@/components/basics";
import ChatHeader from "@/components/basics/ChatHeader";
import { ChatWrapper, Footer, PageLayout, Sidebar } from "@/components/widgets";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [isInitialPrompt, setIsInitialPrompt] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState(false);

  const [userChatLog, setUserChatLog] = useState<
    Array<ChatCompletionMessageParam>
  >([
    // { role: "user", content: "define science in a single sentence" },
  ]);

  const [assistantChatLog, setAssistantChatLog] = useState<
    Array<ChatCompletionMessageParam>
  >([]);

  const [width, setWidth] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  });

  const getCompleteChatLog = ({
    arr1,
    arr2,
  }: {
    arr1: Array<ChatCompletionMessageParam>;
    arr2: Array<ChatCompletionMessageParam>;
  }) => {
    let resultArr = [];

    for (let i = 0; i < arr1.length; i++) {
      resultArr.push(arr1[i]);
      if (i < arr2.length) {
        resultArr.push(arr2[i]);
      }
    }

    return resultArr;
  };

  const getResponse = async (prompt: Array<ChatCompletionMessageParam>) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const promptSubmitHandler = async (prompt: string) => {
    setIsLoading(true);

    const newPrompt: ChatCompletionMessageParam = {
      role: "user",
      content: `${prompt}`,
    };

    setUserChatLog((prev) => [...prev, newPrompt]);

    if (userChatLog.length > 0) {
      setTimeout(() => {
        document.querySelector(".scrollable-container")?.scrollTo({
          top: document.querySelector(".scrollable-container")?.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    }

    try {
      const response = await getResponse([
        ...getCompleteChatLog({ arr1: userChatLog, arr2: assistantChatLog }),
        newPrompt,
      ]);

      setIsLoading(false);

      setAssistantChatLog((prev) => [
        ...prev,
        {
          role: response.data.role,
          content: response.data.content,
        },
      ]);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const queryUpdateSubmitHandler = useCallback(
    async ({ oldQuery, newQuery }: { oldQuery: string; newQuery: string }) => {
      let id = 0;
      setUserChatLog((prev) =>
        prev.map((chat, idx) => {
          if (chat.content === oldQuery) {
            id = idx;
            return {
              ...chat,
              content: newQuery,
            };
          } else {
            return chat;
          }
        })
      );

      setAssistantChatLog((prev) =>
        prev.map((chat, idx) => (idx === id ? { ...chat, content: "" } : chat))
      );

      try {
        setIsLoading(true);

        const response = await getResponse([
          { role: "user", content: `${newQuery}` },
        ]);

        setIsLoading(false);

        setAssistantChatLog((prev) =>
          prev.map((chat, idx) =>
            idx === id ? { ...chat, content: response.data.content } : chat
          )
        );
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    },
    []
  );

  return (
    <main>
      <div
        className="border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 
      dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark"
      >
        <div className="flex h-full min-h-[100dvh]">
          <Sidebar />

          <PageLayout>
            {isInitialPrompt ? (
              <div className="pt-md relative z-10 hidden w-full md:block">
                <div className="absolute w-full"></div>
              </div>
            ) : (
              <ChatHeader
                title={userChatLog[0]?.content as string}
              />
            )}

            <ChatWrapper isInitialPrompt={isInitialPrompt}>
              {isInitialPrompt ? (
                <>
                  <div
                    className="mt-lg w-full grow flex-col items-center justify-center md:mt-0 md:flex border-borderMain/50 ring-borderMain/50 divide-borderMain/50 
                  dark:divide-borderMainDark/50 dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"
                  >
                    <PromptHeading />

                    <PromptBox
                      setIsInitialPrompt={setIsInitialPrompt}
                      promptSubmitHandler={promptSubmitHandler}
                    />

                    {/* <SuggestionBox /> */}
                  </div>

                  <Footer />
                </>
              ) : (
                <>
                  <div
                    ref={containerRef}
                    className="max-w-[675px] divide-y-[1.5px]"
                  >
                    {userChatLog.map((chat, idx) => {
                      return (
                        <div
                          key={idx}
                          className="pb-24 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50
                            dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"
                        >
                          <QuestionBox
                            question={chat.content as string}
                            queryUpdateSubmitHanlder={queryUpdateSubmitHandler}
                          />

                          <AnswerBox
                            answer={assistantChatLog[idx]?.content as string}
                            isLoading={
                              isLoading && !assistantChatLog[idx]?.content
                            }
                          />
                        </div>
                      );
                      // }
                    })}
                  </div>

                  <FixedPromptBox
                    width={width}
                    promptSubmitHandler={promptSubmitHandler}
                    isLoading={isLoading}
                  />
                </>
              )}
            </ChatWrapper>

            <HelpMenu />
          </PageLayout>
        </div>
      </div>
    </main>
  );
}
