# 🌌 Dev Quest Log - Portfolio Full Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

<!-- ESPACIO PARA EL HERO GIF (Demostración de carga y scroll reveal) -->
![Hero Demo](public\assets\hero-demo.gif)
*Vista de carga inicial y animaciones nativas de scroll calibradas para un rendimiento óptimo.*

> Single Page Application (SPA) que centraliza mis proyectos técnicos bajo una estética "Dark Mode" relajante con toques RPG/Gamer. Construido con un enfoque riguroso en el rendimiento (Core Web Vitals), accesibilidad y SEO técnico, demostrando dominio de Vanilla JavaScript sin depender de frameworks pesados.

## 📖 El Concepto
Más que un simple escaparate visual, este portfolio es un proyecto de ingeniería orientada al rendimiento (WPO). Combina una experiencia de usuario (UX) inmersiva con una base técnica extremadamente limpia, logrando una puntuación perfecta (100) en las auditorías de Lighthouse al liberar completamente el hilo principal del navegador.

## 🚀 Características y UX (Features)

- **Estética RPG/Consola:** Uso de tipografías monoespaciadas (`Fira Code`) y diseños UI inspirados en registros de misiones.
- **Skill Tree Interactivo:** Tarjetas de tecnologías que revelan el nivel de dominio ("Lv.") mediante transiciones y efectos hover fluidos.
- **Scroll Reveal Nativo:** Animaciones de entrada gestionadas íntegramente con la API `Intersection Observer` de JavaScript puro, calibradas al milímetro (`threshold: 0.15`) para un renderizado perfecto.
- **UI Responsiva y Proporcional:** Contenedores de proyectos fluidos basados en relaciones de aspecto nativas (`aspect-video`) para garantizar la integridad visual de las capturas en cualquier dispositivo.

<!-- ESPACIO PARA LA CAPTURA DEL SKILL TREE (Demostrando el hover y el diseño de la tarjeta) -->
![Skill Tree UI](public\assets\skill-tree-ui.png)
*Detalle interactivo del Skill Tree y revelación de niveles de tecnología.*

## 🏗️ Arquitectura y Decisiones Técnicas

- **Core:** HTML5 semántico y JavaScript Vanilla (ES6+). Manipulación directa del DOM y observadores aislados lógicamente para evitar colisiones.
- **Estilos:** Tailwind CSS integrado para un diseño atómico, 100% responsive y escalable.
- **Build Tooling:** Vite actúa como motor de compilación, garantizando un empaquetado ultrarrápido y optimización de *assets* estáticos para producción.
- **Catálogo Dinámico:** Integración de proyectos Full Stack complejos (ej. *Smart Family Dashboard* con React, Node, WebSockets y Docker).

<!-- ESPACIO PARA LA COMPARATIVA RESPONSIVE (Desktop vs Mobile) -->
![Responsive Design](public\assets\responsive-mockup.png)
*Adaptación fluida de la arquitectura del portfolio entre Desktop y Mobile.*

## ⚡ Optimizaciones Clave (SEO y Core Web Vitals)

- **WPO (Web Performance Optimization):** Arquitectura sin dependencias gráficas pesadas (cero librerías de partículas) para evitar el bloqueo de renderizado y el *Cumulative Layout Shift* (CLS).
- **SEO Técnico:** Configuración integral con `robots.txt`, `sitemap.xml` dinámico y etiquetas de metadatos Open Graph para maximizar la visibilidad orgánica.
- **Accesibilidad Inclusiva:** Jerarquía de encabezados estricta, contraste de colores auditado y uso de etiquetas ARIA.

## 🛠️ Instalación y Entorno Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/pedroesimonv/portfolio-dev