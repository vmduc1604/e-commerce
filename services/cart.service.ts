import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createCart(userId: number) {
  return prisma.cart.create({
    data: { userId },
  });
}

export async function getCartByUser(userId: number) {
  return prisma.cart.findFirst({
    where: { userId },
  });
}
