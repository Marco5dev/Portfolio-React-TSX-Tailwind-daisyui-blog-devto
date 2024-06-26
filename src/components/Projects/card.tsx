import React from "react";

interface CardProps {
  title: string;
  content: string;
  image?: string;
  buttons: {
    name: string;
    link: string;
    disabled?: boolean;
  }[];
}

const Card: React.FC<CardProps> = ({ title, content, buttons, image }) => {
  return (
    <div className="card card-width bg-base-100 shadow-2xl rounded-2xl">
      {image !== undefined ? (
        <>
          <figure>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
        </>
      ) : (
        <></>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-center mt-5">
          {buttons.map((button) => (
            <button
              key={button.name}
              className="btn btn-primary rounded-2xl"
              onClick={() => {
                if (!button.disabled) {
                  window.location.href = button.link;
                }
              }}
              disabled={button.disabled ? true : false}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
