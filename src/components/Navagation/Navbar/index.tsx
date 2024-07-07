'use client';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

import { buttonText, linkToPayment } from '@/utils/variables';
import Logo from '@/components/UI/Logo';
type Props = {};

// green to yellow
export default function Navbar(props: Props) {
  let linksNav = [
    { name: 'Quem somos', link: '/about', sub: [] },
    { name: 'Quem somos', link: '/about', sub: [] },
    // { name: "Psicologia forense", link: "/psicologia-forense"},
    // { name: "Mentoria para mulheres", link: "", sub:[
    //   {name:"Psicologia", link:""},
    //   {name:"Emprededorismo feminino", link:""},
    //   {name:"Para seu desenvolvimento", link:""},
    // ]},
    { name: 'Entre em contato', link: '/contact', sub: [] },
    // { name: "Area do paciente", link: "/paciente" },
  ];

  function getItemsNav() {
    return linksNav.map((link) => {
      if (link.sub.length == 0) {
        return (
          <li key={link.link}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        );
      } else {
        return (
          <li key={`link.link`}>
            <details>
              <summary>{link.name}</summary>
              <ul className="bg-primary mt-2 p-2 border-white border ">
                {link.sub.map((subLink) => {
                  return (
                    <li key={`sublink${subLink.name}`}>
                      <Link href={subLink.link}>{subLink.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        );
      }
    });
  }

  return (
    <nav
      className={`${koho.className} text-blackText navbar bg-primary z-[20] fixed top-0 left-0  `}
    >
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" bg-primary menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {getItemsNav()}
          </ul>
        </div>
        {/* Logo */}
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-end w-full">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {getItemsNav()}
        </ul>
        <a
          className={`${koho.className} btn btn-small btn-custon-1 `}
          target=""
          href={'login'}
        >
          {/* {buttonText} */}
          Login
        </a>
      </div>
    </nav>
  );
}
