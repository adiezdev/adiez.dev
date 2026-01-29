export const prerender = false;

import type { APIRoute } from "astro";
import { initializeLangChain, askPersonalQuestion } from "../../lib/langchain";

export const POST: APIRoute = async ({ request }) => {

  const { question } = await request.json();
  const apiKey = import.meta.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("Falta GOOGLE_API_KEY en el entorno");
  }

  const model = initializeLangChain(apiKey);
  const answer = await askPersonalQuestion(model, question);
  console.log("Generated answer:", answer);

  return new Response(
    JSON.stringify({ answer }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );

};
