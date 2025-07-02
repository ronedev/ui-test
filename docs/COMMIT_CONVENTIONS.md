# Convenciones de Commit

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/es/) para mantener un historial claro y consistente.

## 📋 Formato

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[footer opcional]
```

## 🏷️ Tipos de Commit

### `feat` - Nueva Funcionalidad
Para agregar nuevas características o funcionalidades.

```bash
feat: agrega componente de navegación
feat(auth): implementa login con OAuth
feat: agrega soporte para temas oscuros
```

### `fix` - Corrección de Errores
Para corregir bugs o problemas.

```bash
fix: corrige error en validación de formularios
fix(button): arregla problema de accesibilidad
fix: resuelve memory leak en componente modal
```

### `docs` - Documentación
Para cambios en documentación únicamente.

```bash
docs: actualiza README con instrucciones de instalación
docs: agrega ejemplos de uso del componente Button
docs(api): documenta nuevos endpoints
```

### `style` - Formateo
Para cambios que no afectan el significado del código (espacios, formateo, punto y coma faltantes, etc.).

```bash
style: corrige indentación en archivo de configuración
style: agrega espacios faltantes
style: organiza imports alfabéticamente
```

### `refactor` - Refactoring
Para cambios de código que no corrigen bugs ni agregan funcionalidades.

```bash
refactor: mejora lógica de validación
refactor(utils): simplifica función de formato de fecha
refactor: extrae lógica común a hook personalizado
```

### `test` - Pruebas
Para agregar pruebas faltantes o corregir pruebas existentes.

```bash
test: agrega pruebas unitarias para componente Card
test(integration): agrega pruebas de flujo de login
test: mejora cobertura de pruebas en utils
```

### `chore` - Mantenimiento
Para cambios en herramientas de build, dependencias, configuraciones, etc.

```bash
chore: actualiza dependencias a versiones más recientes
chore(deps): actualiza React a v18.3.1
chore: configura GitHub Actions para CI/CD
```

### `build` - Sistema de Build
Para cambios que afectan el sistema de build o dependencias externas.

```bash
build: actualiza configuración de Vite
build: agrega plugin para optimización de bundle
build(webpack): mejora configuración de desarrollo
```

### `ci` - Integración Continua
Para cambios en archivos y scripts de CI.

```bash
ci: agrega workflow de GitHub Actions
ci: configura cache para dependencias de npm
ci(github): actualiza versión de Node.js en pipeline
```

### `perf` - Mejoras de Rendimiento
Para cambios que mejoran el rendimiento.

```bash
perf: optimiza renderizado de lista virtual
perf(images): implementa lazy loading
perf: reduce tamaño del bundle principal
```

### `revert` - Reversión
Para revertir commits anteriores.

```bash
revert: revierte "feat: agrega componente experimental"
```

## 🎯 Ámbito (Scope)

El ámbito es opcional y puede indicar qué parte del código se ve afectada:

- `auth` - Autenticación
- `ui` - Interfaz de usuario
- `api` - API y servicios
- `config` - Configuraciones
- `deps` - Dependencias
- `docs` - Documentación

## ✅ Ejemplos Correctos

```bash
feat: agrega componente de búsqueda con filtros
feat(ui): implementa tema oscuro en toda la aplicación
fix: corrige problema de memoria en componente tabla
fix(auth): resuelve error de token expirado
docs: actualiza guía de instalación
docs(contributing): agrega sección de testing
refactor(utils): simplifica funciones de validación
test: agrega pruebas e2e para flujo de checkout
chore: actualiza ESLint a v9.0
chore(deps): actualiza todas las dependencias menores
```

## ❌ Ejemplos Incorrectos

```bash
# Sin tipo
actualiza documentación

# Tipo incorrecto
update: agrega nueva funcionalidad

# Descripción vacía
feat:

# Descripción muy larga (más de 72 caracteres)
feat: agrega una nueva funcionalidad super compleja que permite a los usuarios hacer muchas cosas diferentes

# Con punto al final
feat: agrega componente.

# Mayúscula al inicio de descripción
feat: Agrega componente de navegación
```

## 🔧 Configuración Automática

El proyecto utiliza `commitlint` para validar automáticamente los mensajes de commit. Si tu mensaje no cumple con las convenciones, el commit será rechazado.

### Reglas configuradas:
- El tipo es obligatorio y debe ser uno de los permitidos
- La descripción es obligatoria
- No debe terminar con punto
- Debe estar en minúsculas (excepto nombres propios)

## 💡 Consejos

1. **Sé específico**: "fix: corrige error en formulario de login" es mejor que "fix: corrige error"

2. **Usa imperativos**: "agrega", "corrige", "actualiza" en lugar de "agregado", "corregido", "actualizado"

3. **Una funcionalidad por commit**: Mantén los commits pequeños y enfocados

4. **Considera el contexto**: Si trabajas en una rama de feature, puedes ser más descriptivo

5. **Usa el cuerpo para explicar el "por qué"**, no el "qué"

## 🔗 Referencias

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Commitlint Rules](https://commitlint.js.org/#/reference-rules)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) 