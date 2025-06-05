import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useInfiniteApiQueryRequest from "@/hooks/use-infinite-query-api-request";
import { Loader2Icon } from "lucide-react";
import RepositoriesUser from "../repositories-user";
import SkeletonAccordionUsers from "./components/skeleton-accordion-users";
import { AccordionUsersProps, ResponseGithubUsers } from "./types";
import { useEffect, useState } from "react";

const AccordionUsers = (props: AccordionUsersProps) => {
  const { search } = props;
  const [openAccordion, setOpenAccordion] = useState<string | undefined>();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteApiQueryRequest<ResponseGithubUsers>({
      key: "github-user-search",
      config: {
        query: {
          q: search,
          per_page: 15,
        },
      },
      options: {
        enabled: Boolean(search),
        getNextPageParam: (lastPage, allPages) => {
          const fetchedCount = allPages.reduce(
            (sum, page) => sum + (page.items?.length ?? 0),
            0
          );
          return fetchedCount < lastPage.total_count
            ? allPages.length + 1
            : undefined;
        },
      },
    });

  useEffect(() => {
    if (openAccordion && !isLoading) {
      const timeout = setTimeout(() => {
        const el = document.getElementById(openAccordion);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [openAccordion, isLoading]);

  if (isLoading || !data) {
    return <SkeletonAccordionUsers />;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs md:text-[11pt]">
        {data.pages[0].total_count > 0 ? "Showing users" : "No users shown"} for
        "{search}"
      </p>

      <Accordion
        type="single"
        collapsible
        value={openAccordion}
        onValueChange={setOpenAccordion}
        className="w-full flex flex-col gap-3"
      >
        {data.pages.flatMap((page) =>
          page.items.map((user) => (
            <AccordionItem
              key={user.id}
              value={`value-${user.id}`}
              id={`value-${user.id}`}
            >
              <AccordionTrigger>{user.login}</AccordionTrigger>
              <AccordionContent>
                <RepositoriesUser username={user.login} />
              </AccordionContent>
            </AccordionItem>
          ))
        )}
      </Accordion>

      {hasNextPage && (
        <div className="self-center">
          {isFetchingNextPage ? (
            <span className="flex gap-1 items-center">
              <Loader2Icon className="animate-spin" size={16} /> Load more
              users...
            </span>
          ) : (
            <p
              className="cursor-pointer underline text-blue-500 hover:text-blue-600"
              onClick={() => fetchNextPage()}
            >
              Load more users
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionUsers;
