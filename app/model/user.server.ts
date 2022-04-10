import type { user } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";

export async function getUserById(id: user["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: user["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: user["email"], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
}

export async function deleteUserByEmail(email: user["email"]) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(
  email: user["email"],
  password: user['password']
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
