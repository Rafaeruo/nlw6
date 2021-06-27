import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRespository";

export class ListUserSentComplimentsService {
  async execute(user_id) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentRepository.find({
      where: { user_sender: user_id },
    });

    return compliments;
  }
}
