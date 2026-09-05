import instagramIcon from '../assets/social/instagram.svg'
import xIcon from '../assets/social/x-white-web.png'
import youtubeIcon from '../assets/social/youtube-white.png'

type SocialLinksProps = {
  instagramUrl?: string
  xUrl?: string
  youtubeUrl?: string
  labelPrefix?: string
  size?: 'default' | 'compact'
}

function SocialIconLink({ href, icon, label, size, iconKind }: { href: string; icon: string; label: string; size: 'default' | 'compact'; iconKind: 'instagram' | 'x' | 'youtube' }) {
  const linkClassName = size === 'compact'
    ? 'flex size-8 items-center justify-center rounded-full border border-white/[0.13] transition-opacity hover:opacity-70'
    : 'flex size-[46px] items-center justify-center rounded-full border border-white/[0.13] transition-opacity hover:opacity-70'
  const iconClassName = size === 'compact'
    ? iconKind === 'instagram' ? 'size-[14px]' : iconKind === 'youtube' ? 'h-[12px] w-[17px] object-contain' : 'size-[13px] object-contain'
    : iconKind === 'instagram' ? 'size-[22px]' : iconKind === 'youtube' ? 'h-[17px] w-[24px] object-contain' : 'size-[20px] object-contain'

  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={linkClassName}><img src={icon} alt="" className={iconClassName} /></a>
}

export default function SocialLinks({ instagramUrl, xUrl, youtubeUrl, labelPrefix, size = 'default' }: SocialLinksProps) {
  if (!instagramUrl && !xUrl && !youtubeUrl) return null

  const prefix = labelPrefix ? `${labelPrefix}の` : ''

  return (
    <div className={size === 'compact' ? 'flex items-center gap-2' : 'flex items-center gap-3'}>
      {instagramUrl ? <SocialIconLink href={instagramUrl} icon={instagramIcon} label={`${prefix}Instagram`} size={size} iconKind="instagram" /> : null}
      {xUrl ? <SocialIconLink href={xUrl} icon={xIcon} label={`${prefix}X`} size={size} iconKind="x" /> : null}
      {youtubeUrl ? <SocialIconLink href={youtubeUrl} icon={youtubeIcon} label={`${prefix}YouTube`} size={size} iconKind="youtube" /> : null}
    </div>
  )
}
