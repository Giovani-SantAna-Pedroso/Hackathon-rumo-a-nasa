import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import HerImg from "@public/hero-placerholder.png";
import { KoHo, Encode_Sans } from "next/font/google";

import { buttonText, linkToPayment } from "@/utils/variables";
import Image from "next/image";

type Props = {};

const koho = KoHo({ subsets: ["latin"], weight: "400" });
const koho2 = KoHo({ subsets: ["latin"], weight: "600" });
const light = Encode_Sans({ subsets: ["latin"], weight: "300" });
const bold = Encode_Sans({ subsets: ["latin"], weight: "600" });

export default function Hero(props: Props) {
  return (
    <div className="hero min-h-screen bg-primary text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={HerImg}
          width={480}
          alt="Image of the psichollogist"
          className=" max-h-[480px] rounded-md"
        />
        <div>
          <h1
            className={`${koho.className} leading-[40px] md:leading-[60px] text-titleM md:text-title`}
          >
            <span className={`${bold.className}`}>Hello text</span>
          </h1>
          <p className="py-6 my-6 md:w-[50%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={`${koho2.className} btn btn-custon-1`}>
            <Link href={"#"} target="">
              Call to action
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
