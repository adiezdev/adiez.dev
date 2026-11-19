import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { generateContextualPrompt, detectQuestionContext } from "./personalProfile";

export function initializeLangChain(apiKey: string): ChatGoogleGenerativeAI {
  if (!apiKey) {
    throw new Error("Google API key is required");
  }

  return new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey,
    temperature: 0.7, // Controla la creatividad (0-1)
    maxOutputTokens: 2048, // Máximo de tokens de respuesta
  });
}

// Pregunta al modelo con el prompt personal adaptado al tipo de pregunta
export async function askPersonalQuestion(
  model: ChatGoogleGenerativeAI,
  question: string,
): Promise<string> {
  try {
    const contextualPrompt = generateContextualPrompt(detectQuestionContext(question));
    const response = await model.invoke(
      `${contextualPrompt}\n\nPregunta del usuario: ${question}`,
    );
    // .text siempre es string; .content puede venir como array de partes
    return response.text;
  } catch (error) {
    console.error("Error asking personal question:", error);
    throw error;
  }
}
