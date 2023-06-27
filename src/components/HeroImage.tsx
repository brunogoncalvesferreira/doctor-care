import Image from 'next/image'
import imageBg from '../app/assets/image.svg'

export function HeroImage() {
  return (
    <div className="mr-14 mobile:mx-auto">
      <Image src={imageBg} width={420} height={547} alt="" />
    </div>
  )
}
