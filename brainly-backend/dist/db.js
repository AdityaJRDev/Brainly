import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://jraditya_db_user:JULEwtohtcmNmcaZ@cluster0.fxnhwht.mongodb.net/?appName=Cluster0");
const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
export const UserModel = model("User", UserSchema);
const ContentSchema = new Schema({
    title: { type: String },
    link: { type: String },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});
export const ContentModel = model("Content", ContentSchema);
//# sourceMappingURL=db.js.map