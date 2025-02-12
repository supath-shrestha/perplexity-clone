interface ISearchBarProps {
  placeholder: string;
  kbd: Array<string>;
  handler: () => void;
}

export default function SearchBar(props: ISearchBarProps) {
  const { placeholder, kbd, handler } = props;

  return (
    <div
      className="mx-md py-sm pl-md pr-sm hover:ring-super dark:hover:ring-superDark group flex flex-none cursor-pointer select-none items-center justify-between rounded-full border ring-1 ring-transparent transition duration-200 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-background dark:bg-backgroundDark"
      onClick={handler}
    >
      <div className="line-clamp-1 overflow-hidden text-clip light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
        {placeholder}
      </div>
      <div className="space-x-two flex items-center light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
        {kbd.map((key, idx) => (
          <div
            key={idx}
            className="px-xs flex h-5 min-w-5 items-center justify-center rounded border font-mono text-xs border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent"
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}
