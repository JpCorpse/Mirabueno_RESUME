/* eslint-disable no-unused-vars */
import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "2 years",
    details:
      "I make a videos or gameplay about the game that I'm playing which is Mobile Legend, I uploaded my videos on my social media platform such as Tiktok and Youtube.",
  },
  {
    year: 2020,
    title: "(Beauty Products Seller) La Bonita Cosmetics by Anafara",
    duration: "3 Months",
    details: "Selling some beauty products for OJT task",
  },
  {
    year: 2024,
    title: "Developer(Intern)",
    duration: "On-going",
    details:
      "Making website using reactjs, nodejs, mongodb, etc. doing some front-end and back-end work.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
