import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ErrorMessage } from './ErrorMessage'

describe('Conditional rendering', () => {
  it('does not render when error is missing', () => {
    render(<ErrorMessage />)

    expect(screen.queryByText(/error/i)).toBeNull()
  })

  it('renders error message when error exists', () => {
    render(<ErrorMessage error="Something went wrong" />)

    expect(
      screen.getByText('Something went wrong')
    ).toBeInTheDocument()
  })
})
