/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BackgroundItem = ({
  name,
  Fname,
  contact,
  email,
  add,
  date,
  age,
  eduBack,
  eduBack1,
  eduBack2,
  eduBack3,
  comLi,
  techKnow,
  language,
}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-2 ml-4 ">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {name}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{Fname}</span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{contact}</p>
        <p className="my-2 text-base font-normal text-stone-500">{email}</p>
        <p className="my-2 text-base font-normal text-stone-500">{add}</p>
        <p className="my-2 text-base font-normal text-stone-500">{date}</p>
        <p className="my-2 text-base font-normal text-stone-500">{age}</p>
        <p className="my-2 text-base font-normal text-stone-500">{eduBack}</p>
        <p className="my-2 text-base font-normal text-stone-500">{eduBack1}</p>
        <p className="my-2 text-base font-normal text-stone-500">{eduBack2}</p>
        <p className="my-2 text-base font-normal text-stone-500">{eduBack3}</p>
        <p className="my-3 text-base font-normal text-stone-500">{comLi}</p>
        <p className="my-3 text-base font-normal text-stone-500">{techKnow}</p>
        <p className="my-3 text-base font-normal text-stone-500">{language}</p>
      </li>
    </ol>
  );
};

export default BackgroundItem;
