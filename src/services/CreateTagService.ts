import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

export class CreateTagService {
  async execute({ name }) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("Name must be provided");
    }

    const tagAlreadyExists = await tagRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagRepository.create({ name });

    await tagRepository.save(tag);

    return tag;
  }
}
