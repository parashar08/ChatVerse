import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { signupSchema, loginSchema } from '../validations/user.validation.js';
import { User } from '../models/user.model.js';

const options = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
}

export const signup = asyncHandler(async (req, res) => {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.issues.map(error => ({
            field: error.path[0],
            message: error.message
        }));
        return res.status(400).json(new ApiResponse(400, null, errors));
    }

    const { name, email, phoneNumber, password } = result.data;

    const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }]});
    if (existingUser) {
        return res.status(400).json(new ApiResponse(false, null, "Email or phone number already exists"));
    }

    const newUser = new User({
        name,
        email,
        phoneNumber,
        password
    });
    await newUser.save();

    const token = newUser.generateAuthToken();

    return res
        .status(201)
        .cookie("token", token, options)
        .json(new ApiResponse(true, { newUser, token }, "User created successfully"));
});

export const login = asyncHandler(async (req, res) => {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.issues.map(error => ({
            field: error.path[0],
            message: error.message
        }));
        return res.status(400).json(new ApiResponse(400, null, errors));
    }
    const { email, phoneNumber, password } = result.data;

    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (!user) {
        return res.status(400).json(new ApiResponse(false, null, "Invalid email or phone number"));
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        return res.status(400).json(new ApiResponse(false, null, "Invalid password"));
    }

    if (user.isOnline) {
        return res.status(400).json(new ApiResponse(false, null, "User is already logged in"));
    }

    const token = user.generateAuthToken();
    
    await User.findByIdAndUpdate(user?._id, {
        $set: {
            isOnline: true,
            lastseen: Date.now()
        }
    })

    return res
        .status(200)
        .cookie("token", token, options)
        .json(new ApiResponse(true, { user, token }, "Login successful"));
});

export const logout = asyncHandler(async (req, res) => {

    const updatedData = await User.findByIdAndUpdate(req.user?._id, {
        $set: {
            isOnline: false,
            lastseen: Date.now()
        }
    }, { new: true });

    return res
        .status(200)
        .clearCookie("token", options)
        .json(new ApiResponse(true, updatedData, "Logout successful"));
})