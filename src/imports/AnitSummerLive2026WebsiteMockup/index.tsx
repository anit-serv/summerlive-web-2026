import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import svgPaths from "./svg-mgxjo3va0f";
import imgHeroBg from "./e6c136ba7e16974cb9b54225078026295647ba89.webp";
import imgHeroBgMobile from "./e6c136ba7e16974cb9b54225078026295647ba89-mobile.webp";
import imgHeatUpTheme2Logo from "./2c47d36d4cbf9106105be9c15f8e09b16e955d8e.webp";
import imgRectangle from "../../assets/logo/stars/star2.png";
import imgHeroIllustrationMain from "./3231ca4a209615e16870d257b55d609595b1c0ac.webp";
import imgHeroIllustrationMainMobile from "./3231ca4a209615e16870d257b55d609595b1c0ac-mobile.webp";
import imgRectangle1 from "../../assets/logo/stars/star1.png";
import imgRectangle2 from "../../assets/logo/stars/star4.png";
import imgRectangle3 from "../../assets/logo/stars/star3.png";
import imgDarkBadgeLogo from "./903602c17e66886ba85a516cd4e558e1b25e0dc7.webp";
import imgDarkBadgeLogoMobile from "./903602c17e66886ba85a516cd4e558e1b25e0dc7-mobile.webp";
import TicketCtaSection from "../../components/TicketCtaSection";
import SiteFooter from "../../components/Footer";

const ARTBOARD_WIDTH = 1440;

const siteCopy = {
  heroTagline: "退屈な日々が、歌声で動き出す。",
  heroQuote: "A cappella genie Arnie is calling...",
  conceptTitle: "「願いを叶えるのは、魔法だけじゃない。」",
  conceptDescription: "アカペラ魔人アーニーと、声が導く不思議な世界へ。",
  conceptEnglish: "harmony transforms the indigo night",
  date: "2026.09.18",
  weekday: "FRI",
  venue: "座・高円寺2",
  venueEnglish: "(Za-Koenji 2)",
  address: "〒166-0002 東京都杉並区高円寺北2丁目1-2",
  access: "JR総武線「高円寺」駅から徒歩5分",
  doorStartCompact: "16:00 / 17:00",
  doorStart: "OPEN 16:00 / START 17:00",
  preConcert: "PRE-CONCERT　16:00–17:00",
  studentPrice: "学生 500円",
  generalPrice: "一般 1,000円",
  storyBefore: "バイトばかりで、変わらない毎日に少し退屈していた大学生のつばさ。ある日、道ばたであまりにもベタな魔法のランプを見つけてしまう。気になってこすってみると、現れたのは自称・アカペラ魔人のアーニーだった。",
  storyHighlight: "「願いを一つかなえてやる！ その前に、アカペラを聴いてくれ！」",
  storyAfter: "願いをかなえると言いながら、次々とアカペラを聴かせてくるアーニー。歌声に心を動かされ、会話を重ねるうちに、つばさは自分が本当にかなえたい願いと向き合い始める。",
} as const;

function StoryText({ className, lineClassName = "leading-[1.8]" }: { className: string; lineClassName?: string }) {
  return (
    <p className={className}>
      <span className={lineClassName}>{siteCopy.storyBefore}</span>
      <span className={`font-['Geist:Bold','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] font-bold text-[#ffcf60] ${lineClassName}`}>{siteCopy.storyHighlight}</span>{" "}
      <span className={lineClassName}>{siteCopy.storyAfter}</span>
    </p>
  );
}

function ResponsiveSection({ children, fallbackHeight, backgroundColor = "transparent", keepHeroBelowHeader = false }: { children: ReactNode; fallbackHeight: number; backgroundColor?: string; keepHeroBelowHeader?: boolean }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(ARTBOARD_WIDTH);
  const [sectionHeight, setSectionHeight] = useState(fallbackHeight);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateHeight = () => setSectionHeight(frame.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const scale = Math.min(1, viewportWidth / ARTBOARD_WIDTH);
  const scaledHeight = sectionHeight * scale;
  const sectionStyle = keepHeroBelowHeader
    ? { height: `calc(${scaledHeight}px + var(--hero-header-inset))`, paddingTop: "var(--hero-header-inset)", backgroundColor }
    : { height: scaledHeight, backgroundColor };

  return (
    <div className={`flex w-full justify-center overflow-hidden ${keepHeroBelowHeader ? "responsive-hero-section" : ""}`} style={sectionStyle}>
      <div style={{ width: ARTBOARD_WIDTH * scale }}>
        <div ref={frameRef} style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: ARTBOARD_WIDTH }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function HeroHeadlineWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="hero-headline-wrapper">
      <div className="h-[161px] relative shrink-0 w-[419.271px]" data-name="heat-up-theme2-logo">
        <img alt="Heat up!" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeatUpTheme2Logo} />
      </div>
      <p className="[word-break:break-word] font-['Geist:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">{siteCopy.heroTagline}</p>
    </div>
  );
}

