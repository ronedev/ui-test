# Reglas de Linting y Estándares de Código

Este documento detalla las reglas de linting, estándares de código y mejores prácticas aplicadas en el proyecto.

## 📋 Configuración de ESLint

El proyecto utiliza `eslint-config-love` como base, que es una configuración estricta que incluye:

- **TypeScript ESLint** - Reglas específicas para TypeScript
- **Standard JS** - Estilo de código JavaScript estándar
- **Import/Export** - Validación de imports y exports
- **Promise** - Mejores prácticas con Promises

## 🎯 Plugins Activos

### @typescript-eslint
Reglas específicas para TypeScript que mejoran la calidad del código:

```javascript
// ✅ Correcto
const user: User = {
  id: 1,
  name: 'Juan'
}

// ❌ Incorrecto - any type
const user: any = getData()
```

### eslint-plugin-react
Reglas para React y JSX:

```tsx
// ✅ Correcto
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

// ❌ Incorrecto - falta key en lista
return items.map(item => <div>{item.name}</div>)
```

### eslint-plugin-react-hooks
Validación de las reglas de hooks:

```tsx
// ✅ Correcto
const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue)
  
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  
  return [count, setCount] as const
}

// ❌ Incorrecto - hook dentro de condicional
if (condition) {
  const [state] = useState(0) // ❌
}
```

### eslint-plugin-simple-import-sort
Ordenamiento automático de imports:

```tsx
// ✅ Correcto (orden automático)
import React from 'react'
import { render } from '@testing-library/react'

import { Button } from '../Button'
import { theme } from '../theme'

import type { ButtonProps } from './Button.types'
```

## 🏗️ Estructura y Nomenclatura

### Componentes

```tsx
// ✅ Estructura correcta de componente
import React from 'react'
import type { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styled'

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  ...props 
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
```

### Tipos

```tsx
// ✅ Definición de tipos
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
}

// ✅ Uso de union types
type Theme = 'light' | 'dark'

// ✅ Uso de generics
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

### Hooks Personalizados

```tsx
// ✅ Hook personalizado correcto
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  
  const toggle = useCallback(() => setValue(prev => !prev), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  
  return {
    value,
    toggle,
    setTrue,
    setFalse
  }
}
```

## 🎨 Styled Components

### Estructura recomendada:

```tsx
// Button.styled.ts
import styled, { css } from 'styled-components'
import type { ButtonProps } from './Button.types'

const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    
    &:hover {
      background-color: #545b62;
    }
  `
}

export const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'size'>>`
  /* Estilos base */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  /* Aplicar variante */
  ${({ variant = 'primary' }) => variantStyles[variant]};
  
  /* Responsive */
  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }
`
```

## 🧪 Testing

### Estructura de pruebas:

```tsx
// Button.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  const defaultProps = {
    children: 'Click me'
  }

  it('should render correctly', () => {
    render(<Button {...defaultProps} />)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    
    render(<Button {...defaultProps} onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should apply correct variant styles', () => {
    render(<Button {...defaultProps} variant="secondary" />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('variant-secondary')
  })
})
```

## 📚 Storybook Stories

### Estructura de stories:

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
}
```

## 🚫 Reglas Específicas y Errores Comunes

### TypeScript

```tsx
// ❌ Evitar any
const data: any = fetchData()

// ✅ Usar tipos específicos
const data: User[] = fetchData()

// ❌ Imports de side-effect
import { type ButtonProps, someUtility } from './types'

// ✅ Separar type imports
import type { ButtonProps } from './types'
import { someUtility } from './utils'
```

### React

```tsx
// ❌ Evitar arrow functions inline en renders
<button onClick={() => console.log('click')}>

// ✅ Usar useCallback o funciones definidas
const handleClick = useCallback(() => {
  console.log('click')
}, [])

<button onClick={handleClick}>
```

### Magic Numbers

```tsx
// ❌ Números mágicos
const delay = 1000
setTimeout(callback, delay)

// ✅ Constantes con nombre
const ANIMATION_DURATION = 1000 // ms
setTimeout(callback, ANIMATION_DURATION)
```

## ⚙️ Configuración Lint-Staged

La configuración actual en `package.json`:

```json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --fix --max-warnings=10"
    ]
  }
}
```

### Flujo de lint-staged:

1. **Pre-commit hook** se ejecuta
2. **lint-staged** identifica archivos TypeScript/TSX modificados en `src/`
3. **ESLint** se ejecuta con `--fix` (corrige automáticamente lo que puede)
4. **Máximo 10 warnings** permitidos
5. Si hay errores o más de 10 warnings, **el commit se rechaza**

## 🔧 Scripts de Linting

```bash
# Ejecutar ESLint en todo el proyecto
npm run lint

# Ejecutar con fix automático
npm run lint -- --fix

# Ver reglas específicas aplicadas
npm run lint -- --debug

# Verificar configuración
npx eslint --print-config src/App.tsx

# Ejecutar solo en archivos específicos
npx eslint src/components/**/*.tsx
```

## 💡 Mejores Prácticas

### 1. Consistencia
- Usar siempre las mismas convenciones de nomenclatura
- Mantener estructura de archivos consistente
- Aplicar patrones similares en toda la aplicación

### 2. Legibilidad
- Nombres de variables y funciones descriptivos
- Comentarios cuando la lógica es compleja
- Evitar anidación excesiva

### 3. Mantenibilidad
- Componentes pequeños y enfocados
- Separación de responsabilidades
- Reutilización a través de composición

### 4. Performance
- Usar `useCallback` y `useMemo` apropiadamente
- Evitar re-renders innecesarios
- Optimizar imports (tree-shaking)

### 5. Accesibilidad
- Usar semantic HTML
- Proporcionar labels y aria-attributes
- Soporte para navegación por teclado

## 🔍 Debug y Troubleshooting

### Ver configuración actual:
```bash
npx eslint --print-config src/App.tsx
```

### Analizar archivos específicos:
```bash
npx eslint src/components/Button/Button.tsx --format=json
```

### Debug de reglas:
```bash
npm run lint -- --debug --no-inline-config
```

### Verificar que lint-staged funciona:
```bash
npx lint-staged --debug
``` 