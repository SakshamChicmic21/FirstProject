// import { PrismaClient } from "@prisma/client";

// export const db = new PrismaClient();


// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const db =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//   datasourceUrl: process.env.DATABASE_URL,
// });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }


import * as Prisma from "../generated/prisma";

const globalForPrisma = global as unknown as { prisma?: Prisma.PrismaClient };

export const db = globalForPrisma.prisma ?? new Prisma.PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

// import { PrismaClient } from '../generated/prisma';

// export const db = new PrismaClient()