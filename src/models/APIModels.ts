import { BaseProps, ThoughtBaseModel } from "./BaseModels";
import { TagDBModel, ThoughtDBModel } from "./DBModels";

export type TagResponseModel = {
  id: number;
  name: string;
} & BaseProps;

export type ThoughtResponseModel = ThoughtBaseModel & BaseProps;
