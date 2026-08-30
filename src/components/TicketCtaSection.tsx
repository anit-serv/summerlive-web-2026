const ticketUrl = 'https://livepocket.jp/e/zy4df'

export default function TicketCtaSection() {
  return (
    <section className="flex min-h-[240px] w-full items-center justify-center bg-[#080910] px-8 md:px-20" aria-label="チケット案内">
      <div className="w-full max-w-[680px] border-y border-[#df9f3e]">
        <a
          className="group flex h-16 w-full items-center justify-between"
          href={ticketUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LivePocketでチケットの詳細・予約を開く"
        >
          <div className="flex flex-col items-start gap-1">
            <p className="font-['Geist:Bold',sans-serif] text-[10px] font-bold tracking-[0.18em] text-[#df9f3e]">TICKET INFORMATION</p>
            <p className="font-['Outfit:Black','Noto_Sans_JP:Black',sans-serif] text-[15px] font-black text-[rgba(249,206,105,0.82)] transition-colors group-hover:text-[#f9ce69]">チケットの詳細・ご予約</p>
          </div>
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#f9ce69" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </section>
  )
}
