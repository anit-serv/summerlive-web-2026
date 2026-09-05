import { useEffect, useState } from 'react'
import AnitSummerLive2026WebsiteMockup from './imports/AnitSummerLive2026WebsiteMockup'
import SponsorsPage from './pages/SponsorsPage'
import PerformingBandsPage from './pages/PerformingBandsPage'
import Navbar from './components/Navbar'
import LoadingIntro from './components/LoadingIntro'

const activeStarAnimations = new WeakMap<HTMLImageElement, {
  frame: number
  originalRotate: string
  currentRotation: number
}>()

// 速度だけでなく加速度の変化も滑らかな補間。
const smootherStep = (progress: number) => progress * progress * progress * (progress * (progress * 6 - 15) + 10)
const spinProgress = (progress: number) => {
  const gentleLaunch = 1 - (1 - progress) ** 3
  return smootherStep(progress) * 0.35 + gentleLaunch * 0.65
}

function useStarSpin() {
  useEffect(() => {
    // 回転中に画像自体の当たり判定が動いても、ホバー開始が連続発火しないよう
    // 回転前の領域を基準に状態を持つ。
    const hoverStates = new Map<HTMLImageElement, { isHovering: boolean; rect: DOMRect }>()

    const spinStar = (target: EventTarget | null) => {
      if (!(target instanceof HTMLImageElement) || target.dataset.interactiveStar !== 'true') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // 再加速しても、基準角度からの絶対回転量を持ち続ける。
      const activeAnimation = activeStarAnimations.get(target)
      if (activeAnimation) cancelAnimationFrame(activeAnimation.frame)

      const originalRotate = activeAnimation?.originalRotate ?? target.style.rotate
      const startRotation = activeAnimation?.currentRotation ?? 0
      const startTime = performance.now()
      // 再操作時は少し速い減衰へ移行する。終点は常に360度の整数倍。
      const duration = activeAnimation ? 2100 : 2600
      const extraTurns = activeAnimation ? 1080 : 1800
      const finalRotation = Math.ceil(startRotation / 360) * 360 + extraTurns
      const animation = { frame: 0, originalRotate, currentRotation: startRotation }

      const animate = (now: number) => {
        const elapsed = Math.min((now - startTime) / duration, 1)
        const rotation = startRotation + (finalRotation - startRotation) * spinProgress(elapsed)
        animation.currentRotation = rotation
        target.style.rotate = `${rotation}deg`

        if (elapsed < 1) {
          animation.frame = requestAnimationFrame(animate)
          return
        }

        // 終点は初期角度と同じ向き。元の rotate 指定へも戻す。
        target.style.rotate = originalRotate
        activeStarAnimations.delete(target)
      }

      activeStarAnimations.set(target, animation)
      animation.frame = requestAnimationFrame(animate)
    }

    const markInteractiveStars = () => {
      document.querySelectorAll<HTMLImageElement>('img.pointer-events-none').forEach((image) => {
        const source = image.currentSrc || image.src
        const isStarAsset = /\/star[1-4](?:[-.]|$)/.test(source)
        const isStarSized = image.naturalWidth > 0 && image.naturalWidth <= 100 && image.naturalHeight <= 100
        if (!isStarAsset && !isStarSized) return

        image.dataset.interactiveStar = 'true'
        image.style.pointerEvents = 'auto'
        image.style.cursor = 'pointer'
        image.style.touchAction = 'manipulation'
        if (!hoverStates.has(image)) {
          hoverStates.set(image, { isHovering: false, rect: image.getBoundingClientRect() })
        }
      })
    }

    markInteractiveStars()
    window.addEventListener('load', markInteractiveStars)

    const spinOnClick = (event: MouseEvent) => spinStar(event.target)
    const spinOnHoverStart = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      hoverStates.forEach((state, image) => {
        // 停止中はレイアウト変化やスクロール後の領域を取り直す。
        if (!activeStarAnimations.has(image)) state.rect = image.getBoundingClientRect()

        const { left, right, top, bottom } = state.rect
        const isInside = event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom

        if (isInside && !state.isHovering) {
          state.isHovering = true
          spinStar(image)
        } else if (!isInside) {
          state.isHovering = false
        }
      })
    }

    document.addEventListener('click', spinOnClick)
    document.addEventListener('pointermove', spinOnHoverStart)
    return () => {
      window.removeEventListener('load', markInteractiveStars)
      document.removeEventListener('click', spinOnClick)
      document.removeEventListener('pointermove', spinOnHoverStart)
      hoverStates.clear()
    }
  }, [])
}

function HomePage() {
  const [isIntroVisible, setIsIntroVisible] = useState(true)

  return (
    <div className="relative overflow-x-hidden bg-[#060713]">
      <Navbar />
      <AnitSummerLive2026WebsiteMockup />
      {isIntroVisible ? <LoadingIntro onComplete={() => setIsIntroVisible(false)} /> : null}
    </div>
  )
}

export default function App() {
  useStarSpin()
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/sponsors') return <SponsorsPage />
  if (path === '/bands') return <PerformingBandsPage />
  return <HomePage />
}
