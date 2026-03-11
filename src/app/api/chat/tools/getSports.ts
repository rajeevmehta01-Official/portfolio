
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show Rajeev's journey and interests beyond code",
  parameters: z.object({}),
  execute: async () => {
    return "Here's a bit about my journey and interests beyond code!";
  },
});