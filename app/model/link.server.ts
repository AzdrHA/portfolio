import { prisma } from "~/db.server";

export const getAllLink = async () => {
  return prisma.link.findMany({
    include: {
      file: true
    },
  })
}
