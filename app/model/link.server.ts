import { prisma } from "~/db.server";

export const getAllLink = async () => {
  return prisma.link.findMany({
    orderBy: {
      name: 'asc'
    },
    include: {
      file: true
    },
  })
}
