import { Skeleton } from "@/components/ui/skeleton";

const SkeletonAccordionUsers = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[20px] w-[60%] rounded-none" />
      {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
        <Skeleton key={i} className="h-[56px] w-full rounded-none" />
      ))}
    </div>
  );
};

export default SkeletonAccordionUsers;
