import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getData: publicProcedure.query(async () => {
    return "getData"
  }),
  setData: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      return input
    }
    )
})

export type AppRouter = typeof appRouter
