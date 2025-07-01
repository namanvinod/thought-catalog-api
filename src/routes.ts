import { Router, Request, Response } from "express";
import { tags, thoughts } from "./staticData";

const router = Router();

router.get("/thoughts", (req: Request, res: Response) => {
  res.send(thoughts);
});

router.get("/tags", (req: Request, res: Response) => {
  res.send(tags);
});

export { router };
