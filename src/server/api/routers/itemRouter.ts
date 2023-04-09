import { z } from "zod";
import { publicProcedure, createTRPCRouter as router } from "../trpc";

export const itemRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { name } = input;
      const item = await ctx.prisma.shoppingItem.create({
        data: {
          name,
        },
      });
      return item;
    }),
});
