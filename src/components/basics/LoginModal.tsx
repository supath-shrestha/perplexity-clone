export default function LoginModal() {
  return (
    <div>
      <div className="items-stretch md:items-center fill-mode-both fixed inset-0 z-[100] bg-backdrop/70 backdrop-blur-sm animate-in fade-in ease-outExpo duration-200"></div>
      <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
        <div className="duration-250 fill-mode-both animate-in fade-in zoom-in-[0.98] ease-in">
          <div>
            <div
              className="bg-background dark:bg-backgroundDark shadow-md overflow-y-auto scrollbar-thin scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-track-transparent fill-mode-both w-screen md:h-screen h-[100dvh] flex flex-col"
              style={{ transform: "none" }}
            >
              <div className="right-sm top-sm fixed  md:absolute"></div>

              <div className="flex h-full w-[100vw] grow flex-col md:w-[unset] md:grow-[unset] border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                <div className="px-md py-sm md:py-md sticky top-0 z-[22] w-full h-8 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
                  <div className="gap-sm md:gap-md flex items-center">
                    <div className="right-sm top-sm absolute">
                      <button
                        data-testid="close-modal"
                        type="button"
                        className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark 
                         dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button  justify-center text-center items-center rounded-full
                          cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                      >
                        <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                          <div className="flex shrink-0 items-center justify-center size-4">
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
                    </div>
                  </div>
                </div>

                <div className="grow flex flex-col justify-center md:pt-lg md:pb-lg py-md px-md">
                  <div className="px-lg mx-auto max-w-sm md:max-w-lg">
                    <h1 className="font-base text-pretty text-center font-serif leading-[1.3] md:text-4xl default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                      Welcome
                    </h1>
                    <div className="mb-lg mt-xs text-center text-sm light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                      Sign in or sign up to continue
                    </div>
                  </div>

                  <div data-testid="login-modal">
                    <div className="mx-auto max-w-sm">
                      <div className="space-y-xs">
                        <button
                          type="button"
                          className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap flex w-full text-sm h-8 pl-3 pr-3.5"
                        >
                          <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center w-full">
                            <div>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google"
                                className="svg-inline--fa fa-google fa-fw "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                ></path>
                              </svg>
                            </div>
                            <div className="text-align-center relative truncate leading-loose -mb-px">
                              Continue with Google
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap flex w-full text-sm h-8 pl-3 pr-3.5"
                        >
                          <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center w-full">
                            <div>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="apple"
                                className="svg-inline--fa fa-apple fa-fw fa-lg relative -top-px left-[2px]"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                ></path>
                              </svg>
                            </div>
                            <div className="text-align-center relative truncate leading-loose -mb-px">
                              Continue with Apple
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap flex w-full text-sm h-8 pl-3 pr-3.5"
                        >
                          <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center w-full">
                            <div className="flex shrink-0 items-center justify-center size-4">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="key"
                                className="svg-inline--fa fa-key fa-fw fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
                                ></path>
                              </svg>
                            </div>
                            <div className="text-align-center relative truncate leading-loose -mb-px">
                              Single sign-on (SSO)
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="my-4 h-0 w-full shrink-0 border-t border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"></div>
                      <div className="space-y-xs border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                        <div>
                          <div className="rounded-full">
                            <div className="relative flex items-center">
                              <input
                                placeholder="Enter your email"
                                className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] rounded-b-[4px] rounded-t-[4px] py-sm md:text-sm px-md pr-md"
                                autoComplete="off"
                                type="email"
                              />
                              <div className="right-sm gap-sm bg-background dark:bg-offsetDark absolute flex items-center rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="button"
                            className="bg-idle text-textOff dark:bg-idleDark dark:text-textOffDark w-full h-[36px] mt-xs font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-default opacity-50 whitespace-nowrap inline-flex text-sm h-8 pl-3.5 pr-3.5"
                            disabled
                          >
                            <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center">
                              <div className="text-align-center relative truncate leading-loose -mb-px">
                                Continue with email
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
