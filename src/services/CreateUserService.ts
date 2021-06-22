import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface UserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin }) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email must be provided");
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) throw new Error("User already exists");

    const user = userRepository.create({ name, email, admin });

    await userRepository.save(user);

    return user;
  }
}