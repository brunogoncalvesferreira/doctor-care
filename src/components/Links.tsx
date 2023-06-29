import { Instagram, Facebook, YoutubeIcon } from 'lucide-react'

interface LinksProps {
  mobile: boolean
}

export function Links({ mobile }: LinksProps) {
  return (
    <div
      className={`${
        mobile === true ? 'flex gap-8' : 'absolute right-0 hidden'
      }`}
    >
      <a href="">
        <Instagram
          size={24}
          className="text-primary-brand-green-light transition-all hover:scale-110"
        />
      </a>
      <a href="">
        <Facebook
          size={24}
          className="text-primary-brand-green-light transition-all hover:scale-110"
        />
      </a>
      <a href="">
        <YoutubeIcon
          size={24}
          className="text-primary-brand-green-light transition-all hover:scale-110"
        />
      </a>
    </div>
  )
}
