/* eslint-disable @typescript-eslint/no-unused-vars */
import { meta, pages, ogMeta } from "../../config";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

const getPageTitle = (pathname: string): string => {
  const key =
    pathname === "/" ? "home" : (pathname.slice(1) as keyof typeof pages);
  return pages[key]?.title || "Home";
};
const getPageDescription = (pathname: string): string => {
  const key =
    pathname === "/" ? "home" : (pathname.slice(1) as keyof typeof pages);
  return pages[key]?.description || "";
};

function Head() {
  const location = useLocation();
  const titlePrefix = meta.titlePrefix ? meta.titlePrefix : "Marco5dev";
  const title = getPageTitle(location.pathname);
  const ogDescription = getPageDescription(location.pathname);
  const icon = meta.icon ? meta.icon : "";
  const keyWords = meta.keywords ? meta.keywords : "";
  const author = meta.author ? meta.author : "Marco5dev";
  const link = meta.link ? meta.link : "https://marco5dev.site";
  const copyright = meta.copyright ? meta.copyright : "© 2024 Marco5dev";
  const language = meta.language ? meta.language : "EN";
  const reply_to = meta.reply_to ? meta.reply_to : "contact@marco5dev.site";
  const owner = meta.owner ? meta.owner : "Marco5dev";
  const site_name = ogMeta.site_name ? ogMeta.site_name : "Marco5dev";
  const fb_page_id = ogMeta.fb_page_id ? ogMeta.fb_page_id : "";
  const email = ogMeta.email ? ogMeta.email : "contact@marco5dev.site";
  const ogImage = ogMeta.image ? ogMeta.image : "https://marco5dev.site/images/logo.png";

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{`${titlePrefix} | ${title}`}</title>

      {/* Favicons, meta */}
      <link rel="apple-touch-icon" sizes="180x180" href={icon} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon} />
      <link rel="icon" type="image/svg+xml" href={icon} />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href={icon}
        color="#000000"
      />
      {/* META DATA */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content={titlePrefix} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="apple-mobile-web-app-title" content={titlePrefix} />
      <meta property="msapplication-TileColor" content="#000000" />
      <meta property="twitter:card" content="summary_large_image" />

      {/*  MAIN META TAGS  */}
      <meta name="keywords" content={keyWords} />
      <meta name="title" content={title} />
      <meta name="description" content={ogDescription} />
      <meta name="copyright" content={copyright} />
      <meta name="language" content={language} />
      <meta name="author" content={author} />
      <meta name="designer" content="Marco5dev" />
      <meta name="reply-to" content={reply_to} />
      <meta name="owner" content={owner} />
      <meta name="url" content={`${link}${location.pathname}`} />

      {/*  MAIN META TAGS  */}
      <meta property="keywords" content={keyWords} />
      <meta property="title" content={title} />
      <meta property="description" content={ogDescription} />
      <meta property="copyright" content={copyright} />
      <meta property="language" content={language} />
      <meta property="author" content={author} />
      <meta property="designer" content="Marco5dev" />
      <meta property="reply-to" content={reply_to} />
      <meta property="owner" content={owner} />
      <meta property="url" content={`${link}${location.pathname}`} />

      {/*  OG META TAGS WITH NAME*/}
      <meta name="og:title" content={title} />
      <meta name="og:type" content="Portfolio" />
      <meta name="og:url" content={`${link}${location.pathname}`} />
      <meta name="og:site_name" content={site_name} />
      <meta name="og:description" content={ogDescription} />
      <meta name="fb:page_id" content={fb_page_id} />
      <meta name="og:email" content={email} />
      <meta name="og:author" content={author} />
      <meta name="og:image" content={ogImage} />

      {/*  OG META TAGS WITH NAME*/}

      <meta property="og:title" content={title} />
      <meta property="og:type" content="portfolio" />
      <meta property="og:url" content={`${link}${location.pathname}`} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:description" content={ogDescription} />
      <meta property="fb:page_id" content={fb_page_id} />
      <meta property="og:email" content={email} />
      <meta property="og:author" content={author} />
      <meta property="og:image" content={ogImage} />

      {/* TWITTER OG */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:description" content={ogDescription} />
    </Helmet>
  );
}

export default Head;
