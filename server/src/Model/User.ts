

import mongoose, {Types} from "mongoose";

const PairSchema = new mongoose.Schema({
    key: { type: String },
    value: { type: String },
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    completedGigs: { type: [String], default: [] },
    reviews: { type: [Types.ObjectId], default: [] },
    messages: { type: [Types.ObjectId], default: [] },
});

const User = mongoose.model("User", UserSchema);
export default User;
