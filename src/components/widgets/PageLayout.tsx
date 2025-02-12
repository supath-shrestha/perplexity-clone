export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="erp-tab:p-0 erp-new_tab:p-0 md:gap-xs lg:pb-sm lg:pr-sm lg:pt-sm isolate flex h-auto max-h-screen w-full min-w-0 grow flex-col">
      <div className="erp-tab:rounded-none erp-new_tab:rounded-none erp-tab:shadow-none erp-new_tab:shadow-none erp-tab:shadow-left-sm erp-new_tab:shadow-left-sm flex-1 overflow-clip bg-clip-border shadow-sm lg:rounded-lg md:dark:border border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark">
        <div className="max-w-screen md:max-w-auto mx-auto flex w-full flex-col h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
