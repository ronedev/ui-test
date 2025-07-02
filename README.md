# UI Base - Sistema de Componentes React

Sistema de componentes React moderno con TypeScript, construido con las mejores prácticas de desarrollo y calidad de código.

## 📚 Documentación Completa

### 🌟 [Guía de Contribución](./docs/CONTRIBUTING.md)
**Documento principal** - Introducción general al proyecto, configuración del entorno y resumen de todas las convenciones.

- Configuración del entorno de desarrollo
- Resumen de convenciones de código
- Proceso de desarrollo recomendado
- Resolución de problemas comunes

### 📝 [Convenciones de Commit](./docs/COMMIT_CONVENTIONS.md)
**Conventional Commits** - Guía detallada sobre cómo escribir mensajes de commit consistentes.

- Tipos de commit permitidos (`feat`, `fix`, `docs`, etc.)
- Formato y estructura de mensajes
- Ejemplos correctos e incorrectos
- Configuración automática con commitlint

### ⚙️ [Configuración de Desarrollo](./docs/DEVELOPMENT_SETUP.md)
**Setup técnico** - Documentación técnica completa sobre herramientas y configuraciones.

- Hooks de Git (Husky)
- Configuración de ESLint
- Setup de testing con Vitest
- Configuración de Storybook
- Scripts de desarrollo

### 🔍 [Reglas de Linting](./docs/LINTING_RULES.md)
**Estándares de código** - Guía exhaustiva sobre reglas de linting y mejores prácticas.

- Configuración de ESLint
- Plugins activos y sus reglas
- Ejemplos de código correcto e incorrecto
- Mejores prácticas de TypeScript y React

## 🚀 Inicio Rápido

### Requisitos previos
- Node.js (versión 18 o superior)
- npm

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd ui-test

# Instalar dependencias
npm install

# Configurar hooks de Git
npm run prepare
```

### Scripts de desarrollo
```bash
npm run dev          # Inicia Storybook en modo desarrollo (puerto 6006)
npm run build        # Construye el proyecto para producción
npm run test         # Ejecuta las pruebas con cobertura
npm run test:watch   # Ejecuta las pruebas en modo watch
npm run lint         # Ejecuta ESLint
npm run generate     # Genera nuevos componentes con Plop
```

## 🛠️ Stack Tecnológico

- **Framework**: React 18.3.1 + TypeScript
- **Build**: Vite 5.3.1
- **Styling**: Styled Components 6.1.11
- **Testing**: Vitest + Testing Library
- **Documentation**: Storybook 8.1.11
- **Code Quality**: ESLint + Husky + lint-staged + commitlint
- **Component Generation**: Plop

## 🎯 Filosofía del Proyecto

### Principios fundamentales:

1. **Consistencia**: Todos los componentes siguen los mismos patrones
2. **Calidad**: Pruebas automáticas y linting estricto
3. **Documentación**: Cada componente tiene su historia en Storybook
4. **Accesibilidad**: Componentes accesibles por defecto
5. **Performance**: Optimización y mejores prácticas de React

### Estructura de componentes:

```
src/
├── atoms/           # Componentes básicos (Button, Input, etc.)
├── molecules/       # Componentes compuestos (SearchBox, Card, etc.)
├── organisms/       # Componentes complejos (Header, Sidebar, etc.)
└── templates/       # Plantillas de layout
```

## 🔧 Herramientas de Desarrollo

### Automático en cada commit:
- ✅ **Linting automático** con ESLint + fix automático
- ✅ **Validación de mensajes** con commitlint
- ✅ **Build y tests** antes de push

### Durante desarrollo:
- 🖥️ **Storybook** para desarrollo visual de componentes
- 🧪 **Tests en tiempo real** con Vitest
- 📋 **Generación de componentes** con Plop

## 📖 Ejemplo de Uso

### Generar un nuevo componente
```bash
npm run generate
# Selecciona "component" y sigue las instrucciones
```

### Desarrollar un componente
```bash
npm run dev
# Storybook se abre en http://localhost:6006
```

### Ejecutar tests
```bash
npm run test:watch
# Tests se ejecutan automáticamente al guardar cambios
```

## 🤝 Contribuir

### Flujo de desarrollo:

1. **Crear rama** desde `main`
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar** siguiendo las convenciones
3. **Commit** usando convenciones establecidas
   ```bash
   git commit -m "feat: agrega nuevo componente Card"
   ```

4. **Push** (se ejecutarán automáticamente build y tests)
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. **Pull Request** con descripción clara

### Convenciones de commit:
```bash
feat: nueva funcionalidad
fix: corrección de errores
docs: documentación
style: formateo
refactor: refactoring
test: pruebas
chore: mantenimiento
```

## 📖 Recursos Adicionales

### Referencias externas:
- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Storybook Documentation](https://storybook.js.org/docs/)
- [Testing Library](https://testing-library.com/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Herramientas online:
- [Conventional Commit Generator](https://www.conventionalcommits.org/en/v1.0.0/)
- [ESLint Playground](https://eslint.org/play/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## 🚨 Resolución de Problemas

### Hooks de Git no se ejecutan:
```bash
chmod +x .husky/pre-commit .husky/pre-push .husky/commit-msg
npm run prepare
```

### Errores de linting:
```bash
npm run lint -- --fix
```

### Tests fallan:
```bash
npm run test -- --reporter=verbose
```

## ❓ Obtener Ayuda

Si tienes preguntas o problemas:

1. **Revisa la [documentación completa](./docs/)** primero
2. **Busca en los issues** existentes
3. **Crea un nuevo issue** con detalles específicos
4. **Consulta con el equipo** si es necesario

---

**¡Gracias por contribuir al proyecto! 🚀**
