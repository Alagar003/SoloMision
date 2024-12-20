
import {Request, Response} from "express";
import user_signup from "../Services/UserService";

export const user_signup_control = async (req: Request, res: Response):Promise<void> => {
    try{
        await user_signup(req, res);
    }
    catch (error) {
        res.status(400).json({message: "Error while adding User",error});
    }
}