function QuoteHandStar() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24.848px]">
      <div className="-rotate-8 flex-none">
        <div className="opacity-85 overflow-clip relative size-[22px]" data-name="quote-hand-star">
          <div className="absolute left-0 size-[22px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MagicQuote() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="magic-quote">
      <QuoteHandStar />
      <p className="[word-break:break-word] font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[18px] text-[rgba(249,206,105,0.8)] whitespace-nowrap">{siteCopy.heroQuote}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#df9f3e] text-[10px]">DATE</p>
      <p className="font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[18px] text-white">
        <span className="leading-[normal]">{siteCopy.date}{" "}</span>
        <span className="leading-[normal] text-[#d6a62f]">{siteCopy.weekday}</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#df9f3e] text-[10px]">VENUE</p>
      <p className="font-['Geist:ExtraBold','Noto_Sans_JP:Black',sans-serif] font-extrabold relative shrink-0 text-[16px] text-white">{siteCopy.venue} {siteCopy.venueEnglish}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#df9f3e] text-[10px]">DOOR / START</p>
      <p className="font-['Outfit:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[18px] text-white">{siteCopy.doorStartCompact}</p>
    </div>
  );
}

function HeroInfoBanner() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(18,20,46,0.8)] content-stretch flex gap-[32px] items-center p-[20px] relative rounded-[16px] shrink-0 w-full" data-name="hero-info-banner">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-px" data-name="Line">
            <div className="absolute inset-[-40px_0_0_0]">
              <svg className="block size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 1 40" width="1">
                <line id="Line" stroke="white" strokeOpacity="0.0823529" strokeWidth="40" x2="1" y1="20" y2="20" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame3 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-px" data-name="Line">
            <div className="absolute inset-[-40px_0_0_0]">
              <svg className="block size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 1 40" width="1">
                <line id="Line" stroke="white" strokeOpacity="0.0823529" strokeWidth="40" x2="1" y1="20" y2="20" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function HeroLeftPanel() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] h-[920px] items-start pb-[80px] pl-[80px] pt-[160px] relative shrink-0 w-[660px]" data-name="hero-left-panel">
      <HeroHeadlineWrapper />
      <MagicQuote />
      <HeroInfoBanner />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[740px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="740" preserveAspectRatio="none" viewBox="0 0 740 740" width="740">
        <g clipPath="url(#clip0_0_10)" id="Frame">
          <path d={svgPaths.p1b0b7800} fill="url(#paint0_radial_0_10)" id="foreground-emblem-veil" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(370 370) scale(370)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_10" r="1">
            <stop stopColor="#07051F" stopOpacity="0.94" />
            <stop offset="0.658654" stopColor="#171438" stopOpacity="0.78" />
            <stop offset="0.841346" stopColor="#3A2E5A" stopOpacity="0.4" />
            <stop offset="0.9375" stopColor="#372659" stopOpacity="0.12" />
            <stop offset="1" stopColor="#09051C" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="740" width="740" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HandStarDiamond() {
  return (
    <div className="opacity-85 overflow-clip relative shrink-0 size-[36px]" data-name="hand-star-diamond-1">
      <div className="absolute left-0 size-[36px] top-0" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function HandStarPointed() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[26.944px]">
      <div className="flex-none rotate-15">
        <div className="opacity-70 overflow-clip relative size-[22px]" data-name="hand-star-pointed-1">
          <div className="absolute left-0 size-[22px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingStarsTr() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[560px] top-[130px]" data-name="floating-stars-tr">
      <HandStarDiamond />
      <HandStarPointed />
    </div>
  );
}

function HeroStarFloat() {
  return (
    <div className="absolute flex items-center justify-center left-[30px] size-[32.437px] top-[235.14px]">
      <div className="-rotate-10 flex-none">
        <div className="opacity-90 overflow-clip relative size-[28px]" data-name="hero-star-float">
          <div className="absolute left-0 size-[28px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HandStarSparkle() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[23.071px]">
      <div className="flex-none rotate-20">
        <div className="opacity-75 overflow-clip relative size-[18px]" data-name="hand-star-sparkle-1">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HandStarDiamond1() {
  return (
    <div className="opacity-85 overflow-clip relative shrink-0 size-[26px]" data-name="hand-star-diamond-2">
      <div className="absolute left-0 size-[26px] top-0" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function HandStarSparkle1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[19.596px]">
      <div className="-rotate-15 flex-none">
        <div className="opacity-65 overflow-clip relative size-[16px]" data-name="hand-star-sparkle-2">
          <div className="absolute left-0 size-[16px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StarClusterArc() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-1/2 -translate-x-1/2 top-[680px]" data-name="star-cluster-arc">
      <HandStarSparkle />
      <HandStarDiamond1 />
      <HandStarSparkle1 />
    </div>
  );
}

function HandStarOutlinedSm() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[21.667px]">
      <div className="flex-none rotate-5">
        <div className="opacity-80 overflow-clip relative size-[20px]" data-name="hand-star-outlined-sm">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBottomStarTag() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-1/2 -translate-x-1/2 top-[820px]" data-name="hero-bottom-star-tag">
      <HandStarOutlinedSm />
      <p className="[word-break:break-word] font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[14px] text-[rgba(223,159,62,0.73)] whitespace-nowrap">Unlocking the magic lamp...</p>
    </div>
  );
}

function HeroIllustrationPanel() {
  return (
    <div className="content-stretch flex flex-col h-[920px] items-center justify-center overflow-clip relative shrink-0 w-[780px]" data-name="hero-illustration-panel">
      <Frame5 />
      <div className="absolute h-[920px] left-0 top-0 w-[780px]" data-name="hero-illustration-main">
        <picture className="contents">
          <source media="(max-width: 767px)" srcSet={imgHeroIllustrationMainMobile} />
          <img alt="魔法のランプを見つけた主人公つばさと、アカペラ魔人アーニー" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgHeroIllustrationMain} />
        </picture>
      </div>
      <div className="absolute h-[672px] left-0 top-[-50px] w-[779.52px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 779.52 672' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(38.976 0 0 47.04 389.76 201.6)'><stop stop-color='rgba(249,168,48,0.26667)' offset='0'/><stop stop-color='rgba(255,159,67,0.13333)' offset='0.5'/><stop stop-color='rgba(6,7,19,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="lamp-glow-center" />
      <FloatingStarsTr />
      <HeroStarFloat />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex h-[920px] items-center overflow-clip relative shrink-0 w-full" data-name="hero-section">
      <div className="absolute h-[920px] left-0 top-0 w-[1440px]" data-name="hero-bg">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-r from-[rgba(6,7,19,0.93)] inset-0 to-[rgba(6,7,19,0)] via-1/2 via-[rgba(6,7,19,0.8)]" />
        </div>
      </div>
      <div className="absolute h-[720px] left-[600px] top-[100px] w-[840px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 840 720' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(42 0 0 36 420 360)'><stop stop-color='rgba(249,168,48,0.33333)' offset='0'/><stop stop-color='rgba(255,61,119,0.13333)' offset='0.45'/><stop stop-color='rgba(6,7,19,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="lamp-glow-radial" />
      <div className="absolute bg-gradient-to-b from-[rgba(6,7,19,0)] h-[320px] left-0 to-[#060713] top-[600px] w-[1440px]" data-name="hero-bottom-fade" />
      <HeroLeftPanel />
      <HeroIllustrationPanel />
      <StarClusterArc />
      <HeroBottomStarTag />
    </div>
  );
}

