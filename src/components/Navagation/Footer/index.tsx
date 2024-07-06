'use client';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import Logo from '@public/Logo.webp';
import Link from 'next/link';
import { KoHo } from 'next/font/google';
import Image from 'next/image';
import { link } from 'fs';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};
// Some variables to change the content of the pagae
const company = {
  name: 'A generic company',
  philosoph: 'Put here a generic linkedIn post',
};
const pages = [
  { name: 'Page 1', link: '#' },
  { name: 'Page 2', link: '#' },
  { name: 'Page 3', link: '#' },
  { name: 'Page 4', link: '#' },
];
const contactInfo = { email: 'EMAL@EMAIL.COM', tel: '(00)00000-0000' };
const creator = { name: 'NAME OF THE GROUP', link: '#' };

export default function Footer(props: Props) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer text-white p-10 bg-primary text-base-content">
        <aside>
          <Image width={120} alt="logo da empresa" src={Logo} />
          <p>
            {company.name}
            <br />
            {company.philosoph}
          </p>
        </aside>
        <nav>
          <header className="footer-title">Paginas</header>
          {pages.map((page) => {
            return (
              <Link
                key={'footer-link-' + page.name}
                href={page.link}
                className="link link-hover"
              >
                {page.name}
              </Link>
            );
          })}
        </nav>
        <nav>
          <header className="footer-title">Contato</header>
          <p className="flex items-center  mb-1">
            <AiOutlineMail className="mr-4" />
            {contactInfo.email}
          </p>
          <p className="flex items-center mb-1">
            <AiOutlineWhatsApp className="mr-4" />
            {contactInfo.tel}
          </p>
        </nav>
      </footer>
      <footer className="footer text-white px-10 py-4 border-t bg-primary text-base-content border-base-300">
        <nav className="md:place-self-center md:justify-self-end">
          <p>
            Site made by{' '}
            <a href={creator.link} className="link link-hover underline">
              {creator.name}
            </a>
          </p>
          <p className="hidden">.</p>
        </nav>
      </footer>
    </>
  );
}

/*
    <footer className=" bg-primary text-white p-footerM md:p-footer">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 md:w-[40%] flex flex-col">
          <h1 className="text-[22px]  mb-6">Clinica EficazMente</h1>
          <p className="">
            Buscando a excelência com afinco e contribuindo para o aprimoramento
            e o desenvolvimento de pessoas.{" "}
          </p>
        </div>
        <div className="mb-4 md:mb-0 ">
          <h1 className="text-[22px] mb-6">Páginas</h1>
          <div>
            <div className=" my-1">
              <Link href={context.homeAddress}>Home</Link>
            </div>
            <div className=" my-1">
              <Link href="about">Sobre mim</Link>
            </div>
            <div className=" my-1">
              <Link href="contact">Contato</Link>
            </div>
            {/* <div className=" mb-1">
                <Link href="blog">Blog</Link>
                </div>
                <div className=" mb-1">
                <Link href="testes">Testes</Link>
                </div> */

/*}

          </div>
        </div>
        <div className="">
          <h1 className="text-[22px] mb-6">Contato</h1>
          <p className="flex items-center mb-1">
            <AiOutlineWhatsApp className="mr-4" /> 11 97523-7471
          </p>
          <p className="flex items-center  mb-1">
            <AiOutlineMail className="mr-4" /> clinicaeficazmente@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-6">
        <p>©Copyright Cleide SantAna {year}. Todos os direitos reservados.</p>
        <p>
          Website developed by{" "}
          <a href="https://giovanisfpv.com.br" className="underline">
            Giovani SFPV
          </a>
        </p>
      </div>
    </footer>
 */
