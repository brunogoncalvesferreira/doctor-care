export function DivNumbers() {
  return (
    <div className="absolute z-40 -mt-16 flex h-[13.125rem] w-full items-center justify-between rounded-md bg-primary-brand-beige px-[9rem] mobile:h-auto mobile:flex-col mobile:gap-14 mobile:py-10">
      <div className="mr-[6.25rem] flex flex-col items-center border-r border-primary-brand-green pr-[6.25rem] mobile:mr-0 mobile:border-none mobile:pr-0">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +3500
        </span>
        <small className="text-center text-14 text-primary-brand-green">
          Pacientes atendidos
        </small>
      </div>

      <div className="mr-[6.25rem] flex flex-col items-center border-r border-primary-brand-green pr-[6.25rem] mobile:mr-0 mobile:border-none mobile:pr-0">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +15
        </span>
        <small className="text-center text-14 text-primary-brand-green">
          Especialistas disponíveis
        </small>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +10
        </span>
        <small className="text-center text-14 text-primary-brand-green">
          Anos no mercado
        </small>
      </div>
    </div>
  )
}
