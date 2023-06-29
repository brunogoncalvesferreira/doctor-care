import { DivNumbers } from '@/components/DivNumbers'
import { Header } from '@/components/Header'
import { HeroImage } from '@/components/HeroImage'
import { HeroText } from '@/components/HeroText'

import { Service } from '@/components/Service'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-primary-brand-green-light-2">
      {/* hero-section */}
      <div className="h-[42rem] bg-primary-brand-green-light mobile:h-auto">
        <Header />

        {/* Layout */}
        <div className="relative mx-auto w-[90%] max-w-[70rem]">
          <div className="flex justify-between gap-[3.18rem] mobile:flex-col">
            {/* hero-text */}
            <HeroText />
            {/* hero-image */}
            <HeroImage />
          </div>

          {/* div-numbers */}
          <DivNumbers />
        </div>
      </div>

      {/* service-section */}
      <Service />

      {/* about-section */}
      <About />

      {/* contact-section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
