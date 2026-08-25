import './App.css'
import logo from './assets/logo/サマライロゴ(背景透過ver.).png'
import poster from './assets/poster/完成版_サマライ2026ポスター.png'

const ticketUrl = 'https://livepocket.jp/e/zy4df'
const instagramUrl = 'https://www.instagram.com/anit_cl?igsh=MXdvbW13anp0amlnaA%3D%3D&utm_source=qr'
const xUrl = 'https://twitter.com/ANIT_LIVE'

function App() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top">ANIT <span>SUMMER LIVE</span></a>
      <nav aria-label="ページ内ナビゲーション"><a href="#about">STORY</a><a href="#info">INFO</a><a href="#ticket">TICKET</a></nav>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">TOKYO UNIVERSITY OF AGRICULTURE AND TECHNOLOGY<br />A CAPPELLA CIRCLE ANIT</p>
        <p className="year">SUMMER LIVE <span>2026</span></p>
        <img src={logo} className="event-logo" alt="アカペラ魔人アーニー Heat up!" />
        <p className="hero-date">2026. 09. 18 FRI　|　座・高円寺2</p>
        <a className="button primary" href={ticketUrl} target="_blank" rel="noreferrer">チケットを手に入れる <b>↗</b></a>
      </div>
      <div className="hero-art"><img src={poster} alt="ANITサマーライブ2026 Heat up! メインビジュアル" /></div>
      <a href="#about" className="scroll">SCROLL <span /></a>
    </section>
    <section className="story section" id="about">
      <div className="section-label">01 / STORY</div>
      <div className="story-layout">
        <div className="lamp-wrap" aria-hidden="true"><span>✦</span><div className="lamp">☾</div><span>✦</span></div>
        <div className="story-copy">
          <p className="small-title">WELCOME TO THE A CAPPELLA WORLD</p>
          <h1>願いを叶えるのは、<br /><em>魔法</em>だけじゃない。</h1>
          <p>ある日突如として目の前に現れたのは、アカペラ魔人アーニー！</p>
          <blockquote>「願いを一つ叶えよう。」</blockquote>
          <p>……と言ったはずなのに、この魔人、やたらとアカペラを聴かせてくる！？</p>
          <p>一緒に、不思議で楽しいアカペラワールドへ飛び込んでみませんか？<br />思わず口ずさみたくなるステージをお届けします！</p>
        </div>
      </div>
    </section>
    <section className="event-info section" id="info">
      <div className="section-label">02 / EVENT INFO</div><div className="info-heading"><p>MAKE A WISH.</p><h2>開催概要</h2></div>
      <dl className="details">
        <div><dt>DATE</dt><dd><strong>2026. 09. 18</strong>　FRI</dd></div>
        <div><dt>TIME</dt><dd>OPEN <strong>16:00</strong>　/　START <strong>17:00</strong></dd></div>
        <div><dt>VENUE</dt><dd>座・高円寺2　<a href="https://za-koenji.jp/access/" target="_blank" rel="noreferrer">ACCESS ↗</a></dd></div>
        <div><dt>PRICE</dt><dd>学生 <strong>500 YEN</strong>　/　一般 <strong>1,000 YEN</strong></dd></div>
      </dl>
    </section>
    <section className="ticket" id="ticket"><div className="ticket-inner"><div><p className="section-label">03 / TICKET</p><h2>さあ、扉を開けよう。</h2><p>あなたの願いが、歌になる夜。</p></div><a className="button light" href={ticketUrl} target="_blank" rel="noreferrer">チケット購入はこちら <b>↗</b></a></div></section>
    <footer><div className="footer-logo">ANIT <span>SUMMER LIVE 2026</span></div><div className="socials"><a href={xUrl} target="_blank" rel="noreferrer">X / Twitter ↗</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div><small>© 2026 ANIT SUMMER LIVE</small></footer>
  </main>
}

export default App
