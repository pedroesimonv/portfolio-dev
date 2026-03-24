# 🌌 Portfolio Web - Pedro Simón (Dev Quest Log)

Bienvenido al repositorio de mi portfolio profesional. [cite_start]Soy **Pedro Simón**, estudiante de Desarrollo de Aplicaciones Multimedia (DAM) [cite: 1, 2, 18][cite_start], con enfoque en el desarrollo Full Stack (C#, SQL, HTML/CSS, JS) y aplicaciones móviles (Android)[cite: 7, 12, 19].

Este proyecto ha sido diseñado desde cero buscando una estética "Dark Mode" relajante con sutiles toques *geek/gamer*, priorizando el rendimiento, la limpieza del código y la experiencia de usuario (UX).

## 🚀 Características Principales (Features)

- **Estética RPG/Consola:** Uso de tipografías monoespaciadas (`Fira Code`) y diseños inspirados en árboles de habilidades y registros de misiones.
- **Skill Tree Interactivo:** Tarjetas de tecnologías que revelan el nivel de dominio ("Lv.") mediante efectos hover fluidos.
- **Scroll Reveal (Intersection Observer):** Animaciones nativas en JavaScript puro que revelan las secciones suavemente a medida que el usuario hace scroll.
- **Fondo Dinámico 8-Bits:** Implementación de `particles.js` para generar un efecto de píxeles flotantes (bajísimo consumo de recursos).
- **Responsive Design:** Adaptación total a dispositivos móviles y tablets.

## 🛠️ Stack Tecnológico

Este proyecto se ha construido sin frameworks pesados de JavaScript para mantener la máxima velocidad de carga:

- **Estructura:** HTML5 Semántico.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (vía CDN) + CSS3 Personalizado.
- **Lógica e Interactividad:** Vanilla JavaScript (ES6+).
- **Efectos Visuales:** Librería `particles.js`.
- **Iconografía:** Material Symbols (Google).

## 🎓 Modo Evaluación (Módulo IPE II)

[cite_start]Este portfolio incluye las actividades evaluables del módulo de **IPE II** (Radar de Mercado, Semáforo de Autonomía y 5 Hitos de Valor)[cite: 32]. 

Para mantener la limpieza visual del portfolio de cara a reclutadores, esta sección está **oculta por defecto**. 

**Para activar la vista de evaluación:**
1. Abre el archivo `script.js`.
2. Localiza la variable de configuración en la parte superior:
   ```javascript
   const modoEvaluacionIPE = false;