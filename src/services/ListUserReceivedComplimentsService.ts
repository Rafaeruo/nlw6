import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRespository";

export class ListUserReceivedComplimentsService {
  async execute(user_id) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentRepository.find({
      where: { user_receiver: user_id },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}
