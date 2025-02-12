interface IPromptHeadingProps {
  heading?: string;
}

export default function PromptHeading(props: IPromptHeadingProps) {
  const { heading = "What do you want to know?" } = props;

  return (
    <div className="relative w-full">
      <div className="mb-lg pb-xs bottom-0 w-full md:absolute md:text-center">
        <div className="md:mb-lg"></div>
        <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
          <span className="font-regular font-display text-3xl md:text-4xl">
            {heading}
          </span>
        </div>
      </div>
    </div>
  );
}
