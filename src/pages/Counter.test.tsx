
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from "vitest"
import Counter from './Counter'


describe('Counter Events', () => { 
    it('increments the counter on button click', () => {    
        render(<Counter />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(screen.getByText('Count: 1')).toBeInTheDocument()
    })
 })