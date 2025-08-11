import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText('Piyathida San-aoun')).toBeInTheDocument()
    expect(screen.getByText('Software Development Engineer in Test')).toBeInTheDocument()
  })

  it('renders blog page when navigating to /blog', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText('📝 My Blog Posts')).toBeInTheDocument()
  })

  it('renders CV page when navigating to /cv', () => {
    render(
      <MemoryRouter initialEntries={['/cv']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText('📄 My CV')).toBeInTheDocument()
  })

  it('renders automation page when navigating to /automation', () => {
    render(
      <MemoryRouter initialEntries={['/automation']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText('🔧 Automation & CI/CD Projects')).toBeInTheDocument()
  })

  it('renders admin page when navigating to /admin', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <App />
      </MemoryRouter>
    )
    
    expect(screen.getByText('🔐 Admin Panel')).toBeInTheDocument()
  })
})
