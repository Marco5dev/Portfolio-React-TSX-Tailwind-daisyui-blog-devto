import SideBar from "../components/Header";
import Head from "../components/Head";
import TypingText from "../components/TypingText";
import { profile, social_media } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const facebookLink = social_media.facebook
    ? social_media.facebook
    : "https://facebook.com/marco5dev";
  const instagramLink = social_media.instagram
    ? social_media.instagram
    : "https://instagram.com/marco5dev";
  const githubLink = social_media.github
    ? social_media.github
    : "https://github.com/marco5dev";
  const linkedinLink = social_media.linkedin
    ? social_media.linkedin
    : "https://linkedin.com/in/marco5dev";
  const twitterLink = social_media.twitter
    ? social_media.twitter
    : "https://twitter.com/marco5dev";

  return (
    <main className={"flex lg:items-center"}>
      <Head />
      <SideBar />
      <section className="main">
        <h1 className="xsm:text-lg lg:text-2xl">
          This is{" "}
          <span className="xsm:text-3xl lg:text-7xl font-bold">{profile.profile.name}</span>
        </h1>
        <h2 className="xsm:text-xl lg:text-3xl">
          I'm a{" "}
          <span>
            <TypingText
              texts={profile.profile.workField}
              speed={180}
              pause={1300}
            />
          </span>
        </h2>
        <div className="social_media flex flex-row gap-6 mt-8">
          {facebookLink !== "" ? (
            <a href={facebookLink}>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white opacity-50 hover:opacity-100 xsm:text-3xl lg:text-5xl"
              />
            </a>
          ) : (
            <></>
          )}
          {instagramLink !== "" ? (
            <a href={instagramLink}>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white opacity-50 hover:opacity-100 xsm:text-3xl lg:text-5xl"
              />
            </a>
          ) : (
            <></>
          )}
          {githubLink !== "" ? (
            <a href={githubLink}>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white opacity-50 hover:opacity-100 xsm:text-3xl lg:text-5xl"
              />
            </a>
          ) : (
            <></>
          )}
          {linkedinLink !== "" ? (
            <a href={linkedinLink}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white opacity-50 hover:opacity-100 xsm:text-3xl lg:text-5xl"
              />
            </a>
          ) : (
            <></>
          )}
          {twitterLink !== "" ? (
            <a href={twitterLink}>
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="text-white opacity-50 hover:opacity-100 xsm:text-3xl lg:text-5xl"
              />
            </a>
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
