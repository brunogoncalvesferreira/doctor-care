import Image from 'next/image'
import whatsapp from '../app/assets/whatsapp.svg'
import pacient from '../app/assets/pacient.png'
import { Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <div id="contact" className="py-40">
      <div className="mx-auto flex w-[90%] max-w-[70rem] items-center justify-between mobile:flex-col mobile:gap-14">
        <div>
          <h2 className="mb-10 max-w-[404px] text-40 font-bold leading-normal text-secundary-gray-headline">
            Entre em contato com a gente!
          </h2>
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="text-primary-brand-green" />
            <p className="text-16 leading-6 text-secundary-gray-headline">
              R. Amauri Souza, 346
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="text-primary-brand-green" />
            <p className="text-16 leading-6 text-secundary-gray-headline">
              contato@doctorcare.com
            </p>
          </div>

          <a
            href=""
            className="mt-10 flex w-[18rem] items-center gap-2 rounded-3xl bg-primary-brand-green px-8 py-4 uppercase text-primary-brand-green-light transition-all hover:bg-primary-brand-green-hover"
          >
            <Image src={whatsapp} width={24} height={24} alt="" />
            Agende sua consulta
          </a>
        </div>

        <div>
          <Image src={pacient} width={575} height={379} alt="" />
        </div>
      </div>
    </div>
  )
}
