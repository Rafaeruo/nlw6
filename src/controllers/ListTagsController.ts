import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

export class ListTagsController {
  async handle(_req: Request, res: Response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    res.json(tags);
  }
}
