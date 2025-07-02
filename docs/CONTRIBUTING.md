# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a entender nuestras convenciones y procesos.

## 📋 Tabla de Contenidos

- [Configuración del Entorno](#configuración-del-entorno)
- [Convenciones de Código](#convenciones-de-código)
- [Convenciones de Commit](#convenciones-de-commit)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Hooks de Git](#hooks-de-git)

## 🛠️ Configuración del Entorno

### Requisitos previos
- Node.js (versión 18 o superior)
- npm

### Instalación
```bash
npm install
```

### Scripts disponibles
```bash
npm run dev          # Inicia Storybook en modo desarrollo
npm run build        # Construye el proyecto
npm run test         # Ejecuta las pruebas con cobertura
npm run test:watch   # Ejecuta las pruebas en modo watch
npm run lint         # Ejecuta ESLint
npm run generate     # Genera nuevos componentes con Plop
```

## 🎨 Convenciones de Código

### Estructura de Archivos
```
src/
├── atoms/           # Componentes básicos
├── molecules/       # Componentes compuestos
├── organisms/       # Componentes complejos
└── templates/       # Plantillas de layout
```

### Nomenclatura
- **Componentes**: PascalCase (ej. `Button`, `UserProfile`)
- **Archivos**: PascalCase para componentes, camelCase para utilities
- **Carpetas**: PascalCase para componentes

### Archivos por Componente
Cada componente debe incluir:
- `ComponentName.tsx` - Componente principal
- `ComponentName.styled.ts` - Estilos con styled-components
- `ComponentName.types.ts` - Definiciones de tipos
- `ComponentName.test.tsx` - Pruebas unitarias
- `ComponentName.stories.tsx` - Historias de Storybook
- `index.ts` - Archivo de exportación

## 📝 Convenciones de Commit

Ver [COMMIT_CONVENTIONS.md](./COMMIT_CONVENTIONS.md) para detalles completos.

### Formato básico
```
<tipo>: <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos permitidos
- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `docs`: Documentación
- `style`: Formateo, punto y coma faltantes, etc.
- `refactor`: Refactoring de código
- `test`: Agregar o corregir pruebas
- `chore`: Mantenimiento

## 🔄 Proceso de Desarrollo

1. **Crear rama** desde `main`
2. **Desarrollar** siguiendo las convenciones
3. **Commit** usando convenciones establecidas
4. **Push** (se ejecutarán automáticamente build y tests)
5. **Pull Request** con descripción clara

## 🪝 Hooks de Git

El proyecto utiliza Husky para automatizar validaciones:

### Pre-commit
- Ejecuta `lint-staged` (ESLint con auto-fix)
- Solo aplica a archivos `*.ts` y `*.tsx` en `src/`

### Commit-msg
- Valida formato de mensaje con `commitlint`
- Rechaza commits que no sigan las convenciones

### Pre-push
- Ejecuta `npm run build`
- Ejecuta `npm run test`
- Debe pasar antes de permitir el push

Ver [DEVELOPMENT_SETUP.md](./DEVELOPMENT_SETUP.md) para más detalles técnicos.

## 🚨 Resolución de Problemas

### Hooks no se ejecutan
```bash
# Dar permisos de ejecución
chmod +x .husky/pre-commit .husky/pre-push .husky/commit-msg

# Reinstalar Husky
npm run prepare
```

### Errores de linting
```bash
# Ejecutar fix automático
npm run lint -- --fix

# Ver reglas específicas
npm run lint -- --debug
```

## 📚 Recursos Adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Storybook Documentation](https://storybook.js.org/docs/)
- [Testing Library](https://testing-library.com/docs/) 