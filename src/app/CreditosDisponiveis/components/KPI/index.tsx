import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  bgString: string;
};

function KPI(props: Props) {
  return (
    <div className={` rounded-md  p-4 ${props.bgString}`}>
      <p className="font-light ">{props.title}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default KPI;
