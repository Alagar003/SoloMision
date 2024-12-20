import {Router} from 'express';
import {user_signup_control} from "../Controller/UserControl";

const route = Router();
route.post("/signup", user_signup_control);
export default route;