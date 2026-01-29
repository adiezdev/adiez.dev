# Configuración de Variables de Entorno

## Pasos para configurar tu API key de Google Generative AI

### 1. Crear archivo .env
Crea un archivo llamado `.env` en la raíz de tu proyecto (al mismo nivel que `package.json`):

```bash
# En la terminal, desde la raíz del proyecto:
touch .env
```

### 2. Agregar tu API key
Abre el archivo `.env` y agrega tu API key:

```bash
# .env
GOOGLE_API_KEY=tu_api_key_real_aqui
```

### 3. Obtener tu API key
Si no tienes una API key de Google Generative AI:

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la API key generada
5. Pégala en tu archivo `.env`

### 4. Verificar la configuración
Una vez configurado, tu archivo `.env` debería verse así:

```bash
GOOGLE_API_KEY=AIzaSyC...tu_api_key_completa_aqui
```

### 5. Reiniciar el servidor
Después de crear el archivo `.env`, reinicia tu servidor de desarrollo:

```bash
npm run dev
```

## Seguridad

⚠️ **IMPORTANTE**: 
- Nunca subas el archivo `.env` a tu repositorio
- El archivo `.env` ya está en `.gitignore` por seguridad
- Solo usa el archivo `env.example` como referencia

## Verificación

Para verificar que todo funciona:
1. Abre tu navegador en `http://localhost:4321`
2. Deberías ver el chat de IA personal
3. Intenta hacer una pregunta como "¿Cuáles son las habilidades de Alejandro?"
4. Si funciona, verás una respuesta personalizada

## Troubleshooting

### Error: "GOOGLE_API_KEY no está configurada"
- Verifica que el archivo `.env` existe en la raíz del proyecto
- Asegúrate de que la variable se llama exactamente `GOOGLE_API_KEY`
- Reinicia el servidor después de crear/modificar el archivo `.env`

### Error: "API key no configurada"
- Verifica que tu API key es válida
- Asegúrate de que no hay espacios extra en el archivo `.env`
- Verifica que la API key tiene permisos para Google Generative AI

### La IA no responde
- Verifica que tu API key es válida y activa
- Revisa la consola del navegador para errores
- Asegúrate de que tienes créditos disponibles en tu cuenta de Google AI
