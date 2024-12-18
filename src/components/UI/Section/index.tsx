'use client';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import Title from '../Title';
import { motion } from 'framer-motion';
import { reverse } from 'dns';

type Props = {
  title: string;
  reverse?: boolean;
  backgroundImg?: string;
  children: ReactNode;
  headerLevel: 1 | 2 | 3 | 4;
};

// backgroundImage: 'url()',
const CLASS_TITLE = 'text-primary text-[32px] md:text-[64px]';

function Section(props: Props) {
  const xInit = !props.reverse ? -48 : 40;
  return (
    <motion.section
      initial={{ x: xInit, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
      className="flex flex-col p-mobile md:p-section"
    >
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${props.backgroundImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover', // or 'contain' depending on your needs
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Title
          headerLevel={props.headerLevel}
          title={props.title}
          invert="yes"
        />
      </div>
      <div
        className={`flex flex-col items-center md:flex-row ${props.reverse ? 'md:flex-row-reverse' : ''} justify-between`}
      >
        <div
          className="h-full p-4 mx-4 w-full"
          style={{
            backgroundImage: `url(${props.backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', // or 'contain' depending on your needs
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Title
            headerLevel={props.headerLevel}
            title={props.title}
            invert="no"
          />
        </div>
        <div className="  text-textM  md:max-w-[40vw]  mb-[20px] ">
          <p>{props.children}</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
