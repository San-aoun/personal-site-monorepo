import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AutomationShowcase from './AutomationShowcase'

describe('AutomationShowcase', () => {
  it('renders the main heading', () => {
    render(<AutomationShowcase />)
    expect(screen.getByText('🔧 Automation & CI/CD Projects')).toBeInTheDocument()
  })

  it('renders all project sections', () => {
    render(<AutomationShowcase />)
    
    expect(screen.getByText('✅ UI Test Automation with Playwright')).toBeInTheDocument()
    expect(screen.getByText('📦 API Testing with Postman + Newman')).toBeInTheDocument()
    expect(screen.getByText('🚀 CI/CD with GitHub Actions')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<AutomationShowcase />)
    
    expect(screen.getByText('Automated E2E testing with Playwright, running via GitHub Actions.')).toBeInTheDocument()
    expect(screen.getByText('CI pipeline using Newman CLI integrated with Jenkins.')).toBeInTheDocument()
    expect(screen.getByText('Frontend project with build/test/deploy pipeline to GitHub Pages.')).toBeInTheDocument()
  })

  it('renders external links', () => {
    render(<AutomationShowcase />)
    
    // Check for GitHub repository links
    const githubLinks = screen.getAllByText('GitHub Repo')
    expect(githubLinks).toHaveLength(2)
    
    // Check for other specific links
    expect(screen.getByText('Live Allure Report')).toBeInTheDocument()
    expect(screen.getByText('Postman Collection')).toBeInTheDocument()
    expect(screen.getByText('Repo with CI config')).toBeInTheDocument()
  })

  it('renders code snippets', () => {
    render(<AutomationShowcase />)
    
    expect(screen.getByText('Tests run on every PR using GitHub Actions')).toBeInTheDocument()
    expect(screen.getByText('Jenkins triggers tests on every merge')).toBeInTheDocument()
  })

  it('renders CI badge image', () => {
    render(<AutomationShowcase />)
    
    const ciBadge = screen.getByAltText('CI Badge')
    expect(ciBadge).toBeInTheDocument()
    expect(ciBadge).toHaveAttribute('src', 'https://github.com/san-aoun/personal-site-monorepo/actions/workflows/deploy.yml/badge.svg')
  })

  it('external links have correct attributes', () => {
    render(<AutomationShowcase />)
    
    const externalLinks = screen.getAllByRole('link')
    
    externalLinks.forEach(link => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank')
      }
    })
  })
})
