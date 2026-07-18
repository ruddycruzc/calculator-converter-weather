# Calculator, Conversor de Divisas y Tiempo

Aplicación desarrollada con **Angular 21** que reúne en una sola pantalla una calculadora, un conversor de divisas y un módulo con información meteorológica en tiempo real.

Este proyecto forma parte del **Full Stack Java Bootcamp**. Aunque el ejercicio original estaba pensado para desarrollarse con Vue 3, he decidido adaptarlo completamente a Angular 21 para seguir la misma arquitectura y metodología que utilizo en el resto de mis proyectos.

---

# Vista previa

 Proyecto en desarrollo.

Cuando el proyecto avance se añadirán capturas de pantalla y una demostración de la aplicación.

---

# Índice

- Descripción
- Objetivos
- Funcionalidades
- Tecnologías
- APIs utilizadas
- Arquitectura
- Estructura del proyecto
- Gestión del estado
- Decisiones de diseño
- Estilos
- Diseño responsive
- Flujo de trabajo
- Instalación
- Scripts disponibles
- Roadmap
- Mejoras futuras
- Autor
- Licencia

---

# Descripción

Este proyecto nace con el objetivo de ir un paso más allá de una simple calculadora.

Además de cumplir los requisitos del ejercicio, quiero construir una aplicación con una arquitectura limpia, escalable y fácil de mantener, aplicando buenas prácticas de Angular, Git y testing.

Toda la aplicación estará organizada siguiendo una arquitectura basada en funcionalidades (*Feature-Based Architecture*), donde cada módulo será independiente y tendrá su propia responsabilidad.

---

# Objetivos

Con este proyecto quiero:

- Practicar Angular 21.
- Consumir APIs REST.
- Aplicar una arquitectura profesional.
- Utilizar Angular Signals para gestionar el estado.
- Crear componentes reutilizables.
- Trabajar siguiendo Git Flow.
- Documentar el proyecto desde el primer día.
- Crear un proyecto que pueda incluir en mi portfolio.

---

# Funcionalidades

## Calculadora

Incluye las operaciones básicas:

- Suma
- Resta
- Multiplicación
- División
- Números decimales
- Botón CE
- Control de errores (por ejemplo, división entre cero)

Más adelante me gustaría añadir:

- Historial de operaciones
- Atajos de teclado
- Modo calculadora científica

---

## Conversor de divisas

Permitirá convertir entre:

- Euro (€)
- Dólar estadounidense ($)
- Yen japonés (¥)

Las conversiones se realizarán utilizando una API externa para obtener el cambio actualizado.

---

## Tiempo

Mostrará información meteorológica obtenida desde la API de El Tiempo.

La aplicación mostrará:

- Temperatura actual
- Estado del cielo
- Imagen representativa según el tiempo
- Información de Asturias o del territorio nacional

---

## Memoria

En lugar de utilizar Pinia (como indicaba el ejercicio original para Vue), implementaré una solución propia de Angular.

Dispondrá de las funciones:

- M+
- MR
- MC

La memoria permanecerá guardada incluso si se recarga la página gracias al uso de **Angular Signals** y **localStorage**.

---

# Tecnologías

<p align="left">
<img src="https://skillicons.dev/icons?i=angular,typescript,css,html,nodejs,npm,git,github,vscode"/>
</p>

| Categoría | Tecnología |
|-----------|------------|
| Framework | Angular 21 |
| Lenguaje | TypeScript |
| Estilos | CSS |
| Gestión del estado | Angular Signals |
| Comunicación HTTP | HttpClient |
| Persistencia | localStorage |
| Testing | Karma + Jasmine |
| Testing E2E | Playwright |
| Control de versiones | Git y GitHub |
| Editor | Visual Studio Code |
|Analisis de código | ESLint |
---

# APIs utilizadas

## CurrencyFreaks

Se utilizará para obtener el valor actualizado de las divisas.

https://currencyfreaks.com/

## El Tiempo

Se utilizará para mostrar la información meteorológica.

https://www.el-tiempo.net/api

---

# Arquitectura

El proyecto seguirá una arquitectura basada en funcionalidades, similar a la utilizada en proyectos reales de Angular.

```text
src/
└── app
    ├── core
    │   ├── constants
    │   ├── models
    │   ├── services
    │   └── utils
    │
    ├── features
    │   ├── calculator
    │   ├── converter
    │   ├── weather
    │   └── memory
    │
    ├── shared
    │   ├── components
    │   ├── directives
    │   └── pipes
    │
    ├── layout
    │
    ├── app.routes.ts
    └── app.config.ts
```

Cada funcionalidad estará aislada del resto para facilitar el mantenimiento y futuras ampliaciones.

---

# Gestión del estado

El ejercicio original proponía utilizar **Pinia**, ya que estaba pensado para desarrollarse con Vue 3.

Al realizar este proyecto con Angular 21, he decidido sustituirlo por una solución nativa basada en:

- Angular Signals
- Dependency Injection
- MemoryService
- localStorage

Con esta combinación puedo mantener un estado reactivo sin necesidad de instalar librerías adicionales y, además, conservar los datos incluso después de recargar la página.

Esta solución mantiene el proyecto ligero, fácil de entender y alineado con las buenas prácticas actuales de Angular.

---

# Decisiones de diseño

Aunque el objetivo principal era desarrollar una calculadora, he querido aprovechar este proyecto para practicar una arquitectura más cercana a la que utilizaría en un entorno profesional.

Durante el desarrollo seguiré estas decisiones:

- Separar cada funcionalidad en su propio módulo.
- Mantener una única responsabilidad por componente y servicio.
- Evitar duplicar código.
- Centralizar la lógica de negocio en servicios.
- Crear componentes reutilizables siempre que sea posible.
- Documentar el proyecto desde el inicio.
- Mantener una estructura limpia y fácil de ampliar.

