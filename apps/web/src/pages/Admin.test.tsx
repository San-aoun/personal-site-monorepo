import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Admin from './Admin'

// Mock axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn().mockResolvedValue({ data: [] }),
    post: vi.fn().mockResolvedValue({ data: {} }),
    delete: vi.fn().mockResolvedValue({ data: {} }),
  },
}))

describe('Admin', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the admin panel heading', () => {
    render(<Admin />)
    expect(screen.getByText('🔐 Admin Panel')).toBeInTheDocument()
  })

  it('renders form inputs', () => {
    render(<Admin />)
    
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create Post' })).toBeInTheDocument()
  })

  it('allows typing in form inputs', async () => {
    render(<Admin />)

    const titleInput = screen.getByPlaceholderText('Title')
    const contentInput = screen.getByPlaceholderText('Content')

    await user.type(titleInput, 'Test Title')
    await user.type(contentInput, 'Test Content')

    expect(titleInput).toHaveValue('Test Title')
    expect(contentInput).toHaveValue('Test Content')
  })

  it('renders create post button', () => {
    render(<Admin />)
    
    const createButton = screen.getByRole('button', { name: 'Create Post' })
    expect(createButton).toBeInTheDocument()
  })

  it('component mounts without errors', () => {
    expect(() => render(<Admin />)).not.toThrow()
  })
})
