import useQueryApiRequest from "@/hooks/use-query-api-request";
import { Loader2Icon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import RepositoryCard from "./components/repository-card";
import SkeletonRepositoriesUser from "./components/skeleton-repositories-user";
import { ReponseGithubRepos, RepositoriesUserProps } from "./types";

const RepositoriesUser = (props: RepositoriesUserProps) => {
  const showReposPerPage = 5;
  const { username } = props;
  const [page, setPage] = useState<number>(1);
  const [repos, setRepos] = useState<ReponseGithubRepos[]>([]);
  const [isLoadingShowMore, setIsLoadingShowMore] = useState<boolean>(false);
  const [isEndOfData, setIsEndOfData] = useState<boolean>(false);

  const { data, isLoading } = useQueryApiRequest<ReponseGithubRepos[]>({
    key: "github-user-repos",
    config: {
      params: {
        username,
      },
      query: {
        per_page: showReposPerPage,
        page,
      },
    },
    options: {
      enabled: Boolean(username),
    },
  });

  useEffect(() => {
    if (data) {
      setRepos((prev) => (page === 1 ? data : [...prev, ...data]));
      setIsLoadingShowMore(false);
      if (data.length < showReposPerPage) {
        setIsEndOfData(true);
      }
    }
  }, [data, page]);

  const handleClickShowMore = useCallback(() => {
    setIsLoadingShowMore(true);
    setPage((prev) => prev + 1);
  }, []);

  if (!repos.length && !isLoading) {
    return (
      <div className="px-3 py-1 bg-neutral-300">
        <p className="text-[9pt] md:text-[11pt]">
          No repositories shown for username "{username}"
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {isLoading && repos.length == 0 ? (
        <SkeletonRepositoriesUser />
      ) : (
        <>
          {repos?.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}

          {!isEndOfData && (
            <div className="self-end">
              {isLoadingShowMore ? (
                <span className="flex gap-1 items-center">
                  <Loader2Icon className="animate-spin" size={16} /> Load more
                  repositories...
                </span>
              ) : (
                <p
                  className="cursor-pointer underline text-blue-500 hover:text-blue-600"
                  onClick={handleClickShowMore}
                >
                  Show more repositories {">>"}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RepositoriesUser;
