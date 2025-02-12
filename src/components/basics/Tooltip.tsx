"use cilent";

import { useMemo } from "react";

interface ITooltipProps {
  text: string;
  pos?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
  className?: string;
}

export default function Tooltip(props: ITooltipProps) {
  const { text, pos = "BOTTOM", className = "" } = props;

  const posStyle = useMemo(() => {
    switch (pos) {
      case "TOP":
        return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
      case "RIGHT":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      case "BOTTOM":
        return "top-full mt-2 left-1/2 transform -translate-x-1/2";
      case "LEFT":
        return "right-full mr-2 top-1/2 transform -translate-y-1/2";
    }
  }, [pos]);

  return (
    <div
      className={`absolute z-[100] bg-offsetPlus text-xs font-medium rounded py-1 px-2 hidden group-hover:block transition-all duration-300 ${posStyle} ${className}`}
    >
      {text}
    </div>
  );
}
