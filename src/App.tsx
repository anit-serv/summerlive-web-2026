import AnitSummerLive2026WebsiteMockup from './imports/AnitSummerLive2026WebsiteMockup'
import SponsorsPage from './pages/SponsorsPage'
import PerformingBandsPage from './pages/PerformingBandsPage'
import Navbar from './components/Navbar'

function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-[#060713]">
      <Navbar />
      <AnitSummerLive2026WebsiteMockup />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/sponsors') return <SponsorsPage />
  if (path === '/bands') return <PerformingBandsPage />
  return <HomePage />
}
