import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body;

        const userRepository = getCustomRepository(UsersRepository);

        //impossibilita de criar usuários com o mesmo email
        const userAlreadyExists = await userRepository.findOne({
            email
        });
        if (userAlreadyExists) {
            return res.status(400).json({
                error: "User Already Exists!",
            })
        }

        const user = userRepository.create({
            name, email
        })

        /**
         * É necessário criar o repositorio e depos
         * criar o repositorio.create, para daí
         * criar o repositorio.save()
         */

        //o await sempre será usado quando for retornar 
        //uma promisse
        await userRepository.save(user);

        return res.json({ user })



    }
}

export { UserController };
