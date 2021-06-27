import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController {
  async handle(_req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    res.json(users);
  }
}
