import React from "react";
import Markdown from "./markdown";

interface CardProps {
  username: string;
  userImage: string;
  coverImage?: string | null | undefined;
  date: string;
  title: string;
  body_markdown: string;
  key: number;
}

const Card: React.FC<CardProps> = ({ username, userImage, coverImage, date, title, body_markdown, key }) => {
  return (
    <div className="xsm:w-11/12 lg:w-3/4 rounded-xl shadow-2xl card-bg" key={key}>
      {coverImage ? 
          (<div className="card-image min-w-full rounded-t-xl">
            <img src={coverImage} alt="Card image" className="min-w-full rounded-t-xl" />
          </div>) 
      : <></>}
      <div className="card-content p-5">
        <div className="user flex flex-row text-start justify-start">
          <div className="avatar">
            <div className="w-14 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userImage} alt={username} />
            </div>
          </div>
          <div className="flex flex-col text-start">
            <p className="font-bold">{username}</p>
            <p className="opacity-50">Posted on {date}</p>
          </div>
        </div>
        <div className="xsm:mt-6 lg:pl-16">
          <div className="collapse collapse-arrow blog-card-content">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="title">
                <h3 className="font-extrabold xsm:text-xl max-w-full lg:text-4xl">
                  {title}
                </h3>
                <div className="py-5">
                  <hr className="border-t-2 border-primary/50" />
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <Markdown content={body_markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;