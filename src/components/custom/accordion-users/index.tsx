import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionUsersProps } from "./types";
import UserRepositoryCard from "../user-repository-card";

const AccordionUsers = (props: AccordionUsersProps) => {
  const { dataUsers } = props;
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3"
      //   defaultValue={`value-${dataUsers[0].id}`}
    >
      {dataUsers.map((user) => (
        <AccordionItem key={user.id} value={`value-${user.id}`}>
          <AccordionTrigger>{user.name}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            {user.repositories.map((repo) => (
              <UserRepositoryCard key={repo.id} title={repo.title}>
                {repo.description}
              </UserRepositoryCard>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionUsers;
