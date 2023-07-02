'use client'

import { useEffect, useState } from 'react'
import { Links } from './Links'
import { AlignRight, X } from 'lucide-react'
import Link from 'next/link'
import logo from '../app/assets/logo.svg'
import logoWhite from '../app/assets/logo-footer.svg'
import Image from 'next/image'

export function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [])

  function handleOpenMenuMobile() {
    setOpenMenuMobile(!openMenuMobile)
  }

  function handleCloseMenuMobile() {
    const stateInitOpenMenuMobile = false
    setOpenMenuMobile(stateInitOpenMenuMobile)
  }

  return (
    <header
      className={`${
        isSticky
          ? 'fixed left-0 top-0 z-50 w-full bg-primary-brand-green py-[1.625rem]'
          : 'relative bg-primary-brand-green-light py-[1.625rem]'
      }`}
    >
      <nav
        className={
          ' mx-auto flex w-[90%] max-w-[70rem] items-center justify-between'
        }
      >
        <div
          className={`${
            openMenuMobile === true ? 'absolute z-20 ml-1 mt-12 ' : ''
          }`}
        >
          <span>
            {openMenuMobile === true ? (
              <Image src={logoWhite} width={132} height={17} alt="" />
            ) : isSticky === true ? (
              <Image src={logoWhite} width={132} height={17} alt="" />
            ) : (
              <Image src={logo} width={132} height={17} alt="" />
            )}
          </span>
        </div>

        <div
          className={`${
            openMenuMobile === true
              ? 'absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-12 overflow-auto bg-primary-brand-green'
              : 'flex items-center justify-center gap-8 mobile:hidden'
          } `}
        >
          <Link
            className={`${
              openMenuMobile === true
                ? 'text-20 font-bold text-primary-brand-green-light'
                : isSticky === true
                ? 'text-primary-brand-green-light'
                : "relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-0 before:mt-8 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:font-bold hover:before:w-full hover:before:transition-all"
            }`}
            onClick={handleCloseMenuMobile}
            href="/"
            scroll={false}
          >
            Início
          </Link>
          <Link
            className={`${
              openMenuMobile === true
                ? 'text-20 font-bold text-primary-brand-green-light'
                : isSticky === true
                ? 'text-primary-brand-green-light'
                : "relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-0 before:mt-8 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:font-bold hover:before:w-full hover:before:transition-all"
            }`}
            onClick={handleCloseMenuMobile}
            href="#about"
            scroll={false}
          >
            Sobre
          </Link>
          <Link
            className={`${
              openMenuMobile === true
                ? 'text-20 font-bold text-primary-brand-green-light'
                : isSticky === true
                ? 'text-primary-brand-green-light'
                : "relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-0 before:mt-8 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:font-bold hover:before:w-full hover:before:transition-all"
            }`}
            onClick={handleCloseMenuMobile}
            href="#service"
            scroll={false}
          >
            Serviços
          </Link>
          <Link
            className={`${
              openMenuMobile === true
                ? 'text-20 font-bold text-primary-brand-green-light'
                : isSticky === true
                ? 'text-primary-brand-green-light'
                : "relative text-16 text-primary-brand-green before:absolute before:left-0 before:top-0 before:mt-8 before:h-[2px] before:w-0 before:rounded-full before:bg-primary-brand-green before:content-[''] hover:font-bold hover:before:w-full hover:before:transition-all"
            }`}
            onClick={handleCloseMenuMobile}
            href="#contact"
            scroll={false}
          >
            Contato
          </Link>

          <a
            className={`${
              openMenuMobile === true
                ? 'flex w-[13rem] items-center justify-center rounded-3xl  bg-primary-brand-green-light px-[1.5rem] py-[0.625rem] text-14 font-bold uppercase text-primary-brand-green transition-all '
                : 'absolute left-0 hidden'
            }`}
            href="#"
          >
            Agendar consulta
          </a>

          <Links mobile={openMenuMobile} />
        </div>

        <a
          className={`${
            isSticky === true
              ? 'flex w-[13rem] items-center justify-center rounded-3xl border border-primary-brand-green-light px-[1.5rem] py-[0.625rem] text-14 font-bold uppercase text-primary-brand-green-light transition-all hover:bg-primary-brand-green-light hover:text-primary-brand-green mobile:hidden'
              : 'flex w-[13rem] items-center justify-center rounded-3xl border border-primary-brand-green px-[1.5rem] py-[0.625rem] text-14 font-bold uppercase text-primary-brand-green transition-all hover:bg-primary-brand-green hover:text-primary-brand-green-light mobile:hidden'
          } `}
          href="#"
        >
          Agendar consulta
        </a>

        <button
          onClick={handleOpenMenuMobile}
          className={`${
            openMenuMobile === true
              ? 'absolute right-0 z-20 mr-5 mt-12'
              : 'hidden mobile:block'
          }`}
        >
          {openMenuMobile === true ? (
            <X size={40} className="text-primary-brand-green-light" />
          ) : isSticky === true ? (
            <AlignRight size={40} className="text-primary-brand-green-light" />
          ) : (
            <AlignRight size={40} className="text-primary-brand-green" />
          )}
        </button>
      </nav>
    </header>
  )
}
