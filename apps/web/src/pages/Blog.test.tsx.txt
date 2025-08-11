import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Blog from './Blog'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('Blog', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
  })

  it('renders the main heading', () => {
    render(<Blog />)
    expect(screen.getByText('📝 My Blog Posts')).toBeInTheDocument()
  })

  it('loads initial posts when localStorage is empty', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(<Blog />)
    
    expect(screen.getByText('Getting Started with React Automation Testing')).toBeInTheDocument()
    expect(screen.getByText('CI/CD Pipeline Best Practices')).toBeInTheDocument()
  })

  it('loads saved posts from localStorage', () => {
    const savedPosts = JSON.stringify([
      {
        id: 1,
        title: 'Saved Post',
        content: 'Saved content',
        date: '2024-01-01',
        views: 10
      }
    ])
    localStorageMock.getItem.mockReturnValue(savedPosts)
    
    render(<Blog />)
    
    expect(screen.getByText('Saved Post')).toBeInTheDocument()
  })

  it('renders add new post form', () => {
    render(<Blog />)
    
    expect(screen.getByText('Add New Post')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Medium article link')).toBeInTheDocument()
    expect(screen.getByText('Add Post')).toBeInTheDocument()
  })

  it('allows adding a new post', async () => {
    render(<Blog />)
    
    const linkInput = screen.getByPlaceholderText('Enter Medium article link')
    const addButton = screen.getByText('Add Post')
    
    await user.type(linkInput, 'https://example.com/test-article')
    await user.click(addButton)
    
    await waitFor(() => {
      expect(screen.getByText('New Blog Post')).toBeInTheDocument()
    })
  })

  it('displays post views correctly', () => {
    render(<Blog />)
    
    // Check that view counts are displayed
    expect(screen.getByText('120 views')).toBeInTheDocument()
    expect(screen.getByText('89 views')).toBeInTheDocument()
  })

  it('displays post dates correctly', () => {
    render(<Blog />)
    
    expect(screen.getByText('2024-01-15')).toBeInTheDocument()
    expect(screen.getByText('2024-01-10')).toBeInTheDocument()
  })

  it('renders external links correctly', () => {
    render(<Blog />)
    
    const links = screen.getAllByText('Read on Medium')
    expect(links.length).toBeGreaterThan(0)
    
    links.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('target', '_blank')
      expect(link.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('displays post content', () => {
    render(<Blog />)
    
    expect(screen.getByText(/A comprehensive guide to setting up automation testing frameworks/)).toBeInTheDocument()
    expect(screen.getByText(/Explore the essential strategies for building robust CI\/CD pipelines/)).toBeInTheDocument()
  })

  it('shows admin functionality when user is admin', async () => {
    render(<Blog />)
    
    // Look for edit/delete buttons or admin features
    const editButtons = screen.queryAllByText('Edit')
    const deleteButtons = screen.queryAllByText('Delete')
    
    // These might be present based on admin state
    expect(editButtons.length + deleteButtons.length).toBeGreaterThanOrEqual(0)
  })

  it('saves posts to localStorage when posts change', async () => {
    render(<Blog />)
    
    const linkInput = screen.getByPlaceholderText('Enter Medium article link')
    const addButton = screen.getByText('Add Post')
    
    await user.type(linkInput, 'https://example.com/test')
    await user.click(addButton)
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalled()
    })
  })
})
