import { useEffect, useState } from 'react'
import AnitSummerLive2026WebsiteMockup from '../imports/AnitSummerLive2026WebsiteMockup'
import Navbar from '../components/Navbar'
import LoadingIntro from '../components/LoadingIntro'

const INTRO_LAST_SHOWN_KEY = 'anit-heat-up-intro-last-shown'
const INTRO_COOLDOWN_MS = 30 * 60 * 1000

function shouldShowHomeIntro() {
  try {
    const cameFromThisSite = document.referrer
      ? new URL(document.referrer).origin === window.location.origin
      : false
    const lastShownAt = Number(window.localStorage.getItem(INTRO_LAST_SHOWN_KEY))
    const isWithinCooldown = Number.isFinite(lastShownAt)
      && lastShownAt > 0
      && Date.now() - lastShownAt < INTRO_COOLDOWN_MS

    return !cameFromThisSite && !isWithinCooldown
  } catch {
    return true
  }
}

export default function HomePage() {
  const [isIntroVisible, setIsIntroVisible] = useState(shouldShowHomeIntro)

  useEffect(() => {
    if (!isIntroVisible) return

    try {
      window.localStorage.setItem(INTRO_LAST_SHOWN_KEY, String(Date.now()))
    } catch {
      // ストレージが無効でも、現在の演出はそのまま続行する。
    }
  }, [isIntroVisible])

  return (
    <div className="relative overflow-x-hidden bg-[#060713]">
      <h1 className="absolute size-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]">東京農工大学アカペラサークルANIT サマーライブ2026「Heat up!」</h1>
      <Navbar />
      <main><AnitSummerLive2026WebsiteMockup /></main>
      {isIntroVisible ? <LoadingIntro onComplete={() => setIsIntroVisible(false)} /> : null}
    </div>
  )
}
