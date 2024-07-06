import { KoHo } from 'next/font/google';
import CardQuestion from './CardQuestion';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};

export default function FAQ(props: Props) {
  return (
    <section className="p-mobile md:p-section">
      <h1
        className={`${koho.className} text-primary leading-title  text-titleM md:text-title mb-[40px]`}
      >
        Perguntas frequentes
      </h1>
      <div>
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
        <CardQuestion
          question="Question x"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. "
        />
      </div>
    </section>
  );
}
