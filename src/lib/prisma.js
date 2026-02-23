import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL || "mysql://root:@localhost:3306/beaulii",
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
