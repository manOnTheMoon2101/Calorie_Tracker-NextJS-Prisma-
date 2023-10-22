import prisma from "@/prisma/prisma";


export default async function Find() {
  const data = await prisma.progress.findMany()

  return data
}
