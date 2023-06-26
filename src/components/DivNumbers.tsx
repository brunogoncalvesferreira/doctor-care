export function DivNumbers() {
  return (
    <div className="absolute z-50 -mt-16 flex h-[13.125rem] w-full items-center justify-between rounded-md bg-primary-brand-beige px-[9rem]">
      <div className="flex flex-col items-center">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +3500
        </span>
        <small className="text-16 text-primary-brand-green">
          Pacientes atendidos
        </small>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +15
        </span>
        <small className="text-16 text-primary-brand-green">
          Especialistas disponíveis
        </small>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-48 font-bold text-secundary-gray-headline">
          +10
        </span>
        <small className="text-16 text-primary-brand-green">
          Anos no mercado
        </small>
      </div>
    </div>
  )
}
