import express from "express";
import jwt from "jsonwebtoken";
import { UserModel, ContentModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import bcrypt from "bcrypt";
const app = express();
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Username and password are required" });
    }
    if (password.length < 6) {
        return res
            .status(400)
            .json({ message: "Password must be atleast 6 characters" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            username: username,
            password: hashedPassword,
        });
        res.status(201).json({
            message: "User signed up",
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User already exists",
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required",
        });
    }
    try {
        const existingUser = await UserModel.findOne({ username });
        if (!existingUser) {
            return res.status(401).json({
                message: "Incorrect credentials",
            });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Incorrect credentials",
            });
        }
        const token = jwt.sign({
            id: existingUser._id,
        }, JWT_PASSWORD);
        res.json({ token });
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type } = req.body;
    if (!link || !type) {
        return res.json({ message: "Link and type are required" });
    }
    try {
        await ContentModel.create({
            link,
            type,
            userId: req.userId,
            tags: [],
        });
        res.json({ message: "Content Added" });
    }
    catch (e) {
        res.json({ message: "Failed to add content" });
    }
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    try {
        const content = await ContentModel.find({ userId: req.userId }).populate("userId", "-password");
        res.json({ content });
    }
    catch (e) {
        res.json({ message: "Failed to fetch content" });
    }
});
app.post("/api/v1/brain/share", (req, res) => { });
app.get("/api/v1/brain/:shareLink", (req, res) => { });
app.listen(3000);
//# sourceMappingURL=index.js.map