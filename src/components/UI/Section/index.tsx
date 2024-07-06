import Image from 'next/image';
import React, { ReactNode } from 'react';
import Title from '../Title';

type Props = {
  title: string;
  reverse?: boolean;
  children: ReactNode;
  headerLevel: 1 | 2 | 3 | 4;
};

const CLASS_TITLE = 'text-primary text-[32px] md:text-[64px]';

function Section(props: Props) {
  return (
    <section className="flex flex-col p-mobile md:p-section">
      <Title headerLevel={props.headerLevel} title={props.title} invert="yes" />
      <div
        className={`flex flex-col items-center md:flex-row ${props.reverse ? 'md:flex-row-reverse' : ''} justify-between`}
      >
        <Title
          headerLevel={props.headerLevel}
          title={props.title}
          invert="no"
        />
        <div className="text-justify  text-textM  md:max-w-[40vw]  mb-[20px] ">
          <p>{props.children}</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
