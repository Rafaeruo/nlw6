import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService";

export class ListUserReceivedComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserReceivedComplimentsService =
      new ListUserReceivedComplimentsService();

    const compliments = await listUserReceivedComplimentsService.execute(
      user_id
    );

    res.json(compliments);
  }
}
