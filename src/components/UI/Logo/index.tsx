import Link from 'next/link';
import Image from 'next/image';
import Img from '@public/Logo.webp';
import { Sassy_Frass, Fjalla_One } from 'next/font/google';
const title = Sassy_Frass({ subsets: ['latin'], weight: '400' });
const body = Fjalla_One({ subsets: ['latin'], weight: '400' });

type Props = {};

export default function Logo(props: Props) {
  return (
    <>
      <div className="flex items-center text-[20px]  hover:text-accent  duration-300">
        <Image src={Img} width={50} alt="logo da empresa" />
        <div
          className={`${title.className} ml-2 hidden md:flex text-[26px] md:text-[30px] leading-[22px]`}
        >
          Nome da empresa
        </div>
      </div>
    </>
  );
}
