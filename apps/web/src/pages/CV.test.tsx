import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CV from './CV'

describe('CV', () => {
  it('renders the download button', () => {
    render(<CV />)
    
    const downloadButton = screen.getByRole('button', { name: 'Download PDF' })
    expect(downloadButton).toBeInTheDocument()
  })

  it('download link has correct href and download attribute', () => {
    render(<CV />)
    
    const downloadLink = screen.getByRole('link')
    expect(downloadLink).toHaveAttribute('href', '/personal-site-monorepo/Piyathida San-aoun 05252025.pdf')
    expect(downloadLink).toHaveAttribute('download')
  })

  it('renders both CV page images', () => {
    render(<CV />)
    
    const cvPage1 = screen.getByAltText('CV Page 1')
    const cvPage2 = screen.getByAltText('CV Page 2')
    
    expect(cvPage1).toBeInTheDocument()
    expect(cvPage2).toBeInTheDocument()
  })

  it('CV images have correct src attributes', () => {
    render(<CV />)
    
    const cvPage1 = screen.getByAltText('CV Page 1')
    const cvPage2 = screen.getByAltText('CV Page 2')
    
    expect(cvPage1).toHaveAttribute('src', '/personal-site-monorepo/images/cv1.png')
    expect(cvPage2).toHaveAttribute('src', '/personal-site-monorepo/images/cv2.png')
  })

  it('CV images have proper styling attributes', () => {
    render(<CV />)
    
    const cvPage1 = screen.getByAltText('CV Page 1')
    const cvPage2 = screen.getByAltText('CV Page 2')
    
    expect(cvPage1).toHaveStyle({ 
      width: '794px',
      maxWidth: '100%'
    })
    expect(cvPage2).toHaveStyle({ 
      width: '794px',
      maxWidth: '100%'
    })
  })

  it('download button has proper styling', () => {
    render(<CV />)
    
    const downloadButton = screen.getByRole('button', { name: 'Download PDF' })
    expect(downloadButton).toHaveStyle({
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer'
    })
  })
})
