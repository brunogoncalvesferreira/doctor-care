import Image from 'next/image'
import doctor from '../app/assets/doctor.png'

export function About() {
  return (
    <div className="mt-40 bg-primary-brand-beige py-40">
      <div className="mx-auto flex w-[90%] max-w-[70rem] items-center gap-16 mobile:flex-col-reverse">
        <Image src={doctor} width={480} height={414} alt="" />

        <div>
          <strong className="mb-[10px] text-center text-14 font-bold uppercase leading-6 tracking-wide text-primary-brand-green">
            SOBRE NÓS
          </strong>
          <h2 className="mb-6 w-[27rem] text-40 font-bold leading-tight text-secundary-gray-headline mobile:w-full">
            Entenda quem somos e por que existimos
          </h2>
          <p className="w-[35rem] text-16  leading-6 text-secundary-gray-paragraph mobile:w-full">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </div>
    </div>
  )
}
