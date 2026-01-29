import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { personalPrompt, generateContextualPrompt, detectQuestionContext } from './personalProfile.js';

export function initializeLangChain(apiKey) {
  if (!apiKey) {
    throw new Error("Google API key is required");
  }

  // Crear la instancia del modelo
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: apiKey,
    temperature: 0.7, // Controla la creatividad (0-1)
    maxOutputTokens: 2048, // Máximo de tokens de respuesta
  });

  return model;
}

// Función para hacer preguntas con prompt personalizado
export async function askPersonalQuestion(model, question) {
  try {
    // Detectar el contexto de la pregunta
    const context = detectQuestionContext(question);

    // Generar el prompt contextual
    const contextualPrompt = generateContextualPrompt(context, question);

    // Crear el mensaje completo
    const fullMessage = `${contextualPrompt}\n\nPregunta del usuario: ${question}`;

    const response = await model.invoke(fullMessage);
    return response.content;
  } catch (error) {
    console.error("Error asking personal question:", error);
    throw error;
  }
}

// Función helper para hacer una consulta simple
export async function askQuestion(model, question) {
  try {
    const response = await model.invoke(question);
    return response.content;
  } catch (error) {
    console.error("Error asking question:", error);
    throw error;
  }
}

// Ejemplo de uso con streaming
export async function askQuestionStream(model, question, onToken) {
  try {
    const stream = await model.stream(question);

    let fullResponse = "";
    for await (const chunk of stream) {
      const token = chunk.content;
      fullResponse += token;
      if (onToken) {
        onToken(token);
      }
    }

    return fullResponse;
  } catch (error) {
    console.error("Error in streaming:", error);
    throw error;
  }
}
