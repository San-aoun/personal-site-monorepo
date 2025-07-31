import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from './Home'

describe('Home', () => {
  const renderHome = () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
  }

  it('renders the main heading', () => {
    renderHome()
    expect(screen.getByText('Piyathida San-aoun')).toBeInTheDocument()
  })

  it('renders the job title', () => {
    renderHome()
    expect(screen.getByText('Software Development Engineer in Test')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderHome()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Automation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Admin' })).toBeInTheDocument()
  })

  it('renders navigation links with correct hrefs', () => {
    renderHome()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv')
    expect(screen.getByRole('link', { name: 'Automation' })).toHaveAttribute('href', '/automation')
    expect(screen.getByRole('link', { name: 'Admin' })).toHaveAttribute('href', '/admin')
  })

  it('renders personal description', () => {
    renderHome()
    expect(screen.getByText(/I am a highly skilled Software Engineer with over 10 years of experience/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    renderHome()
    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' })
    const mediumLink = screen.getByRole('link', { name: 'Medium' })

    expect(githubLink).toBeInTheDocument()
    expect(linkedInLink).toBeInTheDocument()
    expect(mediumLink).toBeInTheDocument()

    expect(githubLink).toHaveAttribute('href', 'https://github.com/San-aoun')
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/piyathida-san-aoun-369994173/')
    expect(mediumLink).toHaveAttribute('href', 'https://piyathida-sanaoun01.medium.com/')
  })

  it('renders profile image', () => {
    renderHome()
    const profileImage = screen.getByAltText('Piyathida San-aoun')
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', '/personal-site-monorepo/images/profile.jpg')
  })

  it('social media links open in new tab', () => {
    renderHome()
    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' })
    const mediumLink = screen.getByRole('link', { name: 'Medium' })

    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedInLink).toHaveAttribute('target', '_blank')
    expect(mediumLink).toHaveAttribute('target', '_blank')
  })
})
