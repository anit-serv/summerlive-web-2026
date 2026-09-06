import SubpageLayout from "../components/SubpageLayout";
import imgStar2 from "../assets/logo/stars/star4.png";
import imgStar4 from "../assets/logo/stars/star3.png";

type Sponsor = { name: string; logo?: string; size: "large" | "small" }

// ロゴを追加する際は、画像パスと size を設定する。
// large: 大サイズ枠 / small: 小サイズ枠
const sponsors: Sponsor[] = [
  { name: "準備中", size: "large" },
  { name: "準備中", size: "large" },
  { name: "準備中", size: "small" },
  { name: "準備中", size: "small" },
  { name: "準備中", size: "small" },
  { name: "準備中", size: "small" },
];

function SponsorCard({ name, logo, size }: Sponsor) {
  const isLarge = size === "large"

  return (
    <div
      className={`relative flex min-w-0 items-center justify-center rounded-2xl bg-[rgba(42,40,70,0.85)] ${isLarge ? "h-[170px] p-6 md:h-[210px] md:p-10" : "h-[108px] p-4 md:h-[136px] md:p-6"}`}
      style={{
        border: `1px solid ${isLarge ? "rgba(249,206,105,0.27)" : "rgba(255,255,255,0.1)"}`,
      }}
    >
      {logo ? (
        <img src={logo} alt={`${name} ロゴ`} loading="lazy" decoding="async" className={`max-w-full object-contain ${isLarge ? "max-h-[104px] md:max-h-[128px]" : "max-h-[60px] md:max-h-[76px]"}`} />
      ) : (
        <p
          className={`${isLarge ? "text-[16px] md:text-[18px]" : "text-[12px] md:text-[13px]"} whitespace-nowrap font-bold text-white opacity-75`}
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
    <SubpageLayout title="SPONSORS" subtitle="協賛企業様" theme="gold">
      {/* Content */}
      <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 pb-20 pt-14 md:gap-16 md:px-[120px] md:pb-[120px] md:pt-[80px]">
        {/* Section heading */}
        <div className="flex flex-col items-center w-full max-w-[800px]">
          <h2 className="font-['Outfit:ExtraBold',sans-serif] text-[24px] font-extrabold tracking-[0.08em] text-[#f9ce69] md:text-[30px]">SPECIAL THANKS</h2>
        </div>

        {/* Sponsor logo grids */}
        <div className="flex w-full flex-col gap-5 md:gap-8">
          {largeSponsors.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
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
        <div className="bg-[#090a1e] flex flex-col gap-4 items-center p-7 rounded-3xl w-full relative overflow-hidden border border-[rgba(255,255,255,0.08)] md:p-12">
          <img
            src={imgStar4}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-3 top-3 size-3 object-cover opacity-40 min-[501px]:left-[77px] min-[501px]:top-[30px] min-[501px]:size-6 min-[501px]:opacity-60"
            style={{ transform: "rotate(8deg)" }}
          />
          <img
            src={imgStar2}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-3 top-3 size-3 object-cover opacity-40 min-[501px]:right-[5%] min-[501px]:top-10 min-[501px]:size-[18px] min-[501px]:opacity-50"
            style={{ transform: "rotate(-15deg)" }}
          />
          <p
            className="text-[#f9ce69] text-[16px] font-bold text-center leading-relaxed relative z-10 md:text-[20px] md:leading-none"
            style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}
          >
            協賛いただきありがとうございます。
          </p>
        </div>
      </section>

    </SubpageLayout>
  );
}
