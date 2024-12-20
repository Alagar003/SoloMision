import User from "../Model/User";

async function add_user(req: any, res: any) {
    try {
        const { name, email, password, bio, skills } = req.body;
        const newUser = new User({
            name,
            email,
            password,
            bio : bio || "",
            skills : skills || "",
        });
        await newUser.save();
        return res.status(201).json({UserID: newUser._id});
        console.log("User added successfully.");
    } catch (error) {
        console.error("Error in add_user:", error);
        return res.status(400).json({message: "Error adding User",error});
    }
}

export default add_user;



