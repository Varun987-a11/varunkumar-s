import { useEffect, useRef, useState } from 'react'

export default function BackgroundFX() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [hintHidden, setHintHidden] = useState(false)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, dots = [], animId
    const pointer = { x: -1000, y: -1000, active: false }

    function onMouseMove(e) { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true }
    function onMouseOut() { pointer.active = false }
    function onTouchStart(e) {
      if (e.touches.length) { pointer.x = e.touches[0].clientX; pointer.y = e.touches[0].clientY; pointer.active = true }
    }
    function onTouchMove(e) {
      if (e.touches.length) { pointer.x = e.touches[0].clientX; pointer.y = e.touches[0].clientY }
    }
    function onTouchEnd() { pointer.active = false }

    function initDots() {
      dots = []
      const count = Math.min(Math.floor(window.innerWidth / 16), 75)
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.6,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          alpha: Math.random() * 0.35 + 0.1,
        })
      }
    }

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      initDots()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0

        if (pointer.active) {
          const dx = pointer.x - d.x
          const dy = pointer.y - d.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const force = (130 - dist) / 130
            d.x -= (dx / dist) * force * 2.5
            d.y -= (dy / dist) * force * 2.5
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(pointer.x, pointer.y)
            ctx.strokeStyle = `rgba(56,189,248,${0.14 * force})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${d.alpha})`
        ctx.fill()
      })

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 110)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Cursor glow (lerp-follow)
  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2
    let currentX = targetX, currentY = targetY
    let animId

    function onMove(e) { targetX = e.clientX; targetY = e.clientY }

    function animate() {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      glow.style.left = currentX + 'px'
      glow.style.top = currentY + 'px'
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  // Scroll progress + scroll hint
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setHintHidden(scrollTop > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="ambient-orb" />
      <div className="cursor-glow" ref={glowRef} />
      <canvas id="bg-canvas" ref={canvasRef} />
      <div id="progress-bar" style={{ width: `${progress}%` }} />
      <div className={`scroll-hint${hintHidden ? ' hidden' : ''}`}>
        <span className="scroll-hint-text">scroll</span>
        <div className="scroll-arrow" />
      </div>
    </>
  )
}