import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../tests/helpers'
import { Stepper } from './Stepper'
import type { Props } from './Stepper.types'
import { useStepper } from './useStepper'

vi.mock('./useStepper')

// Constantes para evitar magic numbers
const MIN_VALUE = 1
const DEFAULT_VALUE = 1  
const MAX_VALUE = 10

describe('Stepper', () => {
  const render = createRender(Stepper)
  const mockUseStepper = vi.mocked(useStepper)
  
  const defaultProps: Props = {
    min: MIN_VALUE,
    defaultValue: DEFAULT_VALUE,
    max: MAX_VALUE,
    onStepperChange: vi.fn(),
    onTrashClick: vi.fn()
  }

  beforeEach(() => {
    mockUseStepper.mockReturnValue({
      increment: vi.fn(),
      decrement: vi.fn(),
      shouldShowTrashIcon: true,
      counter: DEFAULT_VALUE
    })
  })

  it('Should render Stepper with initial state', () => {
    render(defaultProps)
    expect(screen.getByText(DEFAULT_VALUE.toString())).toBeDefined()
    expect(screen.getByTestId('trash-icon')).toBeDefined()
    expect(screen.getByTestId('plus-icon')).toBeDefined()
  })

  it('should call increment function when add button is clicked', () => {
    const incrementMock = vi.fn()
    mockUseStepper.mockReturnValue({
      increment: incrementMock,
      decrement: vi.fn(),
      shouldShowTrashIcon: true,
      counter: DEFAULT_VALUE
    })
    render(defaultProps)
    const addButton = screen.getByTestId('plus-icon')
    fireEvent.click(addButton)
    expect(incrementMock).toHaveBeenCalled()
  })
})
