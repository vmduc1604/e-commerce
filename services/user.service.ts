import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createUser(data: Prisma.UserCreateInput) {
  return prisma.user.create({
    data,
  });
}

export async function updateUser(id: number, data: Prisma.UserUpdateInput) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUserById(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}

export async function deleteUserByEmail(email: string) {
  return prisma.user.delete({
    where: { email },
  });
}
