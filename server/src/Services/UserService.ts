import add_user from "../Dal/UserRepo";

async function user_signup(req: any, res: any) {
    try {
            await add_user(req, res);
            }
    catch (error) {
        console.error("Error in add_user:");
        return res.status(400).json({message: "Error adding User",error});
    }
}



export default user_signup;
