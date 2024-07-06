import Image from 'next/image';
import PresentationImg from '@public/place-holder-job.png';

import { KoHo } from 'next/font/google';
import SubSectionsPresentation from './SubSectionMeuTrabalho';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

type Props = {};

export default function Presentation(props: Props) {
  return (
    <section className="p-mobile md:p-section">
      <h1
        className={`${koho.className} text-titleM md:text-title  font-medium text-primary leading-[24px] md:mb-[40px] `}
      >
        Presentation title
        <br className="leading-[0px]" />
        <span className="text-[24px] text-secondary">
          Presentation Sub title
        </span>
      </h1>
      <div className="flex flex-col-reverse  md:flex-row justify-between mb-[40px]">
        <div className="md:max-w-[40vw]">
          <SubSectionsPresentation
            title="Title"
            text="

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            "
          />
          <SubSectionsPresentation
            title="Title"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           "
          />
          <SubSectionsPresentation
            title="Title"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           "
          />
          {/* <SubSectionsPresentation title="" text=""/> */}
        </div>
        <div>
          <Image
            className="w-full my-[50px]"
            width={515}
            height={631}
            src={PresentationImg}
            alt="Segunda imagem da dra.Cleide"
          />
        </div>
      </div>

      <SubSectionsPresentation
        title="Title"
        text="

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        "
      />
    </section>
  );
}
