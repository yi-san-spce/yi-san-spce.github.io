import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectImage } from '../data/portfolio'

interface LightboxProps {
  images: ProjectImage[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const image = images[index]

  const previous = useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length)
  }, [images.length])
  const next = useCallback(() => {
    setIndex((current) => (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    const appRoot = document.getElementById('root')
    const previousRootAriaHidden = appRoot?.getAttribute('aria-hidden')
    document.body.style.overflow = 'hidden'
    appRoot?.setAttribute('inert', '')
    appRoot?.setAttribute('aria-hidden', 'true')
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()

      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      appRoot?.removeAttribute('inert')
      if (previousRootAriaHidden == null) appRoot?.removeAttribute('aria-hidden')
      else appRoot?.setAttribute('aria-hidden', previousRootAriaHidden)
      previousFocus?.focus()
    }
  }, [next, onClose, previous])

  return createPortal(
    <div
      className="lightbox-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot gallery">
        <div className="lightbox__topbar">
          <div>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i />
            <span>{String(images.length).padStart(2, '0')}</span>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close image gallery">
            <X size={20} />
          </button>
        </div>

        <div className={`lightbox__media lightbox__media--${image.frame}`}>
          <img src={image.src} alt={image.alt} decoding="async" />
        </div>

        <div className="lightbox__footer">
          <div>
            <small>INTERFACE WALKTHROUGH</small>
            <p>{image.caption}</p>
          </div>
          <div className="lightbox__controls">
            <button type="button" onClick={previous} aria-label="Previous image"><ChevronLeft size={21} /></button>
            <button type="button" onClick={next} aria-label="Next image"><ChevronRight size={21} /></button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
