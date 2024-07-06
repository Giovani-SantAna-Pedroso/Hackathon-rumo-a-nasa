import Link from 'next/link';
import { IoLogoGoogle } from 'react-icons/io';
import CardReview from './CardReview';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });
type Props = {};

export default function Reviews(props: Props) {
  return (
    <section className="p-mobile md:p-section">
      <h1
        className={`${koho.className} leading-title text-primary  text-title mb-[40px]`}
      >
        Depoimentos
      </h1>
      <div className="flex flex-wrap justify-between ">
        <CardReview
          name="Name 0"
          rank={5}
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardReview
          name="Name 0"
          rank={5}
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardReview
          name="Name 0"
          rank={5}
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
      </div>
      <a
        href="#"
        target="_blank "
        className="text-primary underline text-[24px]  "
      >
        <div className="flex items-center">
          {/* <IoLogoGoogle /> */}
          Ver todas as review
        </div>
      </a>
    </section>
  );
}
