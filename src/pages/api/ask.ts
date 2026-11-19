export const prerender = false;

import type { APIRoute } from "astro";
import { initializeLangChain, askPersonalQuestion } from "../../lib/langchain";

const MAX_QUESTION_LENGTH = 500;
const RATE_LIMIT = 10; // peticiones por IP
const RATE_WINDOW_MS = 60_000;

// shortcut: memoria por instancia serverless, se reinicia en cada cold start y no se comparte entre instancias; pasar a Vercel KV / Upstash si hay abuso real
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // evita que el Map crezca sin límite
  return recent.length > RATE_LIMIT;
}

const json = (body: object, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (isRateLimited(clientAddress)) {
    return json({ error: "Demasiadas preguntas seguidas. Espera un minuto." }, 429);
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";

  if (!question) {
    return json({ error: "Escribe una pregunta." }, 400);
  }
  if (question.length > MAX_QUESTION_LENGTH) {
    return json({ error: `La pregunta no puede superar ${MAX_QUESTION_LENGTH} caracteres.` }, 400);
  }

  const apiKey = import.meta.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("Falta GOOGLE_API_KEY en el entorno");
    return json({ error: "El chat no está disponible ahora mismo." }, 500);
  }

  try {
    const model = initializeLangChain(apiKey);
    const answer = await askPersonalQuestion(model, question);
    return json({ answer }, 200);
  } catch (error) {
    console.error("Error en /api/ask:", error);
    return json({ error: "No he podido responder. Inténtalo de nuevo en un rato." }, 502);
  }
};
