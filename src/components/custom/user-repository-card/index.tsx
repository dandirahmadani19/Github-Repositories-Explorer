import { Star } from "lucide-react";
import { UserRepositoryProps } from "./types";

const UserRepositoryCard = (props: UserRepositoryProps) => {
  const { title, children } = props;
  return (
    <div className="px-3 pt-2 pb-4 min-h-[70pt] bg-neutral-300">
      <div className="flex flex-row justify-between items-center ">
        <p className="text-lg font-semibold line-clamp-1">{title}</p>
        <div className="flex items-center gap-1">
          <span className="text-md font-semibold">12</span>
          <Star size={15} fill="#000" />
        </div>
      </div>
      <p className="text-xs line-clamp-3">{children}</p>
    </div>
  );
};

export default UserRepositoryCard;
