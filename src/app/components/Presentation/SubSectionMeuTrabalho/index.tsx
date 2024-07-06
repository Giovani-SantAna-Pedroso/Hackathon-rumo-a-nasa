import React from "react";

type Props = {
  title: string;
  text: string;
};
function SubSectionsPresentation(props: Props) {
  return (
    <div className=" text-textM    mb-[20px] text-justify">
      <div>
        <h2 className="text-[24px] font-medium  text-secondary">
          {props.title}
        </h2>
        <br />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default SubSectionsPresentation;
