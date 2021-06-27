import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";

export class ListUserSentComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserSentComplimentsService = new ListUserSentComplimentsService();

    const compliments = await listUserSentComplimentsService.execute(user_id);

    res.json(compliments);
  }
}