---

# Estrategia de estilos

Para los estilos utilizaré principalmente **CSS**, ya que es la tecnología con la que me siento más cómoda y me permite controlar completamente el diseño de la aplicación.

Mi idea es seguir una estructura sencilla y organizada, utilizando:

- Variables CSS para colores y tamaños.
- Flexbox y Grid para la distribución.
- Diseño Mobile First.
- Componentes con estilos independientes.

Si durante el desarrollo considero que alguna parte puede beneficiarse de Tailwind CSS, lo incorporaré únicamente donde realmente aporte valor.

---

# Diseño Responsive

Toda la aplicación se desarrollará siguiendo la filosofía **Mobile First**.

Esto significa que primero diseñaré la interfaz para dispositivos móviles y, posteriormente, iré adaptándola a pantallas más grandes.

El objetivo es que la aplicación funcione correctamente en:

- Móviles
- Tablets
- Ordenadores

Todas las funcionalidades estarán disponibles desde una única pantalla, sin necesidad de cambiar de página.

---

# Flujo de trabajo

Para este proyecto seguiré una metodología similar a la utilizada en proyectos colaborativos.

## Git Flow

```text
main
│
└── develop
    │
    ├── feature/readme
    ├── feature/project-structure
    ├── feature/calculator
    ├── feature/converter
    ├── feature/weather
    ├── feature/memory
    ├── feature/testing
    └── feature/deployment
```

## Reglas de desarrollo

Durante el proyecto intentaré mantener una forma de trabajo constante:

- Crear una rama para cada nueva funcionalidad.
- Realizar commits pequeños y descriptivos.
- Ejecutar `ng build` antes de fusionar una rama.
- Documentar los avances conforme se desarrolla el proyecto.
- Revisar el código antes de realizar un merge.
- Mantener el repositorio limpio y organizado.

---

# Instalación

Clona el repositorio.

```bash
git clone https://github.com/ruddycruzc/calculator-converter-weather.git
```

Accede al directorio del proyecto.

```bash
cd calculator-converter-weather
```

Instala las dependencias.

```bash
npm install
```

Inicia el servidor de desarrollo.

```bash
ng serve
```

Abre el navegador en:

```text
http://localhost:4200
```

---

# Compilar el proyecto

Para generar la versión de producción ejecuta:

```bash
ng build
```

---

# Ejecutar las pruebas

Pruebas unitarias.

```bash
ng test
```

Pruebas End-to-End.

```bash
ng e2e
```

---

# Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `ng serve` | Inicia el servidor de desarrollo. |
| `ng build` | Genera la versión de producción. |
| `ng test` | Ejecuta las pruebas unitarias. |
| `ng e2e` | Ejecuta las pruebas End-to-End. |
| `ng lint` | Ejecuta el análisis de código. |

---

# Variables de entorno

Para utilizar la API de CurrencyFreaks será necesario crear el archivo correspondiente dentro de `src/environments`.

```ts
export const environment = {
  currencyApiKey: 'TU_API_KEY'
};
```

Por seguridad, la clave de la API no se incluirá en el repositorio.

---
# Roadmap

A continuación se muestra el progreso del proyecto.

## Preparación

- [x] Crear el proyecto con Angular 21
- [x] Crear el repositorio en GitHub
- [x] Definir la arquitectura del proyecto
- [x] Crear la documentación inicial (README)

## Desarrollo

- [ ] Crear la interfaz de la calculadora
- [ ] Implementar la lógica de la calculadora
- [ ] Añadir el servicio de memoria (M+, MR y MC)
- [ ] Integrar el conversor de divisas
- [ ] Integrar el módulo del tiempo
- [ ] Mejorar el diseño responsive

## Calidad

- [ ] Escribir pruebas unitarias
- [ ] Escribir pruebas End-to-End
- [ ] Revisar y refactorizar el código
- [ ] Optimizar el rendimiento

## Publicación

- [ ] Desplegar la aplicación
- [ ] Añadir capturas de pantalla
- [ ] Publicar la versión 1.0

---

# Capturas de pantalla

 Esta sección se irá actualizando conforme avance el desarrollo del proyecto.

Aquí añadiré imágenes de:

- Pantalla principal.
- Calculadora.
- Conversor de divisas.
- Módulo del tiempo.
- Diseño responsive.

---

# Lo que estoy aprendiendo con este proyecto

Este proyecto no solo consiste en desarrollar una calculadora. También es una oportunidad para seguir mejorando como desarrolladora Frontend.

Con él estoy reforzando conocimientos sobre:

- Arquitectura de aplicaciones Angular.
- Organización de proyectos grandes.
- Angular Signals.
- Consumo de APIs REST.
- Gestión del estado.
- Testing.
- Buenas prácticas con Git y GitHub.
- Diseño responsive.
- Documentación técnica.

Mi objetivo es que este proyecto refleje mi forma de trabajar y mi evolución como desarrolladora.

---


# Autor

**Ruddy Cruz Campoverde**

Estudiante de Desarrollo Web y Full Stack Java.

Este proyecto forma parte de mi proceso de aprendizaje y de mi portfolio como desarrolladora.

### Contacto

- **GitHub:** https://github.com/ruddycruzc
- **LinkedIn:** https://www.linkedin.com/in/ruddycruzc

---

# Licencia

Este proyecto ha sido desarrollado con fines educativos como parte del **Full Stack Java Bootcamp**.

El código es de libre consulta para fines de aprendizaje, aunque las APIs utilizadas mantienen sus propias condiciones de uso.

---