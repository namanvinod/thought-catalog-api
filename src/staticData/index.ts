import { TagResponseModel, ThoughtResponseModel } from "../models/APIModels";

export const tags: TagResponseModel[] = [
  {
    id: 0,
    name: "Untagged",
    dateCreated: new Date(2025, 1, 2),
  },
  {
    id: 1,
    name: "High Agency",
    dateCreated: new Date(2025, 3, 4),
    dateUpdated: new Date(),
  },
  {
    id: 2,
    name: "Good Habits",
    dateCreated: new Date(),
  },
  {
    id: 3,
    name: "Inversion",
    dateCreated: new Date(),
  },
];

export const thoughts: ThoughtResponseModel[] = [
  {
    id: 0,
    title:
      "New goals don't deliver new results. New lifestyles do. And a lifestyle is a process, not an outcome",
    description: "",
    tags: [2],
    dateCreated: new Date(),
  },
  {
    id: 1,
    description: "",
    title: `"Where is the good knife?" If you’re looking for your good X, you have bad Xs. Throw those out`,
    tags: [2, 3],
    dateCreated: new Date(2022, 5, 11),
    dateUpdated: new Date(2023, 3, 3),
  },
  {
    id: 2,
    description: "",
    title: `Ninety percent of success can be boiled down to consistently doing the obvious thing for an uncommonly long period of time without convincing yourself that you're smarter than you are.`,
    tags: [0],
    dateCreated: new Date(),
  },
  {
    id: 3,
    description: `Velocity is your speed in a certain direction. Being in the right direction( or path) is more important than speed. 
Small but Persistent activity in the right direction is more useful than larger efforts towards every direction.`,
    title: `Focus on velocity. Speed will take care of itself.
`,
    tags: [0],
    dateCreated: new Date(2025, 6, 6),
  },
  {
    id: 4,
    description: `Velocity is your speed in a certain direction. Being in the right direction( or path) is more important than speed. 
Small but Persistent activity in the right direction is more useful than larger efforts towards every direction.`,
    title: `Ninety percent of success can be boiled down to consistently doing the obvious thing for an uncommonly long period of time without convincing yourself that you're smarter than you are.`,
    tags: [0],
    dateCreated: new Date(),
    dateUpdated: new Date(),
  },
];
