import { Star } from "lucide-react";
import { RepositoryCardProps } from "./types";

const RepositoryCard = (props: RepositoryCardProps) => {
  const { name, description, stargazers_count } = props;
  return (
    <div className="px-3 pt-2 pb-4 min-h-[70pt] bg-neutral-300">
      <div className="flex flex-row justify-between items-center ">
        <p className="text-[12pt] md:text-lg font-semibold line-clamp-1">{name}</p>
        <div className="flex items-center gap-1">
          <span className="text-[12pt] text-lg font-semibold">{stargazers_count}</span>
          <Star size={15} fill="#000" />
        </div>
      </div>
      <p className="text-xs line-clamp-3">{description}</p>
    </div>
  );
};

export default RepositoryCard;
