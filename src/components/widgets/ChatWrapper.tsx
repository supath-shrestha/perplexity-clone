interface IChatWrapperProps {
  isInitialPrompt: boolean;
  children: React.ReactNode;
}

export default function ChatWrapper(props: IChatWrapperProps) {
  const { isInitialPrompt, children } = props;
  return (
    <div className="scrollable-container scrollbar-thin scrollbar-track-transparent scrollbar-thumb-idle dark:scrollbar-thumb-idleDark flex-1 basis-0 overflow-auto [scrollbar-gutter:stable]">
      <div className={`erp-sidecar:p-md mx-auto h-full w-full ${isInitialPrompt?"max-w-screen-md":"max-w-threadWidth"} px-md md:px-lg`}>
        {isInitialPrompt ? (
          <div className="sm:px-md md:px-lg isolate mx-auto size-full sm:max-w-screen-md">
            <div className="relative flex h-full flex-col">{children}</div>
          </div>
        ) : (
          <div className="max-w-threadWidth mx-auto size-full pb-[144px]">
            <div className="relative border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
              <div>{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
