# Sistema de IA Personal para Alejandro Diez López

## Descripción
Este sistema utiliza LangChain con Google Generative AI para crear un asistente personal que solo responde preguntas relacionadas con Alejandro Diez López.

## Archivos principales

### 1. `personalProfile.js`
Contiene toda la información personal y profesional de Alejandro:
- Información básica (nombre, rol, ubicación)
- Habilidades técnicas y experiencia
- Proyectos actuales
- Intereses personales
- Preferencias de comunicación

### 2. `langchain.js`
Configuración de LangChain y funciones para interactuar con la IA:
- `initializeLangChain()`: Inicializa el modelo de Google Generative AI
- `askPersonalQuestion()`: Hace preguntas usando prompts personalizados
- `askQuestion()`: Función genérica (no recomendada para este uso)

### 3. `AIChat.astro`
Componente de interfaz de usuario que incluye:
- Chat interactivo
- Preguntas sugeridas
- Mensajes de bienvenida
- Estilos personalizados

## Características del sistema

### 🔒 Filtrado de preguntas
- Solo responde preguntas relacionadas con Alejandro
- Rechaza educadamente preguntas no relacionadas
- Detecta automáticamente el contexto de la pregunta

### 🎯 Contextos detectados
- **Técnico**: Preguntas sobre desarrollo, programación, tecnologías
- **Profesional**: Preguntas sobre carrera, experiencia, trabajo
- **Proyectos**: Preguntas sobre proyectos específicos como adiez.dev
- **General**: Otras preguntas relacionadas con Alejandro

### 💡 Preguntas sugeridas
El componente incluye botones con preguntas predefinidas:
- "¿Cuáles son las habilidades técnicas de Alejandro?"
- "¿En qué proyectos está trabajando Alejandro?"
- "¿Cuál es la experiencia profesional de Alejandro?"
- "¿Cómo puedo contactar a Alejandro?"

## Configuración

### 1. API Key de Google
```javascript
// En AIChat.astro, reemplaza:
const apiKey = "YOUR_GOOGLE_API_KEY_HERE";

// Con tu API key real:
const apiKey = "tu_api_key_aqui";
```

### 2. Variables de entorno (recomendado)
```bash
# Crear archivo .env
GOOGLE_API_KEY=tu_api_key_aqui
```

```javascript
// Usar en el código:
const apiKey = import.meta.env.GOOGLE_API_KEY;
```

## Personalización

### Agregar información personal
Edita `personalProfile.js` para agregar:
- Nuevas habilidades
- Proyectos adicionales
- Experiencia profesional
- Intereses personales

### Modificar el prompt
El prompt base se encuentra en `personalProfile.js`:
```javascript
export const personalPrompt = `
Eres un asistente de IA personal para ${personalProfile.name}.
// ... resto del prompt
`;
```

### Agregar preguntas sugeridas
En `AIChat.astro`, agrega más botones:
```html
<button class="suggestion-btn" data-question="Tu nueva pregunta">Texto del botón</button>
```

## Uso

### En una página Astro
```astro
---
import AIChat from '../components/AIChat.astro';
---

<AIChat />
```

### Ejemplo de preguntas que funcionan
- ✅ "¿Cuáles son las habilidades de Alejandro?"
- ✅ "¿En qué tecnologías trabaja Alejandro?"
- ✅ "¿Cómo contactar a Alejandro?"
- ✅ "¿Qué proyectos tiene Alejandro?"

### Ejemplo de preguntas que NO funcionan
- ❌ "¿Cómo cocinar pasta?"
- ❌ "¿Cuál es la capital de Francia?"
- ❌ "Dame consejos de inversión"

## Troubleshooting

### Error: "Google API key is required"
- Verifica que tengas configurada tu API key
- Asegúrate de que la API key sea válida

### La IA responde preguntas no relacionadas
- Verifica que estés usando `askPersonalQuestion()` en lugar de `askQuestion()`
- Revisa que el prompt personalizado esté configurado correctamente

### Error de importación
- Verifica que todos los archivos estén en las rutas correctas
- Asegúrate de que las importaciones sean correctas
