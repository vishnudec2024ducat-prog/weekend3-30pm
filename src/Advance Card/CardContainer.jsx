import React from "react";
import Card from "./Card";

const CardContainer = () => {
  const cardData = [
    {
      cardColor: "danger",
      imgAdd: "1.jpg",
      duration: "4 days",
      post: "One",
      text: "kese ho bade bhaiya mai sab theek tu kesa hai bhai ab chal kl baat katrte",
      foot: [
        { footNum: 7, footText: "Reads" },
        { footNum: 3224, footText: "views" },
        { footNum: 21, footText: "Comments" },
      ],
    },
    {
      cardColor: "warning",
      imgAdd: "2.jpg",
      duration: "1 week",
      post: "Two",
      text: "kese ho bade bhaiya mai sab theek tu kesa hai bhai ab chal kl baat katrte",
      foot: [
        { footNum: 11, footText: "Reads" },
        { footNum: 1699, footText: "views" },
        { footNum: 27, footText: "Comments" },
      ],
    },
    {
      cardColor: "success",
      imgAdd: "3.jpg",
      duration: "4 week",
      post: "Three",
      text: "kese ho bade bhaiya mai sab theek tu kesa hai bhai ab chal kl baat katrte",
      foot: [
        { footNum: 4, footText: "Reads" },
        { footNum: 1624, footText: "views" },
        { footNum: 17, footText: "Comments" },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardData.map((elm, ind) => (
          <Card key={ind} elm={elm} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
