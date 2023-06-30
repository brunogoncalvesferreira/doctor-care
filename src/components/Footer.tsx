import Image from 'next/image'
import logoFooter from '../app/assets/logo-footer.svg'
import { Links } from './Links'

export function Footer() {
  return (
    <footer className="bg-primary-brand-green py-20">
      <div className="mx-auto flex w-[90%] max-w-[70rem] items-center justify-between mobile:flex-col mobile:items-start mobile:gap-8">
        <div className="space-y-4">
          <div>
            <Image src={logoFooter} width={256} height={33} alt="" />
          </div>

          <div className="flex flex-col">
            <strong className="text-14 leading-normal text-primary-brand-green-light">
              ©2022 - DoctorCare.
            </strong>
            <span className="text-14 leading-normal text-primary-brand-green-light">
              Todos os direitos reservados.
            </span>
          </div>
        </div>

        <Links mobile />
      </div>
    </footer>
  )
}
