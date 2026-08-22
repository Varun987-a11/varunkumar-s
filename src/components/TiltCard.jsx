import { useEffect, useRef } from 'react'

export default function TiltCard({ className = '', children, id }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -2.5
      const rotateY = ((x - centerX) / centerX) * 2.5

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.008, 1.008, 1.008)`
      el.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
      el.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
    }

    function handleLeave() {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      el.style.setProperty('--mouse-x', '50%')
      el.style.setProperty('--mouse-y', '50%')
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  )
}