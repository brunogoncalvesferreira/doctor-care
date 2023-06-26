import logo from '../app/assets/logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className=" bg-primary-brand-green-light py-[1.625rem]">
      <nav className="mx-auto flex w-[90%] max-w-[70rem] items-center justify-between">
        <div>
          <span>
            <Image src={logo} width={132} height={17} alt="" />
          </span>
        </div>

        <div className="space-x-8">
          <a
            className="relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-14 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:before:w-full hover:before:transition-all"
            href=""
          >
            Início
          </a>
          <a
            className="relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-14 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:before:w-full hover:before:transition-all"
            href=""
          >
            Sobre
          </a>
          <a
            className="relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-14 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:before:w-full hover:before:transition-all"
            href=""
          >
            Serviços
          </a>
          <a
            className="relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-14 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:before:w-full hover:before:transition-all"
            href=""
          >
            Depoimentos
          </a>
        </div>

        <a
          className="flex w-[13rem] items-center justify-center rounded-3xl border border-primary-brand-green px-[1.5rem] py-[0.625rem] text-14 font-bold uppercase text-primary-brand-green transition-all hover:bg-primary-brand-green hover:text-primary-brand-green-light"
          href="#"
        >
          Agendar consulta
        </a>
      </nav>
    </header>
  )
}
