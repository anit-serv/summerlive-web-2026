import imgRectangle from "./48d21aeced0d557b1fc9e9791b116a6777ee3227.png";
import imgRectangle1 from "./addc1c5be84b80fe871ce2a93508aa622625ca80.png";
import imgRectangle2 from "./1a1b5745de4bc4915c29786105e81566ac154bb0.png";
import imgRectangle3 from "./0e9a6ad63274d7b6fc7628b59dfc54a852ec7342.png";

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
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[13px] whitespace-nowrap">協賛企業様</p>
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">出演バンド</p>
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
    <div className="absolute flex items-center justify-center left-[263.03px] size-[33.941px] top-[140px]">
      <div className="flex-none rotate-45">
        <div className="opacity-60 overflow-clip relative size-[24px]" data-name="Frame">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute flex items-center justify-center left-[1120px] size-[34.754px] top-[84.79px]">
      <div className="-rotate-10 flex-none">
        <div className="opacity-50 overflow-clip relative size-[30px]" data-name="Frame">
          <div className="absolute left-0 size-[30px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute flex items-center justify-center left-[445.34px] size-[22.045px] top-[280px]">
      <div className="flex-none rotate-15">
        <div className="opacity-40 overflow-clip relative size-[18px]" data-name="Frame">
          <div className="absolute left-0 size-[18px] top-0" data-name="Rectangle">
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
      <p className="font-['Outfit:Black',sans-serif] font-black relative shrink-0 text-[48px] text-white">PERFORMING BANDS</p>
      <p className="font-['Geist:SemiBold','Noto_Sans_JP:Bold',sans-serif] font-semibold relative shrink-0 text-[#ff3d77] text-[18px]">出演バンド</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[420px] items-center justify-center overflow-clip relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(163.73979529168804deg, rgb(6, 7, 19) 25%, rgb(25, 11, 32) 50%, rgb(6, 7, 19) 75%)" }} data-name="hero">
      <div className="absolute h-[360px] left-[420px] opacity-20 top-[20px] w-[600px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 600 360' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(30 0 0 18 300 180)'><stop stop-color='rgba(255,61,119,1)' offset='0'/><stop stop-color='rgba(181,44,89,1)' offset='0.3'/><stop stop-color='rgba(144,35,73,1)' offset='0.45'/><stop stop-color='rgba(107,26,58,1)' offset='0.6'/><stop stop-color='rgba(80,20,44,0.75)' offset='0.7'/><stop stop-color='rgba(54,13,29,0.5)' offset='0.8'/><stop stop-color='rgba(0,0,0,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="magenta-glow" />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[36px] text-white whitespace-nowrap">LINEUP</p>
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Line">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 60 3" width="60">
            <line id="Line" stroke="#FF3D77" strokeWidth="3" x2="60" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute flex items-center justify-center left-[19.01px] size-[28.465px] top-[24px]">
      <div className="flex-none rotate-12">
        <div className="opacity-30 overflow-clip relative size-[24px]" data-name="Frame">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame9 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 1</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder />
        <Frame10 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(249,206,105,0.27)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute flex items-center justify-center left-[19.01px] size-[28.465px] top-[24px]">
      <div className="flex-none rotate-12">
        <div className="opacity-30 overflow-clip relative size-[24px]" data-name="Frame">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder1() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame11 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 2</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard1() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder1 />
        <Frame12 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute flex items-center justify-center left-[19.01px] size-[28.465px] top-[24px]">
      <div className="flex-none rotate-12">
        <div className="opacity-30 overflow-clip relative size-[24px]" data-name="Frame">
          <div className="absolute left-0 size-[24px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder2() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame13 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 3</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard2() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder2 />
        <Frame14 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <BandCard />
      <BandCard1 />
      <BandCard2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute flex items-center justify-center left-[230px] size-[24.495px] top-[14.82px]">
      <div className="-rotate-15 flex-none">
        <div className="opacity-30 overflow-clip relative size-[20px]" data-name="Frame">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder3() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame16 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 4</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard3() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder3 />
        <Frame17 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute flex items-center justify-center left-[230px] size-[24.495px] top-[14.82px]">
      <div className="-rotate-15 flex-none">
        <div className="opacity-30 overflow-clip relative size-[20px]" data-name="Frame">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder4() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame18 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 5</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard4() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder4 />
        <Frame19 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute flex items-center justify-center left-[230px] size-[24.495px] top-[14.82px]">
      <div className="-rotate-15 flex-none">
        <div className="opacity-30 overflow-clip relative size-[20px]" data-name="Frame">
          <div className="absolute left-0 size-[20px] top-0" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoPlaceholder5() {
  return (
    <div className="bg-[#1f213a] content-stretch flex h-[220px] items-center justify-center relative shrink-0 w-full" data-name="photo-placeholder">
      <Frame20 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8e93b3] text-[14px] whitespace-nowrap">BAND IMAGE PLACEHOLDER</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[18px] text-white w-full">BAND NAME 6</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#f9ce69] text-[13px] w-full">ジャンル・紹介文</p>
    </div>
  );
}

function BandCard5() {
  return (
    <div className="bg-[rgba(18,20,46,0.8)] flex-[1_0_2px] min-w-px relative rounded-[16px]" data-name="band-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhotoPlaceholder5 />
        <Frame21 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <BandCard3 />
      <BandCard4 />
      <BandCard5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#ff3d77] content-stretch flex items-start px-[20px] py-[10px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">TICKET RESERVE</p>
    </div>
  );
}

function TicketCtaBottom() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[40px] relative shrink-0 w-full" data-name="ticket-cta-bottom">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f9ce69] text-[16px] whitespace-nowrap">チケットのご予約はこちら →</p>
      <Frame22 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center pb-[120px] pt-[80px] px-[120px] relative shrink-0 w-full" data-name="content">
      <Frame6 />
      <Frame7 />
      <TicketCtaBottom />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Black',sans-serif] font-black relative shrink-0 text-[20px] text-white">ANIT SUMMER LIVE 2026</p>
      <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal relative shrink-0 text-[#8e93b3] text-[12px]">「願いを叶えるのは、魔法だけじゃない。」</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">INSTAGRAM</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">X (TWITTER)</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
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
      <Frame23 />
      <Frame28 />
    </div>
  );
}

export default function PerformingBandsPage() {
  return (
    <div className="bg-[#060713] content-stretch flex flex-col items-start relative size-full" data-name="performing-bands-page">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}