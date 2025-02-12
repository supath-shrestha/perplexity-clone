export default function Chatbox() {
  return (
    <div className="erp-tab:p-0 erp-new_tab:p-0 md:gap-xs lg:pb-sm lg:pr-sm lg:pt-sm isolate flex h-auto max-h-screen w-full min-w-0 grow flex-col">
      <div className="erp-tab:rounded-none erp-new_tab:rounded-none erp-tab:shadow-none erp-new_tab:shadow-none erp-tab:shadow-left-sm erp-new_tab:shadow-left-sm flex-1 overflow-clip bg-clip-border shadow-sm lg:rounded-lg md:dark:border border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
        <div className="max-w-screen md:max-w-auto mx-auto flex w-full flex-col h-full">
         




          <div className="scrollable-container scrollbar-thin scrollbar-track-transparent scrollbar-thumb-idle dark:scrollbar-thumb-idleDark flex-1 basis-0 overflow-auto [scrollbar-gutter:stable]">
            <div className="erp-sidecar:p-md mx-auto h-full w-full max-w-screen-md px-md md:px-lg">
              <div className="sm:px-md md:px-lg isolate mx-auto size-full sm:max-w-screen-md">
                <div className="relative flex h-full flex-col">
                  


                  <div className="py-md flex items-center justify-between border-b md:hidden border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                    <div className="h-auto group w-40 md:w-52">
                      <svg
                        viewBox="0 0 400 91"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M196.978 27.8931H200.033V34.1872H196.079C192.979 34.1872 190.669 34.9333 189.14 36.4254C187.615 37.9176 186.85 40.3662 186.85 43.7711V64.401H180.606V28.0333H186.85V33.8367C186.85 34.1622 187.014 34.3274 187.337 34.3274C187.52 34.3274 187.659 34.2823 187.754 34.1872C187.848 34.0921 187.938 33.9068 188.032 33.6264C189.234 29.8058 192.219 27.8931 196.983 27.8931H196.978ZM237.763 35.6894C239.402 38.6036 240.227 42.1137 240.227 46.2146C240.227 50.3156 239.407 53.8257 237.763 56.7399C236.119 59.6541 233.993 61.8323 231.38 63.2794C228.767 64.7265 225.956 65.4476 222.951 65.4476C217.03 65.4476 212.868 63.0691 210.464 58.3122C210.28 57.9417 210.046 57.7514 209.768 57.7514C209.49 57.7514 209.351 57.8916 209.351 58.172V77.6853H203.107V28.0333H209.351V34.2573C209.351 34.5377 209.49 34.6779 209.768 34.6779C210.046 34.6779 210.275 34.4926 210.464 34.1171C212.868 29.3602 217.03 26.9817 222.951 26.9817C225.956 26.9817 228.767 27.7028 231.38 29.1499C233.993 30.597 236.119 32.7751 237.763 35.6894ZM233.983 46.2146C233.983 41.9234 232.841 38.5786 230.551 36.1801C228.261 33.7816 225.246 32.5799 221.496 32.5799C217.745 32.5799 214.73 33.7816 212.44 36.1801C210.151 38.5836 209.311 41.9284 209.311 46.2146C209.311 50.5009 210.151 53.8507 212.44 56.2492C214.73 58.6527 217.75 59.8494 221.496 59.8494C225.241 59.8494 228.261 58.6477 230.551 56.2492C232.841 53.8507 233.983 50.5009 233.983 46.2146ZM134.595 35.7445C136.235 38.6587 137.059 42.1688 137.059 46.2697C137.059 50.3707 136.24 53.8808 134.595 56.795C132.951 59.7092 130.825 61.8874 128.213 63.3345C125.6 64.7816 122.788 65.5026 119.783 65.5026C113.863 65.5026 109.7 63.1242 107.296 58.3673C107.112 57.9967 106.879 57.8065 106.601 57.8065C106.322 57.8065 106.183 57.9467 106.183 58.2271V77.7404H99.9446V28.0883H106.188V34.3124C106.188 34.5928 106.327 34.733 106.606 34.733C106.884 34.733 107.112 34.5477 107.301 34.1722C109.705 29.4153 113.867 27.0368 119.788 27.0368C122.793 27.0368 125.605 27.7579 128.218 29.205C130.83 30.6521 132.956 32.8302 134.6 35.7445H134.595ZM130.815 46.2697C130.815 41.9785 129.673 38.6336 127.383 36.2352C125.093 33.8367 122.078 32.6349 118.328 32.6349C114.578 32.6349 111.563 33.8367 109.273 36.2352C106.983 38.6387 106.144 41.9835 106.144 46.2697C106.144 50.5559 106.983 53.9058 109.273 56.3043C111.563 58.7078 114.578 59.9045 118.328 59.9045C122.078 59.9045 125.093 58.7028 127.383 56.3043C129.673 53.9058 130.815 50.5559 130.815 46.2697ZM169.112 52.8543H175.703C174.824 56.2592 173.031 59.2085 170.329 61.7021C167.622 64.1957 163.748 65.4425 158.706 65.4425C154.911 65.4425 151.573 64.6614 148.682 63.0991C145.791 61.5369 143.561 59.3137 141.986 56.4195C140.412 53.5303 139.627 50.1253 139.627 46.2096C139.627 42.294 140.392 38.889 141.917 35.9998C143.442 33.1106 145.583 30.8824 148.335 29.3201C151.086 27.7579 154.31 26.9767 158.011 26.9767C161.711 26.9767 164.776 27.7479 167.344 29.2851C169.912 30.8223 171.829 32.8653 173.101 35.404C174.372 37.9477 175.008 40.7317 175.008 43.7611V47.9572H146.219C146.447 51.5925 147.664 54.4867 149.859 56.6298C152.055 58.7729 155.005 59.8494 158.706 59.8494C161.711 59.8494 164.016 59.2335 165.61 57.9967C167.205 56.7599 168.372 55.0475 169.112 52.8543ZM146.288 42.7146H168.074C168.074 39.545 167.264 37.0614 165.645 35.2638C164.026 33.4712 161.483 32.5699 158.015 32.5699C154.777 32.5699 152.129 33.4461 150.073 35.1937C148.017 36.9412 146.755 39.4498 146.293 42.7096L146.288 42.7146ZM245.169 64.396H251.413V14.043H245.169V64.401V64.396ZM331.801 24.0625H339.093V16.1911H331.801V24.0625ZM357.526 58.9782C356.393 59.0933 355.708 59.1534 355.479 59.1534C355.156 59.1534 354.898 59.0583 354.714 58.873C354.531 58.6877 354.436 58.4324 354.436 58.1019C354.436 57.8716 354.496 57.1806 354.61 56.0389C354.724 54.8972 354.784 53.1347 354.784 50.7612V33.361H363.69L361.937 28.0333H354.789V18.2391H348.545V28.0283H341.755V33.356H348.545V52.5038C348.545 56.5146 349.519 59.4989 351.461 61.4568C353.403 63.4146 356.363 64.396 360.342 64.396H365.2V58.8029H362.771C360.412 58.8029 358.663 58.863 357.531 58.9782H357.526ZM394.059 28.0283L383.723 58.5425C383.583 58.9181 383.365 59.4088 382.655 59.4088C381.944 59.4088 381.726 58.9181 381.587 58.5425L371.25 28.0283H364.882L376.853 64.396H381.085C381.363 64.396 381.572 64.4211 381.711 64.4661C381.85 64.5112 381.964 64.6264 382.059 64.8166C382.242 65.097 382.217 65.5177 381.989 66.0735L380.047 71.3862C379.769 72.0872 379.237 72.4377 378.452 72.4377C378.174 72.4377 377.529 72.3776 376.51 72.2624C375.492 72.1473 374.176 72.0872 372.556 72.0872H367.49V77.6803H374.151C378.035 77.6803 380.375 77.0143 382.386 75.6874C384.398 74.3605 385.958 72.0171 387.07 68.6572L400 29.4203V28.0233H394.059V28.0283ZM311.406 41.5979L301.626 28.0283H294.756V29.4253L306.478 45.1631L292.188 62.999V64.396H299.197L310.576 49.7798L321.191 64.396H327.922V62.999L315.504 46.2146L328.965 29.5004V28.0333H321.956L311.411 41.603L311.406 41.5979ZM332.467 64.396H338.71V28.0333H332.467V64.401V64.396ZM292.471 52.8543C291.592 56.2592 289.799 59.2085 287.097 61.7021C284.39 64.1957 280.515 65.4425 275.474 65.4425C271.679 65.4425 268.341 64.6614 265.45 63.0991C262.559 61.5369 260.329 59.3137 258.754 56.4195C257.18 53.5303 256.395 50.1253 256.395 46.2096C256.395 42.294 257.16 38.889 258.685 35.9998C260.21 33.1106 262.35 30.8824 265.102 29.3201C267.854 27.7579 271.078 26.9767 274.778 26.9767C278.479 26.9767 281.543 27.7479 284.111 29.2851C286.679 30.8223 288.597 32.8653 289.868 35.404C291.14 37.9477 291.776 40.7317 291.776 43.7611V47.9572H262.986C263.215 51.5925 264.432 54.4867 266.627 56.6298C268.823 58.7729 271.773 59.8494 275.474 59.8494C278.479 59.8494 280.783 59.2335 282.378 57.9967C283.972 56.7599 285.14 55.0475 285.88 52.8543H292.471ZM263.056 42.7146H284.842C284.842 39.545 284.032 37.0614 282.413 35.2638C280.793 33.4712 278.25 32.5699 274.783 32.5699C271.545 32.5699 268.897 33.4461 266.841 35.1937C264.784 36.9412 263.523 39.4498 263.061 42.7096L263.056 42.7146Z"
                          className=" block fill-textMain dark:fill-textMainDark"
                        ></path>
                        <path
                          d="M38.6936 29.9832L12.8633 5.88983V29.9832H38.6936Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M39.5005 29.9832L65.3308 5.88983V29.9832H39.5005Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M38.7227 2L38.7227 90.2534"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M64.5246 53.7584L38.6943 30.0068V62.9404L64.5246 85.9724V53.7584Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M12.8924 53.7584L38.7227 30.0068V62.9404L12.8924 85.9724V53.7584Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M2.28711 29.9832V64.4236H12.8863V53.7348L38.7226 29.9832H2.28711Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M38.6943 30.3L64.5246 54.0515V64.7403H75.2872V30.3L38.6943 30.3Z"
                          className="stroke-super dark:stroke-superDark transition-all duration-300"
                          strokeWidth="4.30504"
                          strokeMiterlimit="10"
                        ></path>
                      </svg>
                    </div>
                    <div className="gap-x-sm flex items-center"></div>
                  </div>

                  <div className="mt-lg w-full grow flex-col items-center justify-center md:mt-0 md:flex border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                    <div className="relative w-full">
                      <div className="mb-lg pb-xs bottom-0 w-full md:absolute md:text-center">
                        <div className="md:mb-lg"></div>
                        <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                          <span className="font-regular font-display text-3xl md:text-4xl">
                            What do you want to know?
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* prompt box  */}
                    <div className="w-full">
                      <div>
                        <span className="grow block">
                          <div className="rounded-md">
                            <div className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center text-textMain placeholder-textOff border border-borderMain focus:ring-1 dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background shadow-sm rounded-t-lg rounded-b-lg px-md pt-3 pb-sm grid items-center">
                              <div className="grid-rows-1fr-auto grid grid-cols-3">
                                <div className="col-start-1 col-end-4 pb-sm overflow-hidden relative flex h-full w-full">
                                  <textarea
                                    autoFocus
                                    id="promptHolder"
                                    placeholder="Ask anything..."
                                    className="overflow-auto max-h-[45vh] lg:max-h-[40vh] sm:max-h-[25vh] outline-none w-full font-sans caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark placeholder:select-none bg-background text-textMain placeholder-textOff  scrollbar-thumb-idle dark:scrollbar-thumb-idleDark scrollbar-thin scrollbar-track-transparent"
                                    autoComplete="off"
                                    data-1p-ignore="true"
                                  ></textarea>
                                </div>
                                <div className="bg-background dark:bg-offsetDark gap-sm flex rounded-l-lg col-start-1 row-start-2 -ml-2">
                                  <div className="gap-sm flex">
                                    <span>
                                      <button
                                        type="button"
                                        className="border border-borderMain/50 dark:border-borderMainDark/50 text-textOff dark:text-textOffDark  md:hover:text-textMain md:dark:hover:text-textMainDark rounded-md font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 pl-3 pr-3.5"
                                      >
                                        <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                                          <div className="flex items-center justify-center size-4">
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="far"
                                              data-icon="shuffle"
                                              className="svg-inline--fa fa-shuffle fa-fw fa-1x "
                                              role="img"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M425 31l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L352 152c-12.6 0-24.4 5.9-32 16l-46 61.3-30-40 37.6-50.1C298.2 117 324.3 104 352 104l78.1 0L391 65c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM204 322.7l-37.6 50.1C149.8 395 123.7 408 96 408l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c12.6 0 24.4-5.9 32-16l46-61.3 30 40zM391 287c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L352 408c-27.7 0-53.8-13-70.4-35.2L128 168c-7.6-10.1-19.4-16-32-16l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c27.7 0 53.8 13 70.4 35.2L320 344c7.6 10.1 19.4 16 32 16l78.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9z"
                                              ></path>
                                            </svg>
                                          </div>
                                          <div className="text-align-center relative truncate leading-loose -mb-px">
                                            Auto
                                          </div>
                                          <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="chevron-down"
                                            className="svg-inline--fa fa-chevron-down fa-xs opacity-50"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                            ></path>
                                          </svg>
                                        </div>
                                      </button>
                                    </span>
                                    <span>
                                      <button
                                        type="button"
                                        className="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark ml-sm font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                                        data-state="closed"
                                      >
                                        <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                                          <div>
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fak"
                                              data-icon="sources"
                                              className="svg-inline--fa fa-sources "
                                              role="img"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                fill="currentColor"
                                                d="M262.4 32a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 1 1 0-153.6zm0 51.2a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 1 0 0-51.2zM416 185.6a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 1 1 0-153.6zm0 51.2a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 1 0 0-51.2zM108.8 185.6a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 1 1 0-153.6zm0 51.2a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 1 0 0-51.2zM262.4 339.2a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 1 1 0-153.6zm0 51.2a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 1 0 0-51.2z"
                                              ></path>
                                            </svg>
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
                                          <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="paperclip"
                                            className="svg-inline--fa fa-paperclip fa-fw fa-1x "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M375 73c-26-26-68.1-26-94.1 0L89 265C45.3 308.6 45.3 379.4 89 423s114.4 43.6 158.1 0L399 271c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L281 457c-62.4 62.4-163.5 62.4-225.9 0S-7.4 293.4 55 231L247 39C291.7-5.7 364.3-5.7 409 39s44.7 117.2 0 161.9L225.2 384.7c-31.6 31.6-83.6 28.7-111.5-6.2c-23.8-29.8-21.5-72.8 5.5-99.8L271 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L153.2 312.7c-9.7 9.7-10.6 25.1-2 35.8c10 12.5 28.7 13.6 40 2.2L375 167c26-26 26-68.1 0-94.1z"
                                            ></path>
                                          </svg>
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
                                    id="submitBtn"
                                    type="submit"
                                    disabled
                                    className="bg-idle text-textOff dark:bg-idleDark dark:text-textOffDark cursor-default opacity-50 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full whitespace-nowrap inline-flex text-sm h-8 aspect-square"
                                  >
                                    <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                                      <div className="flex items-center justify-center size-4">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="far"
                                          data-icon="arrow-right"
                                          className="svg-inline--fa fa-arrow-right fa-fw fa-1x "
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 448 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
                                          ></path>
                                        </svg>
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

                    <div>
                      <div
                        className="grid grid-cols-6 grid-rows-[64px_64px] mt-lg gap-sm"
                        //   style="grid-template-rows:64px 64px"
                      >
                        <div
                          className="col-span-2 row-span-2"
                          tabIndex={0}
                          //    style="opacity:1"
                        >
                          <div className="cursor-pointer select-none overflow-hidden rounded-lg h-full w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
                            <div className="relative h-full w-full bg-offsetDark">
                              <div className="relative h-full">
                                <img
                                  src="https://r2cdn.perplexity.ai/deepseek_cropped.png"
                                  className="absolute inset-0 size-full object-cover object-center block dark:hidden"
                                  alt="Try Deepseek R1"
                                  // style="mask-image:linear-gradient(to bottom, black, transparent);-webkit-mask-image:linear-gradient(to bottom, black, transparent)"
                                />
                                <img
                                  src="https://r2cdn.perplexity.ai/deepseek_cropped.png"
                                  className="absolute inset-0 size-full object-cover object-center hidden dark:block"
                                  alt="Try Deepseek R1"
                                  // style="mask-image:linear-gradient(to bottom, black, transparent);-webkit-mask-image:linear-gradient(to bottom, black, transparent)"
                                />
                              </div>
                              <div className="absolute left-2 top-2">
                                <div className="flex items-center justify-center rounded-md bg-offsetPlusDark/50 backdrop-blur h-[24px] w-[24px]">
                                  <div className="h-auto group  w-[16px] h-[16px]">
                                    <svg
                                      viewBox="0 0 101 116"
                                      stroke="none"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        className="stroke-textMainDark"
                                        d="M86.4325 6.53418L50.4634 36.9696H86.4325V6.53418Z"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M50.4625 36.9696L17.2603 6.53418V36.9696H50.4625Z"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M50.4634 1L50.4634 114.441"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M83.6656 70.172L50.4634 36.9697V79.3026L83.6656 108.908V70.172Z"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M17.2603 70.172L50.4625 36.9697V78.4497L17.2603 108.908V70.172Z"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M3.42627 36.9697V81.2394H17.2605V70.172L50.4628 36.9697H3.42627Z"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                      <path
                                        d="M50.4634 36.9697L83.6656 70.172V81.2394H97.4999V36.9697L50.4634 36.9697Z"
                                        className="stroke-textMainDark"
                                        strokeWidth="5.53371"
                                        strokeMiterlimit="10"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0">
                                <div className="p-sm flex h-full flex-col justify-center">
                                  <div className="gap-2xs p-xs flex flex-col items-start">
                                    <div className="line-clamp-2 text-ellipsis leading-tight white font-sans text-sm text-white selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                      Try Deepseek R1
                                    </div>
                                    <div className="line-clamp-2 text-ellipsis leading-tight white font-sans text-xs font-medium text-white selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                      <span className="font-normal">
                                        Now available in Pro Search and hosted
                                        in the US
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          className="col-span-2 row-span-1"
                          href="/page/openai-rebrands-olNMmsxrR2e8pTl74GelVA"
                          tabIndex={0}
                          // style="opacity:1"
                        >
                          <div className="cursor-pointer select-none overflow-hidden rounded-lg h-full w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
                            <div className="h-full w-full flex flex-row items-center">
                              <div className="ml-auto pl-sm">
                                <div className="relative size-[40px] overflow-hidden rounded-md">
                                  <img
                                    src="https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1738813498/url_uploads/tW68oW9kC2HcoeJv7YT3gc-1280-80_bg0vjt.png"
                                    alt="OpenAI Rebrands"
                                    className="size-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="p-sm flex h-full flex-col justify-center pt-sm">
                                <div className="px-xs line-clamp-2 text-ellipsis leading-tight default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                  OpenAI Rebrands
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a
                          className="col-span-2 row-span-1"
                          href="/page/banks-sell-5-5b-of-x-debt-dc_WY3gsRRKb00P99U6VBg"
                          tabIndex={0}
                          // style="opacity:1"
                        >
                          <div className="cursor-pointer select-none overflow-hidden rounded-lg h-full w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
                            <div className="h-full w-full flex flex-row items-center">
                              <div className="ml-auto pl-sm">
                                <div className="relative size-[40px] overflow-hidden rounded-md">
                                  <img
                                    src="https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1738857870/getty_uploads/1499013102_x9saza.png"
                                    alt="Banks Sell $5.5B of X Debt"
                                    className="size-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="p-sm flex h-full flex-col justify-center pt-sm">
                                <div className="px-xs line-clamp-2 text-ellipsis leading-tight default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                  Banks Sell $5.5B of X Debt
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a
                          className="col-span-2 row-span-1"
                          href="/search/new?q=What is Samsung&#x27;s market cap?&amp;source=homepage_widget"
                          tabIndex={0}
                          // style="opacity:1"
                        >
                          <div className="cursor-pointer select-none overflow-hidden rounded-lg h-full w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
                            <div className="px-sm py-xs relative h-full">
                              <div className="gap-xs p-xs flex h-full flex-col">
                                <div className="flex flex-grow items-center">
                                  <div
                                    className="line-clamp-2 text-ellipsis default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                                    //   style="line-height:1.3"
                                  >
                                    What is Samsung&#x27;s market cap?
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a
                          className="col-span-2 row-span-1"
                          href="/search/new?q=Price of Bitcoin over time?&amp;source=homepage_widget"
                          tabIndex={0}
                          // style="opacity:1"
                        >
                          <div className="cursor-pointer select-none overflow-hidden rounded-lg h-full w-full border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-offset dark:bg-offsetDark">
                            <div className="px-sm py-xs relative h-full">
                              <div className="gap-xs p-xs flex h-full flex-col">
                                <div className="flex flex-grow items-center">
                                  <div
                                    className="line-clamp-2 text-ellipsis default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark"
                                    //   style="line-height:1.3"
                                  >
                                    Price of Bitcoin over time?
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pb-md hidden md:block">
                    <div>
                      <div className="gap-x-md gap-y-sm px-sm pb-2xl flex flex-wrap items-center md:justify-center md:px-0 md:pb-0 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
                        <a href="/pro">
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Pro
                            </div>
                          </div>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.perplexity.ai/enterprise"
                        >
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Enterprise
                            </div>
                          </div>
                        </a>
                        <a target="_blank" href="https://www.perplexity.supply">
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Store
                            </div>
                          </div>
                        </a>
                        <a target="_blank" href="https://www.perplexity.ai/hub">
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Blog
                            </div>
                          </div>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.perplexity.ai/hub/careers"
                        >
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Careers
                            </div>
                          </div>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.perplexity.com/education"
                        >
                          <div>
                            <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                              Education
                            </div>
                          </div>
                        </a>
                        <div className="gap-xs decoration-textOff/40 dark:decoration-textOffDark/40 relative flex cursor-pointer items-center justify-stretch overflow-hidden hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                          English (English)
                          <div className="absolute left-0 top-0 opacity-0">
                            <div>
                              <div className="default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                <div className="relative flex items-center">
                                  <select
                                    id="interface-language-select"
                                    className="border-borderMain/75 bg-background p-sm pr-lg outline-super ring-borderMain/75 dark:border-borderMainDark dark:bg-offsetDark dark:outline-superDark dark:ring-borderMainDark w-full appearance-none rounded border transition duration-300 focus:outline-none cursor-pointer hover:ring-1"
                                    aria-label="Language:"
                                  >
                                    <option value="en-US">
                                      English (English)
                                    </option>
                                    <option value="fr-FR">
                                      French (Français)
                                    </option>
                                    <option value="de-DE">
                                      Standard German (Deutsch)
                                    </option>
                                    <option value="ja-JP">
                                      Japanese (日本語)
                                    </option>
                                    <option value="ko-KR">
                                      Korean (한국어)
                                    </option>
                                    <option value="zh-CN">
                                      Simplified Chinese (简体中文)
                                    </option>
                                    <option value="es-ES">
                                      Spanish (Español)
                                    </option>
                                    <option value="hi-IN">Hindi (हिंदी)</option>
                                    <option value="it-IT">
                                      Italian (Italiano)
                                    </option>
                                    <option value="pt-BR">
                                      Brazilian Portuguese (Português do Brasil)
                                    </option>
                                    <option value="cs-CZ">
                                      Czech (Čeština)
                                    </option>
                                    <option value="hr-HR">
                                      Croatian (Hrvatski)
                                    </option>
                                    <option value="hu-HU">
                                      Hungarian (Magyar)
                                    </option>
                                    <option value="pl-PL">
                                      Polish (Polski)
                                    </option>
                                    <option value="pt-PT">
                                      Portuguese (Português)
                                    </option>
                                    <option value="sk-SK">
                                      Slovak (Slovenčina)
                                    </option>
                                    <option value="mk-MK">
                                      Macedonian (Македонски)
                                    </option>
                                    <option value="sr-Cyrl-ME">
                                      Montenegrin (Српски)
                                    </option>
                                  </select>
                                  <div className="right-sm pointer-events-none absolute light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="chevron-down"
                                      className="svg-inline--fa fa-chevron-down "
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="chevron-down"
                            className="svg-inline--fa fa-chevron-down fa-fw fa-xs text-textOff dark:text-textOffDark"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-md right-md m-sm fixed hidden md:block">
            <span className="block">
              <button
                aria-label="Help menu"
                type="button"
                className="bg-textMain text-textMainDark dark:bg-textMainDark dark:text-light-text hover:text-superDuper hover:dark:text-superDuper font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"
              >
                <div className="flex items-center min-w-0 font-medium gap-1.5 justify-center gap-sm">
                  <div className="flex items-center justify-center size-4">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="question"
                      className="svg-inline--fa fa-question fa-fw fa-1x "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
