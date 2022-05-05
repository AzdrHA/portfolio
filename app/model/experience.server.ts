import { prisma } from "~/db.server";

export const getAllExperience = async () => {
  return prisma.experience.findMany({
    orderBy: {
      name: 'asc'
    }
  })
}
