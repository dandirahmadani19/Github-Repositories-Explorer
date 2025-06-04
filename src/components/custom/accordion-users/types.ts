export type AccordionUsersProps = {
  dataUsers: {
    id: string;
    name: string;
    repositories: {
      id: string;
      title: string;
      description: string;
      star: number;
    }[];
  }[];
};