function HsDiamond() {
  return (
    <div className="absolute flex items-center justify-center left-[105.14px] size-[32.437px] top-[25px]">
      <div className="flex-none rotate-10">
        <div className="opacity-85 overflow-clip relative size-[28px]" data-name="hs-diamond-1">
          <div className="absolute left-0 size-[28px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsSparkle() {
  return (
    <div className="absolute flex items-center justify-center left-[330px] size-[19.5px] top-[53.43px]">
      <div className="-rotate-5 flex-none">
        <div className="opacity-65 overflow-clip relative size-[18px]" data-name="hs-sparkle-1">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsOutlined() {
  return (
    <div className="absolute flex items-center justify-center left-[561.72px] size-[39.192px] top-[15px]">
      <div className="flex-none rotate-15">
        <div className="opacity-80 overflow-clip relative size-[32px]" data-name="hs-outlined-1">
          <div className="absolute left-0 size-[32px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsPointed() {
  return (
    <div className="absolute flex items-center justify-center left-[810px] size-[28.198px] top-[37.48px]">
      <div className="-rotate-20 flex-none">
        <div className="opacity-70 overflow-clip relative size-[22px]" data-name="hs-pointed-1">
          <div className="absolute left-0 size-[22px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsDiamond1() {
  return (
    <div className="absolute flex items-center justify-center left-[1028px] size-[32.785px] top-[20px]">
      <div className="flex-none rotate-30">
        <div className="opacity-75 overflow-clip relative size-[24px]" data-name="hs-diamond-2">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsSparkle1() {
  return (
    <div className="absolute flex items-center justify-center left-[1270px] size-[23.169px] top-[36.53px]">
      <div className="-rotate-10 flex-none">
        <div className="opacity-60 overflow-clip relative size-[20px]" data-name="hs-sparkle-2">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsOutlined1() {
  return (
    <div className="absolute flex items-center justify-center left-[188.61px] size-[17.334px] top-[75px]">
      <div className="flex-none rotate-5">
        <div className="opacity-55 overflow-clip relative size-[16px]" data-name="hs-outlined-2">
          <div className="absolute left-0 size-[16px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsPointed1() {
  return (
    <div className="absolute flex items-center justify-center left-[684.08px] size-[18.605px] top-[85px]">
      <div className="flex-none rotate-25">
        <div className="opacity-50 overflow-clip relative size-[14px]" data-name="hs-pointed-2">
          <div className="absolute left-0 size-[14px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsDiamond2() {
  return (
    <div className="absolute flex items-center justify-center left-[1090px] size-[24.588px] top-[61px]">
      <div className="-rotate-30 flex-none">
        <div className="opacity-65 overflow-clip relative size-[18px]" data-name="hs-diamond-3">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HsSparkle2() {
  return (
    <div className="absolute flex items-center justify-center left-[446.29px] size-[15.121px] top-[105px]">
      <div className="flex-none rotate-18">
        <div className="opacity-50 overflow-clip relative size-[12px]" data-name="hs-sparkle-3">
          <div className="absolute left-0 size-[12px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StarfieldRow() {
  return (
    <div className="absolute content-stretch flex h-[200px] items-start left-0 overflow-clip top-0 w-[1440px]" data-name="starfield-row">
      <div className="h-[200px] relative shrink-0 w-[1440px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(72 0 0 20 720 0)'><stop stop-color='rgba(127,0,255,0.094118)' offset='0'/><stop stop-color='rgba(7,8,26,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="star-scatter-bg" />
      <HsDiamond />
      <HsSparkle />
      <HsOutlined />
      <HsPointed />
      <HsDiamond1 />
      <HsSparkle1 />
      <HsOutlined1 />
      <HsPointed1 />
      <HsDiamond2 />
      <HsSparkle2 />
    </div>
  );
}

function ConceptStarLeft() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[23.169px]">
      <div className="-rotate-10 flex-none">
        <div className="opacity-85 overflow-clip relative size-[20px]" data-name="concept-star-left">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptStarRight() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[25.634px]">
      <div className="flex-none rotate-20">
        <div className="opacity-85 overflow-clip relative size-[20px]" data-name="concept-star-right">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptEyebrow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="concept-eyebrow">
      <ConceptStarLeft />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f9ce69] text-[12px] whitespace-nowrap">CREATIVE CONCEPT</p>
      <ConceptStarRight />
    </div>
  );
}

function ConceptHeadlineGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="concept-headline-group">
      <div className="absolute h-[200px] left-[200px] top-[-40px] w-[1040px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1040 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(52 0 0 10 520 100)'><stop stop-color='rgba(127,0,255,0.1451)' offset='0'/><stop stop-color='rgba(7,8,26,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="purple-mist" />
      <p className="[word-break:break-word] font-['Geist:ExtraBold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[1.4] min-w-full relative shrink-0 text-[44px] text-center text-white w-[min-content]">{siteCopy.conceptTitle}</p>
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#8e93b3] text-[24px] text-center w-[min-content]">{siteCopy.conceptDescription}</p>
    </div>
  );
}

function CsrDiamond() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[18.071px]">
      <div className="-rotate-8 flex-none">
        <div className="opacity-70 overflow-clip relative size-[16px]" data-name="csr-diamond">
          <div className="absolute left-0 size-[16px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CsrSparkle() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[14.697px]">
      <div className="flex-none rotate-15">
        <div className="opacity-55 overflow-clip relative size-[12px]" data-name="csr-sparkle">
          <div className="absolute left-0 size-[12px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CsrOutlined() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[21.667px]">
      <div className="flex-none rotate-5">
        <div className="opacity-75 overflow-clip relative size-[20px]" data-name="csr-outlined">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CsrPointed() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[15.381px]">
      <div className="-rotate-20 flex-none">
        <div className="opacity-50 overflow-clip relative size-[12px]" data-name="csr-pointed">
          <div className="absolute left-0 size-[12px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CsrDiamond1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[21.856px]">
      <div className="flex-none rotate-30">
        <div className="opacity-65 overflow-clip relative size-[16px]" data-name="csr-diamond-2">
          <div className="absolute left-0 size-[16px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptStarRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="concept-star-row">
      <CsrDiamond />
      <CsrSparkle />
      <CsrOutlined />
      <CsrPointed />
      <CsrDiamond1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[20px] relative shrink-0" data-name="Frame">
      <div className="h-0 relative shrink-0 w-[80px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 80 2" width="80">
            <line id="Line" stroke="#DF9F3E" strokeWidth="2" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#df9f3e] text-[22px] whitespace-nowrap">{siteCopy.conceptEnglish}</p>
      <div className="h-0 relative shrink-0 w-[80px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 80 2" width="80">
            <line id="Line" stroke="#DF9F3E" strokeWidth="2" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TaglineConceptSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center px-[80px] py-[120px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 580.49' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(72 0 0 29.025 720 290.25)'><stop stop-color='rgba(45,27,105,0.2)' offset='0'/><stop stop-color='rgba(7,8,26,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(7, 8, 26) 0%, rgb(7, 8, 26) 100%)" }} data-name="tagline-concept-section">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.03)] border-b border-solid border-t inset-0 pointer-events-none" />
      <StarfieldRow />
      <ConceptEyebrow />
      <ConceptHeadlineGroup />
      <ConceptStarRow />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-gradient-to-b from-[#ff3d77] h-[24px] relative rounded-[2px] shrink-0 to-[#ff9f43] w-[4px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[40px] text-white whitespace-nowrap">CONCERT DETAILS</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">公演概要</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#df9f3e] text-[14px] w-[120px]">DATE</p>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <span className="leading-[normal]">{siteCopy.date}{" "}</span>
        <span className="leading-[normal] text-[#d6a62f]">{siteCopy.weekday}</span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white">{siteCopy.venue}</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#8e93b3] text-[13px]">{siteCopy.address}</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#c2c3d2] text-[13px]">{siteCopy.access}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#df9f3e] text-[14px] w-[120px]">VENUE</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#df9f3e] text-[14px] w-[120px]">TIME</p>
      <div className="flex flex-col gap-[5px]">
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">{siteCopy.doorStart}</p>
        <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] text-[13px] text-[#c2c3d2]">{siteCopy.preConcert}</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold gap-[24px] items-center leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">{siteCopy.studentPrice}</p>
      <p className="relative shrink-0">{siteCopy.generalPrice}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#df9f3e] text-[14px] w-[120px]">PRICE</p>
      <Frame15 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Frame11 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function DetailsTable() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="details-table">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function DetailStarDiamond() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[23.721px]">
      <div className="flex-none rotate-12">
        <div className="opacity-75 overflow-clip relative size-[20px]" data-name="detail-star-diamond">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailStarSparkle() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[15.812px]">
      <div className="-rotate-8 flex-none">
        <div className="opacity-60 overflow-clip relative size-[14px]" data-name="detail-star-sparkle">
          <div className="absolute left-0 size-[14px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailStarPointed() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[20.507px]">
      <div className="flex-none rotate-20">
        <div className="opacity-65 overflow-clip relative size-[16px]" data-name="detail-star-pointed">
          <div className="absolute left-0 size-[16px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailStarsOverlay() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[400px]" data-name="detail-stars-overlay">
      <DetailStarDiamond />
      <DetailStarSparkle />
      <DetailStarPointed />
    </div>
  );
}

function BadgeContainer() {
  return (
    <div className="bg-[#5a3e61] relative rounded-[20px] shrink-0 size-[480px]" data-name="badge-container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[480px]" data-name="detail-illustration-crop">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroBg} />
            <div className="absolute bg-gradient-to-b from-1/2 from-[rgba(90,62,97,0)] inset-0 to-[rgba(90,62,97,0.16)]" />
          </div>
        </div>
        <DetailStarsOverlay />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_24px_60px_0px_rgba(255,159,67,0.13)]" />
    </div>
  );
}

function EventDetailsSection() {
  return (
    <div className="bg-[#060713] content-stretch flex gap-[80px] items-center px-[80px] py-[120px] relative shrink-0 w-full" data-name="event-details-section">
      <DetailsTable />
      <BadgeContainer />
    </div>
  );
}

function StoryBgStar() {
  return (
    <div className="absolute flex items-center justify-center left-[493.76px] size-[35.582px] top-[60px]">
      <div className="flex-none rotate-12">
        <div className="opacity-70 overflow-clip relative size-[30px]" data-name="story-bg-star-1">
          <div className="absolute left-0 size-[30px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryBgStar1() {
  return (
    <div className="absolute flex items-center justify-center left-[900px] size-[30.242px] top-[112.58px]">
      <div className="-rotate-18 flex-none">
        <div className="opacity-60 overflow-clip relative size-[24px]" data-name="story-bg-star-2">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryBgStar2() {
  return (
    <div className="absolute flex items-center justify-center left-[1141.55px] size-[26.579px] top-[350px]">
      <div className="flex-none rotate-25">
        <div className="opacity-50 overflow-clip relative size-[20px]" data-name="story-bg-star-3">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryBgStar3() {
  return (
    <div className="absolute flex items-center justify-center left-[550px] size-[36.142px] top-[650px]">
      <div className="-rotate-8 flex-none">
        <div className="opacity-55 overflow-clip relative size-[32px]" data-name="story-bg-star-4">
          <div className="absolute left-0 size-[32px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkBadgeContainer() {
  return (
    <div className="content-stretch drop-shadow-[0px_20px_25px_rgba(255,61,119,0.13)] flex flex-col h-[520px] items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-[450px]" data-name="dark-badge-container">
      <div className="h-[520px] relative shrink-0 w-[450px]" data-name="dark-badge-logo">
        <img alt="ANIT Summer Live 2026 エンブレム" loading="lazy" decoding="async" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDarkBadgeLogo} />
      </div>
    </div>
  );
}

function StoryEyebrowStar() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[19.783px]">
      <div className="flex-none rotate-6">
        <div className="opacity-90 overflow-clip relative size-[18px]" data-name="story-eyebrow-star">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <StoryEyebrowStar />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff3d77] text-[12px] whitespace-nowrap">THE STORY</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <p className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Outfit:ExtraBold',sans-serif] font-extrabold from-white leading-[normal] min-w-full relative shrink-0 text-[40px] text-[transparent] to-[#ffcf60] w-[min-content]">ABOUT THE MAGIC</p>
      <div className="h-0 relative shrink-0 w-[80px]" data-name="Line">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 80 3" width="80">
            <line id="Line" stroke="#DF9F3E" strokeWidth="3" x2="80" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NarrativeContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="narrative-content">
      <Frame16 />
      <StoryText className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#8e93b3] text-[16px] w-full" />
    </div>
  );
}

function AboutWorldSection() {
  return (
    <div className="content-stretch flex gap-[80px] items-center px-[80px] py-[140px] relative shrink-0 w-full" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 800' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(122.4 0 0 40 216 400)'><stop stop-color='rgba(107,26,58,0.13333)' offset='0'/><stop stop-color='rgba(11,12,30,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(11, 12, 30) 0%, rgb(11, 12, 30) 100%)" }} data-name="about-world-section">
      <div className="absolute h-[800px] left-0 top-0 w-[700px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 700 800' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(45.5 0 0 40 245 400)'><stop stop-color='rgba(255,61,119,0.082353)' offset='0'/><stop stop-color='rgba(255,159,67,0.031373)' offset='0.5'/><stop stop-color='rgba(11,12,30,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="story-warm-glow" />
      <StoryBgStar />
      <StoryBgStar1 />
      <StoryBgStar2 />
      <StoryBgStar3 />
      <DarkBadgeContainer />
      <NarrativeContent />
    </div>
  );
}

function MobileStar({ src, className = "" }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      data-interactive-star="true"
      className={`pointer-events-none absolute object-contain ${className}`}
      style={{ pointerEvents: "auto", cursor: "pointer", touchAction: "manipulation" }}
    />
  );
}

function MobileConceptStarfield() {
  return (
    <div aria-hidden className="relative h-28 w-full shrink-0">
      <MobileStar src={imgRectangle1} className="left-[8%] top-12 size-4 opacity-65" />
      <MobileStar src={imgRectangle} className="left-[20%] top-2 size-3 opacity-55" />
      <MobileStar src={imgRectangle3} className="left-[31%] top-20 size-5 opacity-50" />
      <MobileStar src={imgRectangle2} className="left-[43%] top-8 size-[14px] opacity-65" />
      <MobileStar src={imgRectangle1} className="left-[55%] top-16 size-[18px] opacity-75" />
      <MobileStar src={imgRectangle} className="left-[67%] top-1 size-3 opacity-50" />
      <MobileStar src={imgRectangle3} className="left-[76%] top-20 size-4 opacity-60" />
      <MobileStar src={imgRectangle2} className="left-[89%] top-9 size-3 opacity-55" />
    </div>
  );
}

function MobileSectionStarfield({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <div aria-hidden className="relative h-16 w-full shrink-0">
      <MobileStar src={mirrored ? imgRectangle3 : imgRectangle1} className="left-[14%] top-7 size-4 opacity-55" />
      <MobileStar src={imgRectangle} className="left-[31%] top-1 size-3 opacity-45" />
      <MobileStar src={imgRectangle2} className="left-[49%] top-10 size-[13px] opacity-60" />
      <MobileStar src={imgRectangle1} className="left-[66%] top-4 size-[17px] opacity-65" />
      <MobileStar src={mirrored ? imgRectangle1 : imgRectangle3} className="left-[82%] top-9 size-4 opacity-50" />
    </div>
  );
}

function MobileHeroInfo() {
  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#12142e]/90 p-5 text-left backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-x-5 gap-y-4">
        <div><p className="font-['Geist:Bold',sans-serif] text-[10px] font-bold text-[#df9f3e]">DATE</p><p className="mt-1 font-['Outfit:ExtraBold',sans-serif] text-base text-white">{siteCopy.date} <span className="text-[#d6a62f]">{siteCopy.weekday}</span></p></div>
        <div><p className="font-['Geist:Bold',sans-serif] text-[10px] font-bold text-[#df9f3e]">VENUE</p><p className="mt-1 font-['Geist:ExtraBold','Noto_Sans_JP:Black',sans-serif] text-sm font-extrabold text-white">{siteCopy.venue}</p></div>
        <div className="col-span-2 border-t border-white/[0.08] pt-4"><p className="font-['Geist:Bold',sans-serif] text-[10px] font-bold text-[#df9f3e]">DOOR / START</p><p className="mt-1 font-['Outfit:ExtraBold',sans-serif] text-base text-white">{siteCopy.doorStartCompact}</p></div>
      </div>
    </div>
  );
}

// 同じトップページコンポーネントのモバイル用レイアウト。素材・文言・リンクはデスクトップ版と共通。
function TopHeroSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden md:hidden">
        <div className="relative h-[100svh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060713]/40 via-[#060713]/65 to-[#060713]" />
          <MobileStar src={imgRectangle1} className="left-[18%] top-[9%] size-5 opacity-80" />
          <MobileStar src={imgRectangle2} className="right-[24%] top-[17%] size-4 opacity-80" />
          <MobileStar src={imgRectangle3} className="right-[17%] top-[31%] size-6 opacity-55" />
          <MobileStar src={imgRectangle2} className="left-[22%] top-[70%] size-3 opacity-65" />
          <MobileStar src={imgRectangle1} className="bottom-[10%] right-[28%] size-[18px] opacity-70" />
          <div className="absolute left-1/2 top-1/2 w-[min(94vw,380px)] -translate-x-1/2 -translate-y-1/2">
            <img src={imgHeatUpTheme2Logo} alt="Heat up!" className="h-auto w-full object-contain" />
            <p className="mt-2 pl-8 font-['Geist:Light','Noto_Sans_JP:Light',sans-serif] text-sm text-white/80">{siteCopy.heroTagline}</p>
            <p className="mt-2 pl-8 font-['Instrument_Serif:Italic',serif] text-sm italic text-[#f9ce69]/85">{siteCopy.heroQuote}</p>
          </div>
        </div>
      </section>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={920} keepHeroBelowHeader><HeroSection /></ResponsiveSection></div>
    </>
  );
}

function TopConceptSection() {
  return (
    <>
      <section className="relative flex w-full flex-col items-center gap-7 border-y border-white/[0.08] bg-[#07081a] px-5 py-14 text-center md:hidden">
        <MobileHeroInfo />
        <MobileConceptStarfield />
        <div className="flex items-center gap-2"><MobileStar src={imgRectangle1} className="relative size-4" /><p className="text-[10px] font-bold tracking-[0.12em] text-[#f9ce69]">CREATIVE CONCEPT</p><MobileStar src={imgRectangle3} className="relative size-4" /></div>
        <div><p className="font-['Geist:ExtraBold','Noto_Sans_JP:Bold',sans-serif] text-[23px] leading-[1.45] text-white"><span className="whitespace-nowrap">「願いを叶えるのは、</span><br className="hidden max-[458px]:block" /><span className="whitespace-nowrap">魔法だけじゃない。」</span></p><p className="mt-4 font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] text-sm leading-6 text-[#8e93b3]">{siteCopy.conceptDescription}</p></div>
        <p className="font-['Instrument_Serif:Italic',serif] text-base italic text-[#df9f3e]">{siteCopy.conceptEnglish}</p>
      </section>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={520} backgroundColor="#07081a"><TaglineConceptSection /></ResponsiveSection></div>
    </>
  );
}

function TopDetailsSection() {
  return (
    <>
      <section className="relative w-full bg-[#060713] px-5 py-14 md:hidden">
        <MobileSectionStarfield />
        <div className="border-l-[3px] border-[#ff6b74] pl-3"><p className="font-['Outfit:ExtraBold',sans-serif] text-[22px] text-white">CONCERT DETAILS</p><p className="mt-1 text-[11px] text-[#8e93b3]">公演概要</p></div>
        <div className="mt-8">
          <div className="border-b border-white/[0.08] py-4"><p className="font-['Geist:Bold',sans-serif] text-xs font-bold text-[#df9f3e]">DATE</p><p className="mt-2 font-['Outfit:Bold',sans-serif] text-sm font-bold leading-6 text-white">{siteCopy.date} <span className="text-[#d6a62f]">{siteCopy.weekday}</span></p></div>
          <div className="border-b border-white/[0.08] py-4"><p className="font-['Geist:Bold',sans-serif] text-xs font-bold text-[#df9f3e]">VENUE</p><p className="mt-2 whitespace-pre-line font-['Geist:Bold','Noto_Sans_JP:Bold',sans-serif] text-sm font-bold leading-6 text-white">{siteCopy.venue}{"\n"}<span className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal text-[#8e93b3]">{siteCopy.address}</span>{"\n"}<span className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal text-[#c2c3d2]">{siteCopy.access}</span></p></div>
          <div className="border-b border-white/[0.08] py-4"><p className="font-['Geist:Bold',sans-serif] text-xs font-bold text-[#df9f3e]">TIME</p><p className="mt-2 whitespace-pre-line font-['Geist:Bold',sans-serif] text-sm font-bold leading-6 text-white">{siteCopy.doorStart}{"\n"}<span className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal text-[#c2c3d2]">{siteCopy.preConcert}</span></p></div>
          <div className="border-b border-white/[0.08] py-4"><p className="font-['Geist:Bold',sans-serif] text-xs font-bold text-[#df9f3e]">PRICE</p><p className="mt-2 font-['Geist:Bold','Noto_Sans_JP:Bold',sans-serif] text-sm font-bold leading-6 text-white">{siteCopy.studentPrice}　/　{siteCopy.generalPrice}</p></div>
        </div>
      </section>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={720} backgroundColor="#060713"><EventDetailsSection /></ResponsiveSection></div>
    </>
  );
}

function TopStorySection() {
  return (
    <>
      <section className="relative w-full bg-[#0b0c1e] px-5 py-14 md:hidden">
        <div className="overflow-hidden rounded-2xl bg-[#1f213a]"><img src={imgDarkBadgeLogoMobile} alt="ANIT Summer Live 2026 エンブレム" width="720" height="1018" loading="lazy" decoding="async" className="h-[220px] w-full object-cover" /></div>
        <MobileSectionStarfield mirrored />
        <div className="mt-9"><p className="font-['Geist:Bold',sans-serif] text-[11px] font-bold text-[#ff3d77]">THE STORY</p><p className="mt-2 font-['Outfit:ExtraBold',sans-serif] text-[26px] text-white">ABOUT THE MAGIC</p><div className="mt-3 h-0.5 w-10 bg-[#df9f3e]" /><StoryText className="mt-6 font-['Geist:Regular','Noto_Sans_JP:Bold','Noto_Sans_JP:Regular',sans-serif] text-sm leading-7 text-[#b5b7cd]" lineClassName="" /></div>
      </section>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={800} backgroundColor="#0b0c1e"><AboutWorldSection /></ResponsiveSection></div>
    </>
  );
}

function TopTicketSection() {
  return (
    <>
      <div className="w-full md:hidden"><TicketCtaSection /></div>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={240} backgroundColor="#080910"><TicketCtaSection /></ResponsiveSection></div>
    </>
  );
}

function TopFooterSection() {
  return (
    <>
      <div className="w-full md:hidden"><SiteFooter /></div>
      <div className="hidden w-full md:block"><ResponsiveSection fallbackHeight={248} backgroundColor="#04050e"><SiteFooter /></ResponsiveSection></div>
    </>
  );
}

function FixedHeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden bg-[#060713]">
      <div className="fixed-hero-backdrop__frame w-full max-w-[1440px] overflow-hidden">
        <picture className="contents">
          <source media="(max-width: 767px)" srcSet={imgHeroBgMobile} />
          <img src={imgHeroBg} alt="" width="1600" height="1600" className="size-full object-cover opacity-80" />
        </picture>
      </div>
    </div>
  );
}

export default function AnitSummerLive2026WebsiteMockup() {
  return (
    <>
      <FixedHeroBackdrop />
      <div id="top" className="relative z-10 flex min-h-screen w-full flex-col items-start overflow-x-hidden" data-name="anit-summer-live-2026-website-mockup">
        <TopHeroSection />
        <div className="relative z-10 -mt-px w-full bg-[#060713]">
          <TopConceptSection />
          <TopDetailsSection />
          <TopStorySection />
          <TopTicketSection />
          <TopFooterSection />
        </div>
      </div>
    </>
  );
}
