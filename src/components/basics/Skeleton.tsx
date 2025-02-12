export default function Skeleton() {
  return (
    <div className="bg-offset dark:bg-offsetDark rounded-lg space-y-3 p-4 pr-16">
      <div className="h-1.5 bg-[#767979] rounded-sm animate-pulse"></div>
      <div className="h-1.5 bg-[#767979] rounded-sm animate-pulse"></div>
      <div className="h-1.5 w-4/5 bg-[#767979] rounded-sm animate-pulse"></div>
      <div className="h-1.5 w-1/5 bg-[#767979] rounded-sm animate-pulse"></div>
    </div>
  );
}
