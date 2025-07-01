import { BaseProps, ThoughtBaseModel } from "./BaseModels";

export type TagDBModel = {
  id: number;
  name: string;
} & BaseProps;

export type ThoughtDBModel = ThoughtBaseModel & BaseProps;
