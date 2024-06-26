import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRss,
  faFolderTree,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { profile } from "../../config";

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="h-5/6 w-1/6 lg:flex flex-col items-center justify-around xsm:hidden">
        <div className="avatar mb-5 my-4">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profile.profile.picture} />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <Link
            to={"/"}
            className={
              "text-center flex flex-col items-center bg-black p-4 hover:bg-opacity-25 rounded-lg hover:opacity-100 w-24 " +
              (location.pathname === "/"
                ? " bg-opacity-25 opcaity-100"
                : "bg-opacity-0  opacity-50")
            }
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="h-6 w-6 cursor-pointer"
            />
            Home
          </Link>

          <Link
            to={"/blog"}
            className={
              "text-center flex flex-col items-center bg-black p-4 hover:bg-opacity-25 rounded-lg hover:opacity-100 w-24 " +
              (location.pathname === "/blog"
                ? " bg-opacity-25 opcaity-100"
                : " bg-opacity-0  opacity-50")
            }
          >
            <FontAwesomeIcon
              icon={faRss}
              className="h-6 w-6 cursor-pointer gradient-icon"
            />
            Blog
          </Link>

          <Link
            to={"/projects"}
            className={
              "text-center flex flex-col items-center bg-black p-4 hover:bg-opacity-25 rounded-lg hover:opacity-100 w-24 " +
              (location.pathname === "/projects"
                ? " bg-opacity-25 opcaity-100"
                : " bg-opacity-0  opacity-50")
            }
          >
            <FontAwesomeIcon
              icon={faFolderTree}
              className="h-6 w-6 cursor-pointer gradient-icon"
            />
            Projects
          </Link>

          <Link
            to={"/profile"}
            className={
              "text-center flex flex-col items-center bg-black p-4 hover:bg-opacity-25 rounded-lg hover:opacity-100 w-24 " +
              (location.pathname === "/profile"
                ? " bg-opacity-25 opcaity-100"
                : " bg-opacity-0  opacity-50")
            }
          >
            <FontAwesomeIcon
              icon={faUser}
              className="h-6 w-6 cursor-pointer gradient-icon"
            />
            Profile
          </Link>
        </div>
        <div></div>
      </div>

      <div className={"btm-nav lg:hidden z-30"}>
        <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
          <FontAwesomeIcon icon={faHouse} className="h-6 w-6 cursor-pointer" />
          <span className="btm-nav-label">Home</span>
        </Link>
        <Link
          to={"/blog"}
          className={location.pathname === "/blog" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faRss}
            className="h-6 w-6 cursor-pointer gradient-icon"
          />
          <span className="btm-nav-label">Blog</span>
        </Link>
        <Link
          to={"/projects"}
          className={location.pathname === "/projects" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faFolderTree}
            className="h-6 w-6 cursor-pointer gradient-icon"
          />
          <span className="btm-nav-label">Projects</span>
        </Link>
        <Link
          to={"/profile"}
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faUser}
            className="h-6 w-6 cursor-pointer gradient-icon"
          />
          <span className="btm-nav-label">Profile</span>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
