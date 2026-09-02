import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TicketCtaSection from "../components/TicketCtaSection";
import imgStar1 from "../assets/logo/stars/star4.png";
import imgStar2 from "../assets/logo/stars/star3.png";
import imgStar3 from "../assets/logo/stars/star2.png";
import imgStarCard from "../assets/logo/stars/star1.png";
import instagramIcon from "../assets/social/instagram.svg";
import xIcon from "../assets/social/x-white.png";
import soraMoyouImage from "../assets/bands/1787609579375 - Haruka OTA.jpg";
import damaDeFeroceImage from "../assets/bands/Damade - Naoyuki YOSHIMOTO.jpg";
import lilyImage from "../assets/bands/IMG_1074 - Mitsuki MAEDA.jpeg";
import fritzImage from "../assets/bands/IMG_6156 - Sayuna IMAI.jpeg";
import leUnImage from "../assets/bands/IMG_6236 - Kano MUTOU.jpeg";
import fireworkMoriImage from "../assets/bands/IMG_6384 - Ichiha KOBAYASHI.jpeg";
import sumireImage from "../assets/bands/IMG_8574 - Daiki MORI.jpeg";
import yohiraImage from "../assets/bands/よひら1 - Naoyuki YOSHIMOTO.jpg";

type SetlistItem = { artist: string; song: string }
type Band = { name: string; description: string; setlist: SetlistItem[]; image?: string; imageFit?: "cover" | "contain"; xUrl?: string; instagramUrl?: string }
type PreStageBand = { name: string; xUrl?: string; instagramUrl?: string }
type AllCastSong = { timing: string; song: string; artist: string }

// 本編：写真・紹介文（100字以内）・セットリスト・SNS URLが決まり次第、ここを書き換える。
const mainStageBands: Band[] = [
  {
    name: "そらもよう",
    description: "いきものがかりの曲をカバーする2.3年混合バンド、そらもようです！聴いていて心が弾むような明るい演奏をお届けします！",
    setlist: [{ artist: "いきものがかり", song: "気まぐれロマンティック" }, { artist: "いきものがかり", song: "GOLDEN GIRL" }],
    image: soraMoyouImage,
    imageFit: "contain",
  },
  {
    name: "肆葩",
    description: "3年同期ヤロバン4声の肆葩(よひら)と申します。ゆったりした曲を情緒的に歌い上げるバンドです。「四葩」は紫陽花の別名です。紫陽花の四つの花弁のように、四人の個性をまとめて多彩なハーモニーを奏でます。",
    setlist: [{ artist: "離婚伝説", song: "紫陽花" }, { artist: "Vaundy", song: "しわあわせ" }],
    image: yohiraImage,
    imageFit: "contain",
  },
  {
    name: "Lily",
    description: "2年同期ギャルバンのLilyです。女声5声が織り成す繊細さの中に力強さを秘めたハーモニーで、皆さんの心を掴む演奏をお届けします。Lilyによる表情豊かな音楽の世界をどうぞお楽しみください。",
    setlist: [{ artist: "西野カナ", song: "会いたくて会いたくて" }, { artist: "安室奈美恵", song: "Hero" }],
    image: lilyImage,
    imageFit: "contain",
  },
  {
    name: "ファイヤーワーク森",
    description: "名前の由来は聞かないで！3年生同期ヤロバンのファイヤーワーク森です。野郎ばかりの見た目からは想像のつかないほど、繊細で豊かなハーモニーをお届けします。ぜひお楽しみください！",
    setlist: [{ artist: "back number", song: "幕が上がる" }, { artist: "Mr.Children", song: "HANABI" }],
    image: fireworkMoriImage,
    imageFit: "cover",
    xUrl: "https://x.com/firework26_anit?s=11",
  },
  {
    name: "Dama de feroce",
    description: "麗しく、荒々しく、Dama de feroce(ダマデフェローチェ)と申します。気高さと上品さの中に渦巻く情熱と荒々しさをテーマに歌わせていただきます。アカペラでは珍しい7人の力強さをお楽しみください。",
    setlist: [{ artist: "LiSA", song: "Brave Freak Out" }, { artist: "椎名林檎", song: "本能" }, { artist: "GLIM SPANKY", song: "衝動" }],
    image: damaDeFeroceImage,
    imageFit: "contain",
    xUrl: "https://x.com/feroce_anit?s=11",
  },
  {
    name: "フリッツ",
    description: "私たちはスピッツの楽曲を演奏しています。フリッツというバンド名は、ドイツ語の「frisch（爽やかな）」という言葉が由来です。私たちが奏でる爽やかで心温まるサウンドをお楽しみください。",
    setlist: [{ artist: "スピッツ", song: "魔法のコトバ" }, { artist: "スピッツ", song: "涙がキラリ☆" }, { artist: "スピッツ", song: "渚" }],
    image: fritzImage,
    imageFit: "contain",
  },
  {
    name: "Le un",
    description: "3年生同期バンドのLe unです。お洒落で迫力のある演奏をお届けします。ぜひ身体を揺らしながらお楽しみください。",
    setlist: [{ artist: "宇多田ヒカル", song: "Prisoner Of Love" }, { artist: "Vaundy", song: "東京フラッシュ" }],
    image: leUnImage,
    imageFit: "contain",
    xUrl: "https://x.com/leun_anit26?s=11&t=tKxaJTnaDOJX2X81wk2aZw",
    instagramUrl: "https://www.instagram.com/leun_anit26?igsi=YXNxNWF4Z3dmOXpw&utm_source=qr",
  },
  {
    name: "sümire",
    description: "3年生同期バンドsümireです。柔らかなハーモニーとともに、前向きで温かい気持ちになれる歌をお届けします。",
    setlist: [{ artist: "いきものがかり", song: "風が吹いている" }, { artist: "高橋優", song: "福笑い" }],
    image: sumireImage,
    imageFit: "contain",
    xUrl: "https://x.com/sumire_25plus?s=11",
    instagramUrl: "https://www.instagram.com/sumire_25plus?igsi=MXNrOHE5aXQ4Y3VoaQ==",
  },
]

