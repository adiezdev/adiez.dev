export const personalProfile = {
  name: "Alejandro Diez López",
  role: "Desarrollador Full Stack",
  location: "León, España",

  professional: {
    skills: [
      "Desarrollo Web Full Stack",
      "JavaScript/TypeScript",
      "React, Svelt, Astro",
      "Node.js, Java, Quarkus, Micro servicios",
      "Diseño UI/UX",
      "CSS/SCSS",
      "Bases de datos SQL/NoSQL"
    ],
    experience: "Más de 5 años desarrollando aplicaciones web",
    currentFocus: "Desarrollo de sitios web modernos con Astro y React",
    website: "adiez.dev",
    works: [
      {
        name: "Smarkia",
        status: "2022 - Actualmente",
        description: "Actualmente trabajo en Smarkia. Una empresa de tecnología especializada en el sector de la energía. En ella me encargo del desarrollo y mantenimiento de la plataforma web.",
        tech: ["React", "Tailwind", "TypeScript", "Zod", "Zustand", "Vitest", "Storybook", "Tanstack", "Radix", "Java", "Quarkus"],
        methodologies: ["Kanban", "Sprints", "Agile", "Scrum"],
        responsibilities: [
          "Desarrollo y mantenimiento del cms de Smarkia",
          "Implementar nuevas funcionalidades en la plataforma web",
          "Colaborar con el equipo de diseño y desarrollo para crear experiencias de usuario excepcionales",
          "Participar en reuniones de diseño y desarrollo con el equipo",
          "Ayuda a la creación de sistema de diseño "
        ]
      },
      {
        name: "Dunegeo Keeper",
        status: "2021 - 2022",
        description: "Desarrollo de un videojuego web integrado con la blockchain WAX, enfocado en ofrecer una experiencia de juego fluida, dinámica y respaldada por tecnología descentralizada.",
        tech: ["React", "TypeScript", "WebSockets", "Axios", "Node.js", "Express", "WAX Blockchain", "Canvas API", "Chart.js", "Tailwind"],
        methodologies: ["Agile", "Scrum", "Kamban"],
        responsibilities: [
          "Participación en el desarrollo full stack del videojuego, trabajando tanto en el frontend como en el backend.",
          "Implementación de la comunicación entre cliente y servidor mediante sockets y llamadas API.",
          "Desarrollo de la interfaz de usuario, maquetación y estilos con CSS/SCSS, garantizando una experiencia visual coherente.",
          "Indexación de datos y desarrollo de lógicas de cálculo para proporcionar una jugabilidad óptima.",
          "Integración con blockchain WAX, contribuyendo a la lógica de smart assets y transacciones descentralizadas.",
          "Trabajo colaborativo bajo metodologías ágiles y control de versiones con Git."
        ]
      },
      {
        name: "Business Applications Engineer- CDS, a Hewlett Packard Enterprise company",
        status: "2020 - 2021",
        description: "Garantizar el correcto funcionamiento y rendimiento de sistemas críticos mediante la detección de incidencias en bases de datos, análisis de causa raíz y programación de soluciones automatizadas.",
        tech: ["PL/SQL", "Bash", "Java", "PowerShell", "Linux"],
        methodologies: ["Kanban"],
        responsibilities: [
          "Monitorización y resolución de incidencias en grandes bases de datos.",
          "Análisis de causas raíz para prevenir fallos recurrentes en entornos de producción.",
          "Desarrollo y mantenimiento de scripts en Bash para automatizar procesos del sistema.",
          "Programación de procesos en PL/SQL y Java para mejorar la eficiencia del sistema.",
          "Colaboración en equipos bajo metodología Kanban.",
          "Trabajo en entornos Linux de alto rendimiento."
        ]
      }
    ]
  }
  ,
  personal: {
    interests: [
      "Tecnología y programación",
      "Diseño web y UX",
      "Innovación tecnológica",
      "Desarrollo de productos digitales"
    ],
    personality: [
      "Apasionado por la tecnología",
      "Enfocado en crear experiencias de usuario excepcionales",
      "Siempre aprendiendo nuevas tecnologías",
      "Colaborativo y orientado a resultados"
    ]
  },

  // Proyectos y trabajos
  projects: [
    {
      name: "adiez.dev",
      description: "Sitio web personal desarrollado con Astro",
      tech: ["Astro", "TypeScript", "CSS"],
      status: "En desarrollo activo"
    },
    {
      name: "el Papón",
      description: "Applicacion indepenediente de la semana santa leonesa",
      tech: [
        "React Native",
        "Typescript",
        "Expo",
        "Tailwind",
        "Tanstack",
        "Gist"
      ],
      status: "En desarrollo activo",
      responsibilities: [
        "Ser un papón",
        "Ser un penca"
      ]
    }
  ],

  // Preferencias de comunicación
  communication: {
    languages: ["Español (nativo)", "Inglés"],
    style: "Directo, técnico pero accesible",
    topics: [
      "Desarrollo web",
      "Tecnologías frontend/backend",
      "Diseño y UX",
      "Proyectos personales",
      "Carrera profesional en tecnología"
    ]
  }
};

