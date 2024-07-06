import { KoHo } from 'next/font/google';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '700' });
const koho = KoHo({ subsets: ['latin'], weight: '700' });

import { AiFillStar } from 'react-icons/ai';

type Props = {
  name: string;
  review: string;
  rank: number;
};

export default function CardReview(props: Props) {
  let rank = [];
  for (let i = 0; i < props.rank; i++) {
    rank.push(<AiFillStar key={`${props.name}${i}`} />);
  }
  /* const rank = new Array(props.rank).fill(<AiFillStar />); */
  return (
    <div className="flex flex-col justify-between p-4 bg-secondary text-white w-full md:w-[30%] rounded-md mb-6">
      {/* Review */}
      <div className="mb-4">{props.review}</div>
      {/* Name and rank */}
      <div className="flex flex-row items-center justify-between  text-[24px]">
        <div className={`${lato.className}`}>{props.name}</div>
        <div className="flex flex-row">{rank}</div>
      </div>
    </div>
  );
}
