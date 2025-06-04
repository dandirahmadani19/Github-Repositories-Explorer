import AccordionUsers from "./components/custom/accordion-users";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const dataUsers = [
  {
    id: "1",
    name: "User Example 1",
    repositories: [
      {
        id: "1",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "2",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "3",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
    ],
  },
  {
    id: "2",
    name: "User Example 1",
    repositories: [
      {
        id: "1",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "2",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "3",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
    ],
  },
  {
    id: "3",
    name: "User Example 1",
    repositories: [
      {
        id: "1",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "2",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
      {
        id: "3",
        title: "Repository Title 1",
        description: `We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days. We offer
                worldwide shipping through trusted courier partners. Standard`,
        star: 20,
      },
    ],
  },
];

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-gray-200">
      <div className="flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-xl h-[100vh] px-5 py-8 bg-white overflow-auto">
        <Input />
        <Button variant={"blue"}>Search</Button>
        <p>Showing users for "Exampleusers"</p>
        <AccordionUsers dataUsers={dataUsers} />
      </div>
    </div>
  );
};

export default App;
