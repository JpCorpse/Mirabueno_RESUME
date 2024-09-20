/* eslint-disable no-unused-vars */
import React from "react";
import BgroundItem from "./BgroundItem";

const data = [
  {
    name: "Full Name:",
    Fname: "John Patrick Viterbo Mirabueno",
  },
  {
    name: "Contact Number:",
    contact: "099-4723-1250",
  },
  {
    name: "Email Address:",
    email: "johnpatrickmirabueno191@gmail.com",
  },
  {
    name: "Address:",
    add: "Area Ibaba Kaingin 2, Brgy.Pansol, Quezon City",
  },
  {
    name: "Date of Birth:",
    date: "January 21, 2003",
  },
  {
    name: "Age:",
    age: "21 years old",
  },
  {
    name: "Educational Background:",
    eduBack: "Primary School: Balara Elementary School",
    eduBack1: "Secondary School: Balara High School",
    eduBack2: "Senior High School: Gates Professional School",
    eduBack3: "College: ICCT Colleges (Fourt Year College 'Graduating')",
  },
  {
    name: "Relative Skills:",
    comLi:
      "Computer Literate(Microsoft Office - Microsoft Word, Excel, & PowerPoint)",
    techKnow: "Technical Knowledge about Computer Hardware and Software",
    language: "Computer Language: Reactjs, NodeJs, MongoDb, Python, Html, C#",
  },
];

const Background = () => {
  return (
    <div id="background" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Background
      </h1>
      {data.map((item, idx) => (
        <BgroundItem
          key={idx}
          name={item.name}
          Fname={item.Fname}
          contact={item.contact}
          email={item.email}
          add={item.add}
          date={item.date}
          age={item.age}
          eduBack={item.eduBack}
          eduBack1={item.eduBack1}
          eduBack2={item.eduBack2}
          eduBack3={item.eduBack3}
          comLi={item.comLi}
          techKnow={item.techKnow}
          language={item.language}
        />
      ))}
    </div>
  );
};

export default Background;
