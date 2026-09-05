import SocialLinks from './SocialLinks'

const instagramUrl = 'https://www.instagram.com/anit_cl?igsh=MXdvbW13anp0amlnaA%3D%3D&utm_source=qr'
const xUrl = 'https://twitter.com/ANIT_LIVE'

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-start gap-8 border-t border-white/[0.06] bg-[#04050e] px-5 py-10 md:gap-10 md:px-20 md:pb-12 md:pt-20">
      <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex flex-col gap-2 md:gap-3">
          <p className="font-['Outfit:Black',sans-serif] text-[16px] font-black leading-none text-white md:text-[20px]">ANIT SUMMER LIVE 2026</p>
          <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] text-[12px] text-[#8e93b3]">「願いを叶えるのは、魔法だけじゃない。」</p>
        </div>
        <SocialLinks instagramUrl={instagramUrl} xUrl={xUrl} />
      </div>
      <div className="flex w-full items-center justify-between border-t border-white/[0.03] pt-5">
        <p className="font-['Geist:Regular',sans-serif] text-[11px] leading-none text-[#8e93b3]">© 2026 ANIT. All Rights Reserved.</p>
        <p className="font-['Instrument Serif:Italic',serif] text-[13px] italic leading-none text-[#df9f3e]">Theme: Heat up!</p>
      </div>
    </footer>
  )
}
