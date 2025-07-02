# Configuración de Desarrollo

Esta guía detalla la configuración técnica del entorno de desarrollo, incluyendo hooks de Git, linting y herramientas de calidad de código.

## 🛠️ Stack Tecnológico

- **Framework**: React 18.3.1 con TypeScript
- **Build Tool**: Vite 5.3.1
- **Styling**: Styled Components 6.1.11
- **Testing**: Vitest + Testing Library
- **Documentation**: Storybook 8.1.11
- **Code Quality**: ESLint + Husky + lint-staged + commitlint

## 🪝 Hooks de Git (Husky)

### Configuración general

Los hooks están ubicados en `.husky/` y requieren permisos de ejecución:

```bash
# Verificar permisos
ls -la .husky/

# Dar permisos si es necesario
chmod +x .husky/pre-commit .husky/pre-push .husky/commit-msg

# Reinstalar hooks
npm run prepare
```

### Pre-commit Hook

**Archivo**: `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

**Configuración en `package.json`**:

```json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --fix --max-warnings=10"
    ]
  }
}
```

**Funcionalidad**:
- Ejecuta ESLint en archivos TypeScript/TSX en `src/`
- Aplica fixes automáticos cuando es posible
- Permite hasta 10 warnings
- Solo procesa archivos en staging area

### Commit-msg Hook

**Archivo**: `.husky/commit-msg`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

**Configuración en `commitlint.config.mjs`**:

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'build', 'chore', 'ci', 'docs', 'feat', 
      'fix', 'perf', 'refactor', 'revert', 'style', 'test'
    ]],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  }
};
```

**Funcionalidad**:
- Valida formato de mensajes de commit
- Aplica convenciones de Conventional Commits
- Rechaza commits con formato incorrecto

### Pre-push Hook

**Archivo**: `.husky/pre-push`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run build
npm run test
```

**Funcionalidad**:
- Ejecuta build completo del proyecto
- Ejecuta todas las pruebas con cobertura
- Debe pasar antes de permitir push

## 🔍 ESLint Configuration

**Archivo**: `eslint.config.js`

### Plugins activos:
- `@typescript-eslint` - Reglas específicas de TypeScript
- `eslint-plugin-react` - Reglas de React
- `eslint-plugin-react-hooks` - Reglas de React Hooks
- `eslint-plugin-import` - Reglas de imports
- `eslint-plugin-simple-import-sort` - Ordenamiento de imports
- `eslint-plugin-storybook` - Reglas de Storybook

### Configuración personalizada:
```javascript
// Reglas principales configuradas
{
  "extends": ["eslint-config-love"],
  "rules": {
    // Reglas específicas del proyecto
  }
}
```

## 🧪 Testing Setup

### Vitest Configuration

**Archivo**: `vitest.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
});
```

### Testing Utilities

**Archivo**: `tests/helpers.tsx`

Incluye helpers para testing con React Testing Library y renderizado con providers.

## 📚 Storybook Configuration

### Configuración principal

**Archivo**: `.storybook/main.ts`

```typescript
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};
```

## 🔧 Scripts de Desarrollo

### Scripts principales:

```bash
# Desarrollo
npm run dev              # Inicia Storybook (puerto 6006)

# Build y Testing
npm run build            # Build de producción (tsc + vite)
npm run test             # Pruebas con cobertura
npm run test:watch       # Pruebas en modo watch

# Calidad de código
npm run lint             # ESLint en todo el proyecto
npm run check:types      # Verificación de tipos TypeScript

# Generación
npm run generate         # Plop para generar componentes

# Storybook
npm run build-storybook  # Build de Storybook para producción
```

## 🚨 Solución de Problemas

### Hooks no se ejecutan

```bash
# 1. Verificar instalación de Husky
npm run prepare

# 2. Verificar permisos
ls -la .husky/
chmod +x .husky/*

# 3. Verificar configuración de Git
git config core.hooksPath .husky
```

### Errores de commitlint

```bash
# Verificar configuración
npx commitlint --print-config

# Probar mensaje manualmente
echo "feat: test message" | npx commitlint

# Verificar compatibilidad ES modules
node --check commitlint.config.mjs
```

### Errores de lint-staged

```bash
# Probar manualmente
npx lint-staged

# Verificar configuración
npx lint-staged --help

# Debug
npx lint-staged --debug
```

### Errores de ESLint

```bash
# Ver configuración actual
npx eslint --print-config src/App.tsx

# Ejecutar con debug
npm run lint -- --debug

# Fix automático
npm run lint -- --fix
```

## 📦 Dependencias de Desarrollo

### Core:
- `husky` - Git hooks
- `lint-staged` - Linting en archivos staged
- `@commitlint/cli` + `@commitlint/config-conventional` - Validación de commits

### Linting:
- `eslint` + plugins - Linting de código
- `@typescript-eslint/*` - Reglas TypeScript
- `eslint-config-love` - Configuración estricta

### Testing:
- `vitest` - Test runner
- `@vitest/coverage-v8` - Cobertura de código
- `@testing-library/react` - Testing utilities
- `jsdom` - DOM simulation

### Build:
- `vite` - Build tool
- `@vitejs/plugin-react-swc` - React plugin
- `vite-plugin-dts` - Generación de tipos

## 🔄 Flujo de Desarrollo Recomendado

1. **Crear rama**:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar con feedback continuo**:
   ```bash
   npm run dev          # Storybook para UI
   npm run test:watch   # Tests en tiempo real
   ```

3. **Commit incremental**:
   ```bash
   git add .
   git commit -m "feat: agrega componente base"
   # Hook pre-commit ejecuta lint-staged automáticamente
   # Hook commit-msg valida el formato
   ```

4. **Push seguro**:
   ```bash
   git push origin feature/nueva-funcionalidad
   # Hook pre-push ejecuta build y tests completos
   ```

5. **Pull Request** con toda la validación completa ✅ 