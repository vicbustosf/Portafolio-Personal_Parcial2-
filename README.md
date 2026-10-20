# Portafolio Personal - Victoria Bustos

¡Hola! Este es mi portafolio personal. Fue diseñado y desarrollado desde cero para mostrar mis habilidades como estudiante de Analista Programador, mis proyectos y mi experiencia. 

## Tecnologías Utilizadas

*   **React:** Para la construcción de la interfaz basada en componentes.
*   **Vite:** Como entorno de desarrollo rápido y empaquetador.
*   **Ant Design:** Como librería principal de componentes UI (botones, tarjetas, formularios, carrusel).
*   **CSS Vanilla (Variables):** Para el manejo dinámico de los temas (Oscuro/Claro).
*   **Vitest & React Testing Library:** Para las pruebas automatizadas.
*   **Google Fonts:** Tipografía "Inter".

## Arquitectura del Proyecto

```text
src/
├── assets/          # Imágenes locales
├── components/
│   ├── atoms/       # Componentes básicos (Título, Botón de tema, Año)
│   ├── molecules/   # Unión de átomos (Menú de navegación)
│   ├── organisms/   # Secciones completas de la app (Sobre Mí, Experiencia, Estudios, Proyectos, Contacto, Formulario)
│   └── layouts/     # Estructura general de la página (Header, Footer y contenido)
├── hooks/           # Lógica reutilizable (useTema para el modo oscuro/claro)
├── App.jsx          # Componente raíz y configuración del tema global de Ant Design
└── index.css        # Variables de color globales y estilos base
```

## Características Principales

1.  **Modo Oscuro / Claro:** Implementado con un Hook personalizado (`useTema`) que guarda la preferencia del usuario en el `localStorage` y actualiza las variables CSS de toda la página. El tema de Ant Design se adapta automáticamente usando `ConfigProvider`.
2.  **Navegación Fluida:** El header es fijo y permite desplazarse suavemente entre las secciones ancladas (`id`) de la página.
3.  **Layout en Dos Columnas:** Inspirado en portafolios modernos, la información personal se mantiene fija (`position: sticky`) a la izquierda, mientras el contenido principal hace scroll a la derecha.
4.  **Interactividad (Hooks):** 
    *   **Mini Juego:** Un juego de "Adivina el Número" con lógica de estado (`useState` y `useEffect`) para manejar los intentos y las pistas.
    *   **Confeti:** Animación CSS controlada por estado al presionar el botón "¡Contrátame!".
5.  **Formulario Validado:** Formulario de contacto con validación del lado del cliente (campos requeridos y formato de correo) usando las reglas de Ant Design.
6.  **Carrusel de Proyectos:** Galería interactiva con flechas de navegación y etiquetas (tags) personalizadas.

## Testing

Se prueban:
*   El renderizado del formulario y la interacción con sus campos.
*   El renderizado de los textos principales y el botón en la sección de Experiencia.
*   La lógica del Hook `useTema` (cambio de estado).

Para ejecutar los tests, asegúrate de tener las dependencias instaladas y corre:
```bash
npm run test
```

## Instalación y Uso Local

Si quieres clonar este proyecto y probarlo en tu computadora, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/vicbustosf/Portafolio-Personal_Parcial2-.git
   ```

2. Entra a la carpeta del proyecto:
   ```bash
   cd Portafolio-Personal_Parcial2-
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173` (o el puerto que te indique la terminal).

---

*Diseñado y programado con 💜 por Victoria Bustos.*
