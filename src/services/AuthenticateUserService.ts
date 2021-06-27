import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const isPasswordCorrect = await compare(String(password), user.password);

    if (!isPasswordCorrect) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({ email: user.email }, process.env.SECRET, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    return token;
  }
}
