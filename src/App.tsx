import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AccordionUsers from "./components/custom/accordion-users";
import { ButtonLoading } from "./components/ui/button-loading";
import { Input } from "./components/ui/input";
import { getQueryParam, setQueryParam } from "./lib/utils/url-query-param";

const App = () => {
  const defaultSearch = getQueryParam("search") || "";
  const { control, getValues } = useForm({
    defaultValues: {
      search: defaultSearch,
    },
  });
  const [search, setSearch] = useState<string>(defaultSearch || "");

  const onClickButtonSearch = useCallback(() => {
    const searchText = getValues("search");
    setSearch(searchText);
    setQueryParam("search", searchText);
  }, [getValues]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-gray-200">
      <div className="flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-xl h-[100vh] px-5 py-8 pb-96 bg-white overflow-auto">
        <Controller
          control={control}
          name="search"
          render={({ field }) => <Input {...field} />}
        />
        <ButtonLoading
          variant={"blue"}
          onClick={onClickButtonSearch}
          isLoading={false}
        >
          Search
        </ButtonLoading>
        {Boolean(search) && <AccordionUsers search={search} />}
      </div>
    </div>
  );
};

export default App;
