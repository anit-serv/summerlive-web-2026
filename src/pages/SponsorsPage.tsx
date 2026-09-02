import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TicketCtaSection from "../components/TicketCtaSection";
import imgStar1 from "../assets/logo/stars/star1.png";
import imgStar2 from "../assets/logo/stars/star4.png";
import imgStar3 from "../assets/logo/stars/star2.png";
import imgStar4 from "../assets/logo/stars/star3.png";

type Sponsor = { name: string; logo?: string; size: "large" | "small" }

// ロゴを追加する際は、画像パスと size を設定する。
// large: 大サイズ枠 / small: 小サイズ枠
const sponsors: Sponsor[] = [
  { name: "COMPANY LOGO", size: "large" },
  { name: "COMPANY LOGO", size: "large" },
  { name: "COMPANY LOGO", size: "small" },
  { name: "COMPANY LOGO", size: "small" },
  { name: "COMPANY LOGO", size: "small" },
  { name: "COMPANY LOGO", size: "small" },
];

function SponsorCard({ name, logo, size }: Sponsor) {
  const isLarge = size === "large"

  return (
    <div
      className={`relative flex min-w-0 items-center justify-center rounded-2xl bg-[rgba(42,40,70,0.85)] ${isLarge ? "h-[210px] p-10" : "h-[136px] p-6"}`}
      style={{
        border: `1px solid ${isLarge ? "rgba(249,206,105,0.27)" : "rgba(255,255,255,0.1)"}`,
      }}
    >
      {logo ? (
        <img src={logo} alt={name} className={`max-w-full object-contain ${isLarge ? "max-h-[128px]" : "max-h-[76px]"}`} />
      ) : (
        <p
          className={`${isLarge ? "text-[18px]" : "text-[13px]"} whitespace-nowrap font-bold text-white opacity-75`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {name}
        </p>
      )}
    </div>
  );
}

export default function SponsorsPage() {
  const largeSponsors = sponsors.filter((sponsor) => sponsor.size === "large")
  const smallSponsors = sponsors.filter((sponsor) => sponsor.size === "small")

  return (
    <div className="bg-[#060713] flex flex-col items-start min-h-full relative w-full">
      <Navbar />

      {/* Hero */}
      <section
        className="flex flex-col h-[420px] items-center justify-center overflow-hidden relative w-full shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(163.74deg, rgb(6,7,19) 25%, rgb(18,11,36) 50%, rgb(6,7,19) 75%)",
        }}
      >
        {/* Lamp glow */}
        <div
          className="absolute opacity-15 pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: 50,
            width: 800,
            height: 320,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 800 320' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(40 0 0 16 400 160)'><stop stop-color='rgba(249,206,105,1)' offset='0'/><stop stop-color='rgba(255,61,119,1)' offset='0.4'/><stop stop-color='rgba(128,31,60,0.5)' offset='0.7'/><stop stop-color='rgba(0,0,0,0)' offset='1'/></radialGradient></defs></svg>\")",
          }}
        />
        {/* Decorative stars */}
        <img
          src={imgStar1}
          alt=""
          aria-hidden
          className="absolute opacity-60 w-9 h-9 object-cover pointer-events-none"
          style={{ left: "23%", top: 120, transform: "rotate(15deg)" }}
        />
        <img
          src={imgStar2}
          alt=""
          aria-hidden
          className="absolute opacity-50 w-7 h-7 object-cover pointer-events-none"
          style={{ right: "18%", top: 144, transform: "rotate(-12deg)" }}
        />
        <img
          src={imgStar3}
          alt=""
          aria-hidden
          className="absolute opacity-40 w-5 h-5 object-cover pointer-events-none"
          style={{ left: "33%", top: 260, transform: "rotate(22deg)" }}
        />
        {/* Titles */}
        <div className="flex flex-col gap-4 items-center relative z-10">
          <p
            className="text-[48px] font-black text-white leading-none"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            SPONSORS
          </p>
          <p
            className="text-[18px] font-semibold text-[#f9ce69] leading-none"
            style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}
          >
            協賛企業様
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col gap-16 items-center pb-[120px] pt-[80px] px-8 md:px-[120px] w-full">
        {/* Section heading */}
        <div className="flex flex-col items-center w-full max-w-[800px]">
          <p className="font-['Outfit:ExtraBold',sans-serif] text-[30px] font-extrabold tracking-[0.08em] text-[#f9ce69]">SPECIAL THANKS</p>
        </div>

        {/* Sponsor logo grids */}
        <div className="flex w-full flex-col gap-8">
          {largeSponsors.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {largeSponsors.map((sponsor, index) => <SponsorCard key={`${sponsor.size}-${sponsor.name}-${index}`} {...sponsor} />)}
            </div>
          )}
          {smallSponsors.length > 0 && (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {smallSponsors.map((sponsor, index) => <SponsorCard key={`${sponsor.size}-${sponsor.name}-${index}`} {...sponsor} />)}
            </div>
          )}
        </div>

        {/* Bottom banner */}
        <div className="bg-[#090a1e] flex flex-col gap-4 items-center p-12 rounded-3xl w-full relative overflow-hidden border border-[rgba(255,255,255,0.08)]">
          <img
            src={imgStar4}
            alt=""
            aria-hidden
            className="absolute opacity-60 w-6 h-6 object-cover pointer-events-none"
            style={{ left: 77, top: 30, transform: "rotate(8deg)" }}
          />
          <img
            src={imgStar2}
            alt=""
            aria-hidden
            className="absolute opacity-50 w-[18px] h-[18px] object-cover pointer-events-none"
            style={{ right: "5%", top: 40, transform: "rotate(-15deg)" }}
          />
          <p
            className="text-[#f9ce69] text-[20px] font-bold text-center leading-none relative z-10"
            style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}
          >
            協賛いただきありがとうございます。
          </p>
        </div>
      </section>

      <TicketCtaSection />
      <Footer />
    </div>
  );
}
