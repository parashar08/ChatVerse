import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json(new ApiResponse(false, null, "Unauthorized"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded?.id).select("-password");
        next();
    } catch (error) {
        return res.status(401).json(new ApiResponse(false, null, "Unauthorized"));
    }
});

