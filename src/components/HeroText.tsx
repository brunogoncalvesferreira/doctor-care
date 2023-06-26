import Image from 'next/image'
import whatsapp from '../app/assets/whatsapp.svg'

export function HeroText() {
  return (
    <div className="mt-[5rem]">
      <span className="text-14 font-bold uppercase leading-6 tracking-wide text-primary-brand-green">
        BOAS-VINDAS A DOCTORCARE 👋
      </span>
      <h1 className="mt-4 max-w-[37rem] text-52 font-bold leading-snug text-secundary-gray-headline">
        Assistência médica simplificada para todos
      </h1>
      <p className="mt-6 max-w-[37rem] text-18 leading-normal text-secundary-gray-paragraph">
        Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz
        de sua doença e proporcionar uma cura a longo prazo.
      </p>
      <a
        className="mt-8 flex w-[21.375rem] items-center justify-center gap-4 rounded-3xl bg-primary-brand-green px-[2rem] py-[1rem] font-bold uppercase text-primary-brand-green-light transition-all hover:bg-primary-brand-green-hover"
        href=""
      >
        <Image src={whatsapp} width={20} height={20} alt="" />
        Agende sua consulta
      </a>
    </div>
  )
}
