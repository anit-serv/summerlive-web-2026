import { lazy, Suspense, useEffect } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const SponsorsPage = lazy(() => import('./pages/SponsorsPage'))
const PerformingBandsPage = lazy(() => import('./pages/PerformingBandsPage'))

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
    const interactiveStars = new Set<HTMLImageElement>()

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

    const prepareImage = (image: HTMLImageElement) => {
      if (image.naturalWidth <= 0 || image.naturalHeight <= 0) {
        image.addEventListener('load', () => prepareImage(image), { once: true })
        return
      }

      if (!image.hasAttribute('width')) image.setAttribute('width', String(image.naturalWidth))
      if (!image.hasAttribute('height')) image.setAttribute('height', String(image.naturalHeight))

      if (image.classList.contains('pointer-events-none')) {
        const source = image.currentSrc || image.src
        const isStarAsset = /\/star[1-4](?:[-.]|$)/.test(source)
        const isStarSized = image.naturalWidth <= 100 && image.naturalHeight <= 100
        if (!isStarAsset && !isStarSized) return

        image.dataset.interactiveStar = 'true'
        image.style.pointerEvents = 'auto'
        image.style.cursor = 'pointer'
        image.style.touchAction = 'manipulation'
        if (interactiveStars.has(image)) return
        interactiveStars.add(image)
        image.addEventListener('pointerenter', spinOnHoverStart)
      }
    }

    const prepareImages = (root: ParentNode = document) => {
      if (root instanceof HTMLImageElement) prepareImage(root)
      root.querySelectorAll<HTMLImageElement>('img').forEach(prepareImage)
    }

    function spinOnHoverStart(event: PointerEvent) {
      if (event.pointerType === 'touch') return
      spinStar(event.currentTarget)
    }

    prepareImages()
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) prepareImages(node)
        })
      })
    })
    observer.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true })
    const prepareLoadedImages = () => prepareImages()
    window.addEventListener('load', prepareLoadedImages, { once: true })

    const spinOnClick = (event: MouseEvent) => spinStar(event.target)
    document.addEventListener('click', spinOnClick)
    return () => {
      observer.disconnect()
      window.removeEventListener('load', prepareLoadedImages)
      document.removeEventListener('click', spinOnClick)
      interactiveStars.forEach((image) => image.removeEventListener('pointerenter', spinOnHoverStart))
      interactiveStars.clear()
    }
  }, [])
}

export default function App() {
  useStarSpin()
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  const page = path === '/sponsors'
    ? <SponsorsPage />
    : path === '/bands'
      ? <PerformingBandsPage />
      : <HomePage />

  return <Suspense fallback={<div className="min-h-screen bg-[#060713]" />}>{page}</Suspense>
}
