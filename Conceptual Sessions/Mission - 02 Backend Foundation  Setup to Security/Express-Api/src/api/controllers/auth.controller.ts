import type { Request, Response } from "express";
import authService from "../services/auth.Service";
import { sendResponse } from "../../utils/sendResponse";

export const signUp = async(req: Request, res: Response) => {
    const user = await authService.createUser(req.body);
    if(!user){
        sendResponse(res, {message: "Failed to create user."}, 400);
    }else {
        sendResponse(res, {message: "account create successfully."}, 201);
    }
}
export const login = async(req: Request, res: Response) => {
    // check user email anassword
    const {email, password} = req.body;
    const user = await authService.validateUser(email, password);
    if(!user){
        sendResponse(res, {message: "Invalid email or password."}, 401);
    }else {
        sendResponse(res, {message: "Login successful.",data: user}, 200);
    }
}