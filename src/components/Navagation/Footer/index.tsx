'use client';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import Logo from '@public/images/logo.webp';
import Link from 'next/link';
import { KoHo } from 'next/font/google';
import Image from 'next/image';
import { link } from 'fs';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};
// Some variables to change the content of the pagae
const company = {
  name: 'CreditaRs',
  philosoph: 'Auxílio sem empecilho',
};
const pages = [
  { name: 'Home', link: '/' },
  { name: 'Dashboard', link: '/meuPerfil' },
  { name: 'Login', link: '/login' },
];
const contactInfo = { email: 'creditars@email.com', tel: '(00)00000-0000' };
const creator = {
  name: 'Giovani, Pedro, Tarug, Vieira',
  link: 'https://github.com/Giovani-Pedroso/Hackathon-rumo-a-nasa',
};

export default function Footer(props: Props) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer  p-10 bg-primary text-blackText">
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
      <footer className="footer px-10 py-4 border-t bg-primary text-blackText border-blackText">
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
