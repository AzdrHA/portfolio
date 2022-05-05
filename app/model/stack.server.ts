import { prisma } from "~/db.server";

export const getAllStack = async () => {
  return prisma.stack.findMany({
    orderBy: {
      name: 'asc'
    },
    include: {
      file: true
    },
  })
}
