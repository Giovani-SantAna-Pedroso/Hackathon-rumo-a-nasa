import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '400' });

type Props = {
  question: string;
  answer: string;
};

export default function CardQuestion(props: Props) {
  return (
    <div className="collapse collapse-arrow  rounded-md">
      <input type="checkbox" />
      <div
        className={`collapse-title  text-[20px] text-white md:text-[28px] bg-secondary rounded-md font-medium ${koho.className} `}
      >
        {props.question}
      </div>
      <div className="collapse-content mb-[10px] mt-[10px]">
        <p className="text-justify">{props.answer}</p>
      </div>
    </div>
  );
}
