import { useEffect, useState, type CSSProperties } from 'react'
import lampImage from '../assets/logo/ランプ.webp'
import smoke1 from '../assets/logo/煙1.webp'
import smoke2 from '../assets/logo/煙2.webp'
import smoke3 from '../assets/logo/煙3.webp'
import smoke4 from '../assets/logo/煙4.webp'
import smoke5 from '../assets/logo/煙5.webp'
import smoke6 from '../assets/logo/煙6.webp'
import smoke7 from '../assets/logo/煙7.webp'
import smoke8WithBackdrop from '../assets/logo/煙8-下部背景付き-v2.webp'

type Stage = 'awakening' | 'rising' | 'covering' | 'swiping'

const earlyFrames = [smoke1, smoke2, smoke3, smoke4]
const risingFrames = [smoke5, smoke6, smoke7]
const introAssets = [lampImage, ...earlyFrames, ...risingFrames, smoke8WithBackdrop]
const FRAME_DURATION = 350
const FINAL_FRAME_DURATION = FRAME_DURATION
const SWIPE_DURATION = 2500

export default function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<Stage>('awakening')
  const [frame, setFrame] = useState(0)
  const [assetsReady, setAssetsReady] = useState(false)
  const [backdropStyle, setBackdropStyle] = useState<CSSProperties>({})

  useEffect(() => {
    const updateBackdropSize = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      // 煙8の煙本体は1024 × 1536。下側に同色背景を2160px延長している。
      // 画像の実測アルファ範囲（上: 約6%、下: 約97.6%）が画面を
      // はみ出すよう、画面サイズごとに下端の位置を連続的に決める。
      const smokeContentHeight = Math.max(viewportHeight * 1.35, viewportWidth * (1536 / 1024))
      const extensionHeight = smokeContentHeight * (2160 / 1536)
      const smokeImageHeight = smokeContentHeight + extensionHeight
      const transparentBottom = smokeContentHeight * (1 - 1512 / 1536)
      // 下端はわずかに画面外へ残しつつ、初期位置を少し上へ寄せる。
      const bottomOffset = -Math.max(viewportHeight * 0.02, Math.max(viewportHeight * 0.08, transparentBottom + 24) - viewportHeight * 0.06)

      setBackdropStyle({
        '--smoke8-bottom': `${bottomOffset}px`,
        '--smoke8-extension-height': `${extensionHeight}px`,
        '--smoke8-height': `${smokeImageHeight}px`,
      } as CSSProperties)
    }

    updateBackdropSize()
    window.addEventListener('resize', updateBackdropSize)
    return () => window.removeEventListener('resize', updateBackdropSize)
  }, [])

  useEffect(() => {
    let cancelled = false

    // コマ切替前に全画像を並列でデコードし、直前のコマが次のサイズで
    // 一瞬描画されることを防ぐ。
    const decodeAssets = introAssets.map(async (source) => {
      const image = new Image()
      image.src = source
      try {
        await image.decode()
      } catch {
        // 読み込み失敗時も暗転したまま停止させず、残りの演出を続行する。
      }
    })

    void Promise.all(decodeAssets).then(() => {
      if (!cancelled) setAssetsReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }
    if (!assetsReady) return

    // 煙1〜8はすべて同じコマ間隔で進める。
    const secondFrame = window.setTimeout(() => setFrame(1), FRAME_DURATION)
    const thirdFrame = window.setTimeout(() => setFrame(2), FRAME_DURATION * 2)
    const fourthFrame = window.setTimeout(() => setFrame(3), FRAME_DURATION * 3)
    const risingStart = window.setTimeout(() => {
      setStage('rising')
      setFrame(0)
    }, FRAME_DURATION * 4)
    const firstRise = window.setTimeout(() => setFrame(1), FRAME_DURATION * 5)
    const secondRise = window.setTimeout(() => setFrame(2), FRAME_DURATION * 6)
    const coverStart = window.setTimeout(() => setStage('covering'), FRAME_DURATION * 6 + FINAL_FRAME_DURATION)
    const swipeStart = window.setTimeout(() => setStage('swiping'), FRAME_DURATION * 7 + FINAL_FRAME_DURATION)
    // 煙8が画面の外まで抜け切った後にだけ前景レイヤーを外す。
    const complete = window.setTimeout(onComplete, FRAME_DURATION * 7 + FINAL_FRAME_DURATION + SWIPE_DURATION)

    return () => {
      ;[secondFrame, thirdFrame, fourthFrame, risingStart, firstRise, secondRise, coverStart, swipeStart, complete].forEach(window.clearTimeout)
    }
  }, [assetsReady, onComplete])

  return (
    <div className={`loading-intro loading-intro--${stage} loading-intro--frame-${frame} ${assetsReady ? 'loading-intro--ready' : 'loading-intro--loading'}`} aria-hidden="true" style={backdropStyle}>
      <div className="loading-intro__curtain">
        <div className="loading-intro__scene">
          {earlyFrames.map((source, index) => (
            <img
              key={source}
              className={`loading-intro__smoke loading-intro__smoke--early-${index} ${stage === 'awakening' && frame === index ? 'loading-intro__smoke--active' : ''}`}
              src={source}
              alt=""
            />
          ))}
          {risingFrames.map((source, index) => (
            <img
              key={source}
              className={`loading-intro__smoke loading-intro__smoke--rising-${index} ${stage === 'rising' && frame === index ? 'loading-intro__smoke--active' : ''}`}
              src={source}
              alt=""
            />
          ))}
          <img className="loading-intro__smoke8" src={smoke8WithBackdrop} alt="" />
          <img className="loading-intro__lamp" src={lampImage} alt="" />
        </div>
      </div>
    </div>
  )
}