// プレステージ：バンド名と、任意の SNS URL のみを設定する。
const preStageBands: PreStageBand[] = [
  { name: "Blüte" },
  { name: "Balin", xUrl: "https://x.com/balin_from_anit?s=11" },
  { name: "B.E.G" },
  { name: "suiet" },
]

// 全体曲：曲名とアーティスト名を設定する。
const allCastSongs: AllCastSong[] = [
  { timing: "OPENING", song: "笑ってたいんだ", artist: "いきものがかり" },
  { timing: "ENDING", song: "RPG", artist: "SEKAI NO OWARI" },
]

function BandCard({ name, description, setlist, image, imageFit = "contain", xUrl, instagramUrl }: Band) {
  return (
    <article className="relative flex h-[580px] flex-col overflow-hidden rounded-2xl border border-[rgba(249,206,105,0.27)] bg-[rgba(18,20,46,0.8)]">
      {/* Photo area */}
      <div className="bg-[#1f213a] h-[220px] flex items-center justify-center relative w-full shrink-0">
        {image ? (
          <img src={image} alt={`${name}のバンド画像`} className={`size-full ${imageFit === "cover" ? "object-cover" : "object-contain"}`} />
        ) : (
          <>
            <img
              src={imgStarCard}
              alt=""
              aria-hidden
              className="absolute opacity-30 w-6 h-6 object-cover pointer-events-none"
              style={{ left: 19, top: 24, transform: "rotate(12deg)" }}
            />
            <p
              className="text-[#8e93b3] text-[14px] font-semibold leading-none whitespace-nowrap relative z-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              BAND IMAGE PLACEHOLDER
            </p>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p
          className="text-[20px] font-bold leading-none text-white"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          {name}
        </p>
        <p
          className="h-[92px] overflow-y-auto pr-1 text-[13px] leading-[1.7] text-[#c2c3d2]"
          style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}
        >
          {description}
        </p>
        <div className="min-h-[92px] border-t border-[rgba(249,206,105,0.22)] pt-4">
          <p className="font-['Outfit:ExtraBold',sans-serif] text-[10px] font-extrabold tracking-[0.16em] text-[#f9ce69]">SET LIST</p>
          <ul className="mt-3 flex flex-col gap-2">
            {setlist.map(({ artist, song }, index) => (
              <li key={`${artist}-${song}-${index}`} className="grid grid-cols-[1fr_auto] gap-4 text-[12px] leading-snug">
                <span className="text-[#c2c3d2]">{artist}</span>
                <span className="text-white">{song}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`mt-auto flex min-h-8 items-center gap-2 pt-3 ${xUrl || instagramUrl ? "border-t border-white/[0.08]" : ""}`}>
            {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label={`${name}のInstagram`} className="flex size-8 items-center justify-center rounded-full border border-white/[0.13] hover:opacity-70"><img src={instagramIcon} alt="" className="size-[14px]" /></a>}
            {xUrl && <a href={xUrl} target="_blank" rel="noreferrer" aria-label={`${name}のX`} className="flex size-8 items-center justify-center rounded-full border border-white/[0.13] hover:opacity-70"><img src={xIcon} alt="" className="size-[13px] object-contain" /></a>}
        </div>
      </div>
    </article>
  );
}

function PreStageCard({ name, xUrl, instagramUrl }: PreStageBand) {
  return (
    <article className="relative flex h-[132px] flex-col overflow-hidden rounded-2xl border border-[rgba(249,206,105,0.22)] bg-[rgba(18,20,46,0.64)] p-6">
      <img
        src={imgStarCard}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 size-5 rotate-12 object-cover opacity-25"
      />
      <p className="font-['Outfit:ExtraBold',sans-serif] text-[10px] font-extrabold tracking-[0.16em] text-[#f9ce69]">PRE-CONCERT</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="min-w-0 text-[20px] font-bold leading-tight text-white" style={{ fontFamily: "'Geist', sans-serif" }}>
          {name}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label={`${name}のInstagram`} className="flex size-8 items-center justify-center rounded-full border border-white/[0.13] hover:opacity-70"><img src={instagramIcon} alt="" className="size-[14px]" /></a>}
          {xUrl && <a href={xUrl} target="_blank" rel="noreferrer" aria-label={`${name}のX`} className="flex size-8 items-center justify-center rounded-full border border-white/[0.13] hover:opacity-70"><img src={xIcon} alt="" className="size-[13px] object-contain" /></a>}
        </div>
      </div>
    </article>
  )
}

export default function PerformingBandsPage() {
  return (
    <div className="bg-[#060713] flex flex-col items-start min-h-full relative w-full">
      <Navbar />

      {/* Hero */}
      <section
        className="flex flex-col h-[420px] items-center justify-center overflow-hidden relative w-full shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(163.74deg, rgb(6,7,19) 25%, rgb(25,11,32) 50%, rgb(6,7,19) 75%)",
        }}
      >
        {/* Magenta glow */}
        <div
          className="absolute opacity-20 pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: 20,
            width: 600,
            height: 360,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 600 360' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(30 0 0 18 300 180)'><stop stop-color='rgba(255,61,119,1)' offset='0'/><stop stop-color='rgba(128,31,60,0.5)' offset='0.7'/><stop stop-color='rgba(0,0,0,0)' offset='1'/></radialGradient></defs></svg>\")",
          }}
        />
        {/* Decorative stars */}
        <img
          src={imgStar1}
          alt=""
          aria-hidden
          className="absolute opacity-60 w-6 h-6 object-cover pointer-events-none"
          style={{ left: "18%", top: 140, transform: "rotate(45deg)" }}
        />
        <img
          src={imgStar2}
          alt=""
          aria-hidden
          className="absolute opacity-50 w-[30px] h-[30px] object-cover pointer-events-none"
          style={{ right: "8%", top: 85, transform: "rotate(-10deg)" }}
        />
        <img
          src={imgStar3}
          alt=""
          aria-hidden
          className="absolute opacity-40 w-[18px] h-[18px] object-cover pointer-events-none"
          style={{ left: "31%", top: 280, transform: "rotate(15deg)" }}
        />
        {/* Titles */}
        <div className="flex flex-col gap-4 items-center relative z-10">
          <p
            className="text-[48px] font-black text-white leading-none text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            PERFORMING BANDS
          </p>
          <p
            className="text-[18px] font-semibold text-[#ff3d77] leading-none"
            style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}
          >
            出演バンド
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex flex-col gap-14 items-center pb-[120px] pt-[80px] px-8 md:px-[120px] w-full">
        {/* Section heading */}
        <div className="flex flex-col gap-3 items-center w-full">
          <p
            className="text-[36px] font-extrabold text-white leading-none whitespace-nowrap"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            THE MAIN CONCERT
          </p>
          <p className="text-[14px] font-semibold text-[#c2c3d2]">本編</p>
          <div className="h-0.5 w-[48px] bg-[#ff3d77]" />
        </div>

        {/* Band grid */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {mainStageBands.map((band) => <BandCard key={band.name} {...band} />)}
        </div>

        {/* All-cast songs */}
        <div className="mt-6 flex w-full flex-col items-center gap-3 border-t border-white/[0.1] pt-16">
          <p className="font-['Outfit:ExtraBold',sans-serif] text-[30px] font-extrabold leading-none text-white">ALL-CAST SONGS</p>
          <p className="text-[14px] font-semibold text-[#c2c3d2]">全体曲</p>
          <div className="h-0.5 w-[60px] bg-[#ff3d77]" />
        </div>
        <div className="grid w-full max-w-[820px] grid-cols-1 gap-5 md:grid-cols-2">
          {allCastSongs.map(({ timing, song, artist }) => (
            <article key={timing} className="relative h-[150px] overflow-hidden rounded-2xl border border-[rgba(255,61,119,0.28)] bg-[rgba(36,18,46,0.56)] px-7 text-center">
              <p className="absolute left-0 right-0 top-6 font-['Outfit:ExtraBold',sans-serif] text-[10px] font-extrabold tracking-[0.16em] text-[#ff799d]">{timing}</p>
              <p className="absolute inset-x-7 top-1/2 -translate-y-1/2 text-[21px] font-bold leading-tight text-white" style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}>{song}</p>
              <p className="absolute bottom-6 left-0 right-0 text-[13px] leading-none text-[#c2c3d2]" style={{ fontFamily: "'Geist', 'Noto Sans JP', sans-serif" }}>{artist}</p>
            </article>
          ))}
        </div>

        {/* Pre-stage lineup */}
        <div className="mt-6 flex w-full flex-col items-center gap-3 border-t border-white/[0.1] pt-16">
          <p className="font-['Outfit:ExtraBold',sans-serif] text-[30px] font-extrabold leading-none text-white">PRE-CONCERT</p>
          <p className="text-[14px] font-semibold text-[#c2c3d2]">プレコンサート</p>
          <div className="h-0.5 w-[104px] bg-[#f9ce69]" />
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preStageBands.map((band) => <PreStageCard key={band.name} {...band} />)}
        </div>

      </section>

      <TicketCtaSection />
      <Footer />
    </div>
  );
}
