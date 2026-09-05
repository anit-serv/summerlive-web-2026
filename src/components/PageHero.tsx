import imgStarDiamond from '../assets/logo/stars/star1.png'
import imgStarOutlined from '../assets/logo/stars/star4.png'
import imgStarSparkle from '../assets/logo/stars/star2.png'

type PageHeroProps = {
  title: string
  subtitle: string
  theme: 'gold' | 'pink'
}

const themeStyles = {
  gold: {
    background: 'linear-gradient(163.74deg, rgb(6,7,19) 25%, rgb(18,11,36) 50%, rgb(6,7,19) 75%)',
    glow: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 800 320' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g'><stop stop-color='rgba(249,206,105,1)'/><stop offset='.4' stop-color='rgba(255,61,119,1)'/><stop offset='1' stop-color='rgba(0,0,0,0)'/></radialGradient></defs></svg>\")",
    accentClassName: 'text-[#f9ce69]',
  },
  pink: {
    background: 'linear-gradient(163.74deg, rgb(6,7,19) 25%, rgb(25,11,32) 50%, rgb(6,7,19) 75%)',
    glow: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 800 320' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g'><stop stop-color='rgba(255,61,119,1)'/><stop offset='.7' stop-color='rgba(128,31,60,.5)'/><stop offset='1' stop-color='rgba(0,0,0,0)'/></radialGradient></defs></svg>\")",
    accentClassName: 'text-[#ff3d77]',
  },
} as const

export default function PageHero({ title, subtitle, theme }: PageHeroProps) {
  const style = themeStyles[theme]

  return (
    <section className="relative flex h-[320px] w-full shrink-0 flex-col items-center justify-center overflow-hidden md:h-[420px]" style={{ backgroundImage: style.background }}>
      <div className="pointer-events-none absolute left-1/2 top-[30px] h-[300px] w-[min(800px,110vw)] -translate-x-1/2 opacity-20 md:top-[50px] md:h-[320px]" style={{ backgroundImage: style.glow, backgroundSize: '100% 100%' }} />
      <img src={imgStarDiamond} alt="" aria-hidden className="pointer-events-none absolute left-[18%] top-[34%] size-6 rotate-[15deg] object-cover opacity-60 md:left-[23%] md:size-9" />
      <img src={imgStarOutlined} alt="" aria-hidden className="pointer-events-none absolute right-[15%] top-[27%] size-7 -rotate-12 object-cover opacity-50 md:right-[18%]" />
      <img src={imgStarSparkle} alt="" aria-hidden className="pointer-events-none absolute bottom-[18%] left-[31%] size-5 rotate-[22deg] object-cover opacity-40 md:left-[33%]" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-5">
        <h1 className="text-center font-['Outfit:Black',sans-serif] text-[36px] font-black leading-[1.05] text-white md:text-[48px] md:leading-none">{title}</h1>
        <p className={`font-['Geist:SemiBold','Noto_Sans_JP:SemiBold',sans-serif] text-[15px] font-semibold leading-none md:text-[18px] ${style.accentClassName}`}>{subtitle}</p>
      </div>
    </section>
  )
}
