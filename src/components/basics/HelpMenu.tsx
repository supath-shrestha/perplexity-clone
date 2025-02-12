export default function HelpMenu() {
  return (
    <div className="bottom-md right-md m-sm fixed hidden md:block">
      <span className="block">
        <button
          aria-label="Help menu"
          type="button"
          className="bg-textMain text-textMainDark dark:bg-textMainDark dark:text-light-text hover:text-superDuper hover:dark:text-superDuper
           focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none relative group/button 
            justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center
             whitespace-nowrap inline-flex text-sm h-8 aspect-square"
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
  );
}
