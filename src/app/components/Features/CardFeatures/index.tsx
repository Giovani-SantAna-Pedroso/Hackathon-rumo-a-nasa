'use client';
import { KoHo } from 'next/font/google';
import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
};
type Props = {
  title: string;
  icon: any;
};

const koho = KoHo({ subsets: ['latin'], weight: '400' });

export default function CardFeatures(props: Props) {
  return (
    <motion.div
      initial={{ x: -48, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
      className={`flex flex-row ${koho.className} items-center text-[24px] md:text-[20px] rounded-lg p-4 bg-secondary text-white mb-[20px] w-full md:w-[30%]`}
    >
      <div className="mr-4">{props.icon}</div>
      {props.title}
    </motion.div>
  );
}
