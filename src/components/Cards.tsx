import Image from 'next/image'
import ellipse from '../app/assets/ellipse.svg'

interface CardsProps {
  title: string
  paragraph: string
}

export function Cards({ title, paragraph }: CardsProps) {
  return (
    <div className="h-[12.93rem] w-[21.68rem] rounded-md border border-primary-brand-green-light bg-primary-brand-beige p-6 mobile:w-full">
      <Image src={ellipse} width={24} height={24} alt="" />

      <strong className="mt-5 block text-20 font-bold text-secundary-gray-headline">
        {title}
      </strong>

      <p className="mt-4 text-16 leading-normal text-secundary-gray-paragraph">
        {paragraph}
      </p>
    </div>
  )
}
