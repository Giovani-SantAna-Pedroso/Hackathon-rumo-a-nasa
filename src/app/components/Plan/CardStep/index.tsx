'use client';
import { motion } from 'framer-motion';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '400' });
const kohoBold = KoHo({ subsets: ['latin'], weight: '500' });

type Props = {
  title: string;
  subTitle: string;
  text: string;
};

export default function CardStep(props: Props) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
      viewport={{ once: true }}
      className="flex flex-col items-center w-ful md:w-[30%] mb-8"
    >
      <h2
        className={`${kohoBold.className} text-[62px] text-primary  leading-[50px]`}
      >
        {props.title}
      </h2>
      <h3
        className={`${kohoBold.className} text-[28px] mb:text-[38px] text-secondary mb-4 md:mb-[40px]`}
      >
        {props.subTitle}
      </h3>
      <p className=" text-[20px] text-justify">{props.text}</p>
    </motion.div>
  );
}
