import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal — triggers a CSS class when the element enters the viewport.
 * Uses IntersectionObserver (not window.scroll) for performance.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <div ref={ref} className="scroll-reveal"> ... </div>
 *
 * The .scroll-reveal class in index.css handles the animation.
 * When the element enters the viewport, .is-visible is added.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * useIntersect — returns [ref, isVisible] for conditional rendering.
 * Use when you need the boolean in JSX logic, not just CSS class toggling.
 */
export function useIntersect(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.12, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}
