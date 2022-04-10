import { prisma } from "~/db.server";

export const getAllProgrammingLanguage = async () => {
  return prisma.programming_language.findMany()
}
