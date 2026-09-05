import instagramIcon from '../assets/social/instagram.svg'
import xIcon from '../assets/social/x-white-web.png'

type SocialLinksProps = {
  instagramUrl?: string
  xUrl?: string
  labelPrefix?: string
  size?: 'default' | 'compact'
}

function SocialIconLink({ href, icon, label, size, iconKind }: { href: string; icon: string; label: string; size: 'default' | 'compact'; iconKind: 'instagram' | 'x' }) {
  const linkClassName = size === 'compact'
    ? 'flex size-8 items-center justify-center rounded-full border border-white/[0.13] transition-opacity hover:opacity-70'
    : 'flex size-[46px] items-center justify-center rounded-full border border-white/[0.13] transition-opacity hover:opacity-70'
  const iconClassName = size === 'compact'
    ? iconKind === 'instagram' ? 'size-[14px]' : 'size-[13px] object-contain'
    : iconKind === 'instagram' ? 'size-[22px]' : 'size-[20px] object-contain'

  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={linkClassName}><img src={icon} alt="" className={iconClassName} /></a>
}

export default function SocialLinks({ instagramUrl, xUrl, labelPrefix, size = 'default' }: SocialLinksProps) {
  if (!instagramUrl && !xUrl) return null

  const prefix = labelPrefix ? `${labelPrefix}の` : ''

  return (
    <div className={size === 'compact' ? 'flex items-center gap-2' : 'flex items-center gap-3'}>
      {instagramUrl ? <SocialIconLink href={instagramUrl} icon={instagramIcon} label={`${prefix}Instagram`} size={size} iconKind="instagram" /> : null}
      {xUrl ? <SocialIconLink href={xUrl} icon={xIcon} label={`${prefix}X`} size={size} iconKind="x" /> : null}
    </div>
  )
}
