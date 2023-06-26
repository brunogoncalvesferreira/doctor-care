import { DivNumbers } from '@/components/DivNumbers'
import { Header } from '@/components/Header'
import { HeroImage } from '@/components/HeroImage'
import { HeroText } from '@/components/HeroText'

export default function Home() {
  return (
    <div>
      {/* hero-section */}
      <div className="h-[42rem] bg-primary-brand-green-light">
        <Header />

        {/* Layout */}
        <div className="relative mx-auto w-[90%] max-w-[70rem]">
          <div className="flex justify-between gap-[3.18rem]">
            {/* hero-text */}
            <HeroText />
            {/* hero-image */}
            <HeroImage />
          </div>

          {/* div-numbers */}
          <DivNumbers />
        </div>
      </div>
    </div>
  )
}
