import React from "react";
import Card from "./card";

interface GridContainerProps {
  cards?: {
    title: string;
    content: string;
    image?: string;
    buttons: {
      name: string;
      link: string;
      disabled?: boolean;
    }[];
  }[];
}

const GridContainer: React.FC<GridContainerProps> = ({ cards }) => {
  return (
    <div className="container lg:mx-auto px-4 py-8">
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
        {cards ? cards.map((card, index) => (

          <div key={index} className="flex justify-center">
            <Card
              title={card.title}
              content={card.content}
              buttons={card.buttons}
              image={card.image}
            />
          </div>
        )) : <p>there is no Projects to display</p>}
      </div>
    </div>
  );
};

export default GridContainer;
