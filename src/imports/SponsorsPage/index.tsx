import imgRectangle from "./0e9a6ad63274d7b6fc7628b59dfc54a852ec7342.png";
import imgRectangle1 from "./48d21aeced0d557b1fc9e9791b116a6777ee3227.png";
import imgRectangle2 from "./1a1b5745de4bc4915c29786105e81566ac154bb0.png";
import imgRectangle3 from "./addc1c5be84b80fe871ce2a93508aa622625ca80.png";

function Frame() {
  return (
    <div className="bg-[rgba(255,61,119,0.13)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#ff3d77] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff3d77] text-[10px] whitespace-nowrap">A CAPPELLA</p>
    </div>
  );
}

function NavLogoGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="nav-logo-group">
      <p className="[word-break:break-word] font-['Outfit:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[22px] text-white whitespace-nowrap">
        <span className="leading-[normal]">{`ANIT `}</span>
        <span className="font-['Outfit:Light',sans-serif] font-light leading-[normal] text-[#8e93b3]">2026</span>
      </p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ff3d77] content-stretch flex items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">TICKET INFO</p>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="nav-menu">
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[13px] whitespace-nowrap">トップ</p>
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">協賛企業様</p>
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[13px] whitespace-nowrap">出演バンド</p>
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[13px] whitespace-nowrap">TICKET</p>
      <Frame1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(6,7,19,0.67)] content-stretch flex h-[90px] items-center justify-between px-[80px] relative shrink-0 w-full" data-name="navbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <NavLogoGroup />
      <NavMenu />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute flex items-center justify-center left-[330.68px] size-[44.091px] top-[120px]">
      <div className="flex-none rotate-15">
        <div className="opacity-60 overflow-clip relative size-[36px]" data-name="Frame">
          <div className="absolute left-0 size-[36px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute flex items-center justify-center left-[1040px] size-[33.21px] top-[144.18px]">
      <div className="-rotate-12 flex-none">
        <div className="opacity-50 overflow-clip relative size-[28px]" data-name="Frame">
          <div className="absolute left-0 size-[28px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute flex items-center justify-center left-[472.51px] size-[26.036px] top-[260px]">
      <div className="flex-none rotate-22">
        <div className="opacity-40 overflow-clip relative size-[20px]" data-name="Frame">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Black',sans-serif] font-black relative shrink-0 text-[48px] text-white">SPONSORS</p>
      <p className="font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold relative shrink-0 text-[#f9ce69] text-[18px]">協賛企業様</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[420px] items-center justify-center overflow-clip relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(163.73979529168804deg, rgb(6, 7, 19) 25%, rgb(18, 11, 36) 50%, rgb(6, 7, 19) 75%)" }} data-name="hero">
      <div className="absolute h-[320px] left-[320px] opacity-15 top-[50px] w-[800px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 800 320' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(40 0 0 16 400 160)'><stop stop-color='rgba(249,206,105,1)' offset='0'/><stop stop-color='rgba(251,170,109,1)' offset='0.1'/><stop stop-color='rgba(252,134,112,1)' offset='0.2'/><stop stop-color='rgba(254,97,116,1)' offset='0.3'/><stop stop-color='rgba(255,61,119,1)' offset='0.4'/><stop stop-color='rgba(191,46,89,0.75)' offset='0.55'/><stop stop-color='rgba(128,31,60,0.5)' offset='0.7'/><stop stop-color='rgba(64,15,30,0.25)' offset='0.85'/><stop stop-color='rgba(0,0,0,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="lamp-glow-radial" />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[800px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[#8e93b3] text-[18px] text-center w-full">{`ANIT SUMMER LIVE 2026 'Heat up!' 公演の趣旨にご賛同いただき、多大なるご支援を賜りました協賛企業様をご紹介いたします。皆様の温かいサポートのおかげで、この奇跡のハーモニーを届けることが可能となりました。`}</p>
    </div>
  );
}

function SponsorCard() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(249,206,105,0.27)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function SponsorCard1() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(249,206,105,0.27)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function SponsorCard2() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(249,206,105,0.27)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <SponsorCard />
      <SponsorCard1 />
      <SponsorCard2 />
    </div>
  );
}

function SponsorCard3() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function SponsorCard4() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function SponsorCard5() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] content-stretch flex flex-[1_0_66px] flex-col h-[180px] items-center justify-center min-w-px p-[32px] relative rounded-[16px]" data-name="sponsor-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] opacity-85 relative shrink-0 text-[18px] text-white whitespace-nowrap">COMPANY LOGO</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <SponsorCard3 />
      <SponsorCard4 />
      <SponsorCard5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute flex items-center justify-center left-[76.66px] size-[27.107px] top-[30px]">
      <div className="flex-none rotate-8">
        <div className="opacity-60 overflow-clip relative size-[24px]" data-name="Frame">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute flex items-center justify-center left-[1020px] size-[22.045px] top-[40.34px]">
      <div className="-rotate-15 flex-none">
        <div className="opacity-50 overflow-clip relative size-[18px]" data-name="Frame">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomBanner() {
  return (
    <div className="bg-[#090a1e] content-stretch flex flex-col gap-[16px] items-center p-[48px] relative rounded-[24px] shrink-0 w-full" data-name="bottom-banner">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame10 />
      <Frame11 />
      <p className="[word-break:break-word] font-['Geist:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#f9ce69] text-[20px] text-center w-[min-content]">協賛いただきありがとうございます。</p>
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#8e93b3] text-[14px] text-center w-[min-content]">ア・カペラがつなぐ最高の夏を、皆様と共に創り上げます。</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center pb-[120px] pt-[80px] px-[120px] relative shrink-0 w-full" data-name="content">
      <Frame6 />
      <Frame7 />
      <BottomBanner />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Black',sans-serif] font-black relative shrink-0 text-[20px] text-white">ANIT SUMMER LIVE 2026</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#8e93b3] text-[12px]">「願いを叶えるのは、魔法だけじゃない。」</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">INSTAGRAM</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">X (TWITTER)</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[20px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e93b3] text-[11px] whitespace-nowrap">© 2026 ANIT SUMMER LIVE Executive Committee. All Rights Reserved.</p>
      <p className="[word-break:break-word] font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#df9f3e] text-[13px] whitespace-nowrap">Theme: Heat up! - Arnie the Genie of A cappella</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#04050e] content-stretch flex flex-col gap-[40px] items-start pb-[48px] pt-[80px] px-[80px] relative shrink-0 w-full" data-name="footer">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <Frame12 />
      <Frame17 />
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <div className="bg-[#060713] content-stretch flex flex-col items-start relative size-full" data-name="sponsors-page">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}