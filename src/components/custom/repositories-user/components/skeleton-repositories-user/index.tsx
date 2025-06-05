import { Skeleton } from "@/components/ui/skeleton";

const SkeletonRepositoriesUser = () => {
  return Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
    <Skeleton key={i} className="h-[70pt] w-full rounded-none" />
  ));
};

export default SkeletonRepositoriesUser;
