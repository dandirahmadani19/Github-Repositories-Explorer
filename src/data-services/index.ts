import { QueriesDataService } from "./types";

export type AllQueriesKeys = "github-user-search" | "github-user-repos";

export const allQueries: QueriesDataService<AllQueriesKeys> = {
  "github-user-search": "/search/users",
  "github-user-repos": "/users/:username/repos"
};
