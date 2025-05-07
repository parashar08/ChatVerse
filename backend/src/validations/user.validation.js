import { z } from 'zod';

const phoneRegex = /^\+?[0-9]{10,15}$/;

export const signupSchema = z.object({
    name: z.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .transform(str => str.trim()), 
  
    email: z.string()
      .email("Invalid email address")
      .transform(str => str.toLowerCase().trim()), 
  
    phoneNumber: z.string()
      .regex(phoneRegex, "Phone number must be 10-15 digits (optional + prefix)")
      .transform(str => str.replace(/\s+/g, "")), 
  
    password: z.string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password cannot exceed 100 characters")
      .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .regex(/[0-9]/, "Password must contain at least 1 number")
});

export const loginSchema = z.object({
    email: z.string()
        .email("Invalid email address")
        .transform(str => str.toLowerCase().trim()), 
  
    phoneNumber: z.string()
        .regex(phoneRegex, "Phone number must be 10-15 digits (optional + prefix)")
        .transform(str => str.replace(/\s+/g, "")),
    
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password cannot exceed 100 characters")
        .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
        .regex(/[0-9]/, "Password must contain at least 1 number")
});