export const prerender = false;

import type { APIRoute } from "astro";
import { initializeLangChain, askPersonalQuestion } from "../../lib/langchain";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { question } = body;

    // En Astro, las variables de entorno sin PUBLIC_ no están en import.meta.env en runtime de servidor a veces
    // Probamos con ambas por si acaso, o usamos process.env si está disponible
    const apiKey = import.meta.env.GOOGLE_API_KEY || import.meta.env.PUBLIC_GOOGLE_API_KEY;

    console.log("URL de solicitud:", request.url);
    console.log("API Key presente:", !!apiKey);

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Falta GOOGLE_API_KEY en el entorno de Vercel" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const model = initializeLangChain(apiKey);
    const answer = await askPersonalQuestion(model, question);

    return new Response(
      JSON.stringify({ answer }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error completo en API ask:", error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : String(error)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
