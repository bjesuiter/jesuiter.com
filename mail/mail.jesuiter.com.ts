import { serve } from "https://deno.land/std@0.137.0/http/server.ts";

function handler(req: Request): Response {
  return new Response(undefined, {
    status: 301,
    headers: {
      location: "https://webmail.hosting.de/",
    },
  });
}

serve(handler);
