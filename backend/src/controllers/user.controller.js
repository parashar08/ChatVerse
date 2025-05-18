import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ErrorApiResponse } from "../utils/ErrorApiResponse.js";
import { User } from "../models/user.model.js";
import { signupSchema } from "../validations/user.validation.js";

const signup = asyncHandler(async (req, res) => {
  const parsed = signupSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(new ErrorApiResponse(parsed.error.format()));
  }

  const { email, password } = parsed.data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json(new ErrorApiResponse("Invalid email"));
  }

  const newUser = await User.create({
    email,
    password,
    isAnonymous: false,
  });

  const token = await newUser.generateAuthToken();

  return res
    .status(201)
    .cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV == "production",
      httpOnly: true,
    })
    .json(new ApiResponse({ newUser, token }, "user created successfully!"));
});
