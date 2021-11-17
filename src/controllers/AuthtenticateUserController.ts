import { Request, Response } from "express";
import { AuthtenticateUserService } from "../services/AuthtenticateUserService"

class AuthtenticateUserController {
    async handle(req: Request, res: Response){
        const { code } = req.body;

        const service = new AuthtenticateUserService();

        try {
            const result = await service.execute(code);
            return res.json(result);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }

    }
}

export {AuthtenticateUserController};