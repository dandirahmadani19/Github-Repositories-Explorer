import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RepositoriesUser from "../repositories-user";
import SkeletonAccordionUsers from "./components/skeleton-accordion-users";
import { AccordionUsersProps } from "./types";

const AccordionUsers = (props: AccordionUsersProps) => {
  const { data, isLoading, search } = props;

  if (isLoading || !data) {
    return <SkeletonAccordionUsers />;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs md:text-[11pt]">{data.total_count > 0 ? 'Showing users' : 'No users shown'} for "{search}"</p>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-3"
      >
        {data.items.map((user) => (
          <AccordionItem key={user.id} value={`value-${user.id}`}>
            <AccordionTrigger>{user.login}</AccordionTrigger>
            <AccordionContent>
              <RepositoriesUser username={user.login} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionUsers;