// Prompt base para la IA personal
export const personalPrompt = `
Eres un asistente de IA personal para ${personalProfile.name}.

INFORMACIÓN SOBRE MÍ:
- Nombre: ${personalProfile.name}
- Rol: ${personalProfile.role}
- Ubicación: ${personalProfile.location}
- Sitio web: ${personalProfile.professional.website}

HABILIDADES Y EXPERIENCIA:
- ${personalProfile.professional.experience}
- Especialidades: ${personalProfile.professional.skills.join(', ')}
- Enfoque actual: ${personalProfile.professional.currentFocus}

INTERESES PERSONALES:
- ${personalProfile.personal.interests.join(', ')}
- Personalidad: ${personalProfile.personal.personality.join(', ')}

TRABAJOS ANTERIORES Y ACTUALES:
${personalProfile.professional.works.map(work =>
  `- ${work.name}: ${work.description} (${work.tech.join(', ')})`
).join('\n')}

REGLAS IMPORTANTES:
1. SOLO respondes preguntas relacionadas conmigo, mi trabajo, proyectos o intereses
2. Si la pregunta no está relacionada conmigo, responde educadamente: "Solo puedo responder preguntas relacionadas con Alejandro Diez López. ¿Hay algo específico sobre él que te gustaría saber?"
3. Usa un tono profesional pero amigable
4. Sé específico y útil en tus respuestas
5. Si no tienes información sobre algo específico, dilo claramente
6. Responde en español a menos que se pida específicamente en inglés
7. Utiliza formato Markdown SIEMPRE en tus respuestas (negritas para énfasis, listas para enumerar, links si son necesarios) para que la respuesta sea visualmente atractiva.
8. Si te preguntan sobre mi familia, no des información personal
9. Cuando preguntan sobre mis proyectos, son los proyectos que hago no el trabajo
10. Cuando preguntan sobre mi trabajo, es el trabajo que hago no los proyectos

¿En qué puedo ayudarte sobre Alejandro?
`;

// Función para generar prompts específicos basados en el contexto
export function generateContextualPrompt(context, userQuestion) {
  let contextualPrompt = personalPrompt;

  // Agregar contexto específico según el tipo de pregunta
  if (context === 'technical') {
    contextualPrompt += `
    
CONTEXTO TÉCNICO:
- Alejandro tiene experiencia en desarrollo web full stack
- Especializado en tecnologías modernas como Astro, React, TypeScript, Java
- Enfocado en crear experiencias de usuario excepcionales
- Siempre está aprendiendo y experimentando con nuevas tecnologías
`;
  } else if (context === 'career') {
    contextualPrompt += `
    
CONTEXTO PROFESIONAL:
- Alejandro es un desarrollador con más de 5 años de experiencia
- Ha trabajado en diversos proyectos web
- Actualmente se enfoca en su sitio web personal adiez.dev
- Está interesado en oportunidades de crecimiento profesional
`;
  } else if (context === 'projects') {
    contextualPrompt += `
    
CONTEXTO DE PROYECTOS:
- Alejandro está desarrollando activamente adiez.dev
- Utiliza Astro como framework principal
- Interesado en crear contenido y herramientas útiles
- Siempre busca mejorar y optimizar sus proyectos
`;
  }

  return contextualPrompt;
}

export function detectQuestionContext(question) {
  const technicalKeywords = ['desarrollo', 'programación', 'código', 'tecnología', 'react', 'javascript', 'css', 'html', 'astro', 'node'];
  const careerKeywords = ['trabajo', 'empleo', 'carrera', 'profesional', 'experiencia', 'empresa', 'contrato'];
  const projectKeywords = ['proyecto', 'sitio web', 'adiez.dev', 'el papon', 'portfolio', 'trabajo personal'];

  const lowerQuestion = question.toLowerCase();

  if (technicalKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    return 'technical';
  } else if (careerKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    return 'career';
  } else if (projectKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    return 'projects';
  }

  return 'general';
}
