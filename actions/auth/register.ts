"use server";
import { createUser, getUserByEmail } from "@/services/user.service";

import { createCart } from "@/services/cart.service";

import { UserRole } from "@/app/generated/prisma/client";
import { hashPassword } from "@/lib/auth/hash";

type RegisterUserInput = {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
};

export async function registerUser(data: RegisterUserInput) {
  try {
    // 1. Validate input
    if (!data.email || !data.password || !data.confirmPassword || !data.name) {
      return {
        success: false,
        message: "All fields are required",
      };
    }
    if (data.password !== data.confirmPassword) {
      return {
        success: false,
        message: "password and confirm password do not match",
      };
    }

    // 2. Check if user already exists
    const existingUser = await getUserByEmail(data.email);
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }
    // 3. Hash password
    const hashedPassword = await hashPassword(data.password);
    // 4. Create user
    const user = await createUser({
      email: data.email,
      passwordHash: hashedPassword,
      name: data.name,
      role: UserRole.CUSTOMER,
    });
    // 5. Create cart for user
    await createCart(user.id);
    // 6. Return response
    return {
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to create user",
    };
  }
}
