import { CardData } from '@/app/database/data'
import { Cards } from './Cards'

export function Service() {
  return (
    <div className="mx-auto mt-52 w-[90%] max-w-[70rem] mobile:mt-[400px]">
      <h3 className="mb-4 text-center text-14 font-bold uppercase leading-6 tracking-wide text-primary-brand-green">
        Serviços
      </h3>
      <p className="mx-auto w-[31rem] text-center text-40 font-bold text-secundary-gray-headline  mobile:w-full">
        Como podemos ajudá-lo a se sentir melhor?
      </p>
      <div className="mt-16 grid grid-cols-3 gap-x-10 gap-y-10 mobile:mt-28 mobile:grid-cols-1">
        {CardData.map((card, index) => (
          <Cards key={index} title={card.title} paragraph={card.paragraph} />
        ))}
      </div>
    </div>
  )
}
