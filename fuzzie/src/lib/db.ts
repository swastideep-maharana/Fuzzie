import { PrismaClient } from "@prisma/client";

declare global {
  // Extending the Node.js global object to include the Prisma client
  var prisma: PrismaClient | undefined;
}

// Use an existing PrismaClient instance in development or create a new one in production
export const db = globalThis.prisma || new PrismaClient();

// Ensure PrismaClient is only assigned to `globalThis` in non-production environments
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
