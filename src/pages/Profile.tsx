import SideBar from "../components/Header";
import Head from "../components/Head";
import TypingText from "../components/TypingText";
import { social_media, profile } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faPhone } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const facebookLink = social_media.facebook;
  const instagramLink = social_media.instagram;
  const githubLink = social_media.github;
  const linkedinLink = social_media.linkedin;
  const twitterLink = social_media.twitter;
  const PhoneNum = profile.profile.phoneNumber;

  return (
    <main className={"flex lg:items-center"}>
      <Head />
      <SideBar />
      <section className="profile">
        <h2 className="text-4xl title font-semibold p-10">Profile</h2>
        <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-start content-start items-start text-center h-full gap-5">
          <div className="profile_card">
            <div className="avatar mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profile.profile.picture} />
              </div>
            </div>
            <h1 className="text-2xl">
              <span className="text-3xl font-bold">{profile.profile.name}</span>
            </h1>
            <h2 className="text-xl">
              I'm a{" "}
              <span>
                <TypingText
                  texts={profile.profile.workField}
                  speed={180}
                  pause={1300}
                />
              </span>
            </h2>
            <a href="https://jedi-studio.com" className="link text-blue-400 my-3 font-bold">@jedi-studio</a>
            <div className="social_media flex flex-row gap-4 text-xl">
              {facebookLink !== "" ? (
                <a href={facebookLink}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-white opacity-50 hover:opacity-100"
                  />
                </a>
              ) : (
                <></>
              )}
              {instagramLink !== "" ? (
                <a href={instagramLink}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white opacity-50 hover:opacity-100"
                  />
                </a>
              ) : (
                <></>
              )}
              {githubLink !== "" ? (
                <a href={githubLink}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white opacity-50 hover:opacity-100"
                  />
                </a>
              ) : (
                <></>
              )}
              {linkedinLink !== "" ? (
                <a href={linkedinLink}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white opacity-50 hover:opacity-100"
                  />
                </a>
              ) : (
                <></>
              )}
              {twitterLink !== "" ? (
                <a href={twitterLink}>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="text-white opacity-50 hover:opacity-100"
                  />
                </a>
              ) : (
                <></>
              )}
            </div>
            <div className="about">
              <h2 className="text-xl title font-semibold">About</h2>
              <p className="phone">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faPhone} /> Phone :
                </span>{" "}
                {PhoneNum}
              </p>
              {profile.profile.about.map(({ name, value }) => (
                <p className="text-lg">
                  <span className="font-bold">{name}:</span> {value}
                </p>
              ))}
            </div>
            <div className="skills">
              <h2 className="text-xl title font-semibold mt-3">Skills</h2>
              <div className="item flex flex-col gap-3 text-left">
                {profile.profile.skills.map(({ name, value }) => (
                  <>
                    {name}
                    <progress
                      className="progress progress-primary xsm:w-64 lg:w-96"
                      value={value}
                      max="100"
                    ></progress>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="profile_card">
            <h2 className="text-2xl title font-semibold">Timeline</h2>
            <div className="flex justify-start items-start content-start mx-3">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {profile.timeline.map(({ time, title, content }) => (
                  <li className="flex items-start">
                    <div className="timeline-middle mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end text-start mb-10">
                      <time className="font-mono italic">{time}</time>
                      <div className="text-lg font-black">{title}</div>
                      <p>{content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="profile_card mb-5">
            <h2 className="text-2xl title font-semibold">Cerificates</h2>
            <ul className="ceriticates_container grid grid-cols-1 gap-3 mt-5 overflow-auto">
              {profile.cerificates.map(
                ({ title, description, from, to, link }) => (
                  <li className="item text-left m-5 p-3 mt-0 rounded-xl bg-primary">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p>{description}</p>
                    <ul className="timeline">
                      <li>
                        <div className="timeline-start">{from}</div>
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="timeline-end timeline-box">From</div>
                        <hr />
                      </li>
                      <li>
                        <hr />
                        <div className="timeline-start">{to}</div>
                        <div className="timeline-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="timeline-end timeline-box">To</div>
                      </li>
                    </ul>
                    {link !== "" ? (
                      <div className="flex justify-items-end items-end content-end flex-row-reverse">
                        <a className="link text-2xl" href={link}>
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
