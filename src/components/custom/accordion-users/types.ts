export type AccordionUsersProps = {

  search: string;
};

export type ResponseGithubUsers = {
  incomplete_results: boolean;
  total_count: number;
  items: {
    id: string;
    login: string;
  }[];
};
