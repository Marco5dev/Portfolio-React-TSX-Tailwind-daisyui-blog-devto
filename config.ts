// interface Page {
//   title: string;
//   description: string;
// }

// type PageKey = "home" | "projects" | "blog" | "profile";

/**
 * this is the main meta data of the CEO
 * fill what you want with the deteails you want and what you don't want to fill just keep empty like this ("")
 */
export const meta = {
  titlePrefix: "Marco5dev", // the title prefix like (Marco5dev | Home) it's the Marco5dev
  description: "🚀 Full Stack Web Developer 🌐 | ExpressJS, Node.js, Mongoose 📦 | Building the web, one line of code at a time 💻 | React enthusiast ⚛️ ", // the main description of the website
  author: "Marco5dev", // the author name
  keywords:
    "porfolio, mark, maher, marco5dev, Marco5dev, Full, Stack, Web, developer", // keywords for the CEO of the website
  icon: "/me.jpg", // the website's icon
  link: "https://marco5dev.site", // the website link like (https://jedi-studio.com or https://www.google.com) like this
  copyright: "© 2024 Marco5dev",
  language: "EN", // the language of the website with only 2 letters
  reply_to: "contact@marco5dev.site", // an email for the reply-to meta tag
  owner: "Marco5dev", // the owner of the website
};

/**
 * this is the OG Data of the CEO
 * fill what you want with the deteails you want and what you don't want to fill just keep empty like this ("")
 */
export const ogMeta = {
  site_name: "Mark Maher", // the general name of the website
  fb_page_id: "@marco5dev", // the id of your facebook page
  email: "contact@marco5dev.site", // an email for contact
  image: "/me.jpg"
};

/**
 * this is the CEO of the pages
 * fill what you want with the deteails you want and what you don't want to fill just keep empty like this ("")
 */
export const pages = {
  home: {
    title: "Home", // the title of the page
    description: "🚀 Full Stack Web Developer 🌐 | ExpressJS, Node.js, Mongoose 📦 | Building the web, one line of code at a time 💻 | React enthusiast ⚛️ ", // the description of the page
  },
  projects: {
    title: "Projects", // the title of the page
    description: "Big Projects that i have worked on before", // the description of the page
  },
  blog: {
    title: "Blog", // the title of the page
    description: "My Small blog", // the description of the page
  },
  profile: {
    title: "Profile",
    description: "About me and everything you need to know about me",
  },
};

export const social_media = {
  facebook: "https://facebook.com/marco5dev",
  instagram: "https://instagram.com/marco5dev",
  github: "https://github.com/marco5dev",
  linkedin: "https://linkedin.com/in/marco5dev",
  twitter: "https://twitter.com/@marco5dev",
};

export const projects = [
  {
    title: "VERSE.DB",
    image: "https://og.jedi-studio.com/api/og/versedb",
    content:
      "verse.db isn't just a database, it's your universal data bridge. Designed for unmatched flexibility, security, and performance, verse.db empowers you to manage your data with ease.",
    buttons: [
      {
        name: "Docs",
        link: "https://versedb.jedi-studio.com",
      },
      {
        name: "NPM",
        link: "https://npmjs.com/package/verse.db",
      },
      {
        name: "GitHub",
        link: "https://github.com/jedi-studio/verse.db",
      },
    ],
  },
  {
    title: "JsonVerse",
    image: "https://repository-images.githubusercontent.com/683505533/32532ee0-d5d9-49b6-b7f0-e0800fb98c23",
    content: "jsonVerse is a lightweight JSON-based database package for Node.js. It provides a simple interface to store, retrieve, and manage data using JSON files.",
    buttons: [
      {
        name: "Docs",
        link: "https://jsonverse.marco5dev.site/",
      },
      {
        name: "NPM",
        link: "https://npmjs.com/package/jsonverse",
      },
      {
        name: "GitHub",
        link: "https://github.com/marco5dev/jsonverse",
      },
    ],
  },
  {
    title: "St.George",
    image: "/stgeorge.png",
    content: "A Simple website for adding the winners for a comptetion with the winners data for the past 5 years from 2018-2022 with a dashboard and this was the website that made me win the 1st Cup on \"Mahragan El Keraza Tournament For 2023\"",
    buttons: [
      {
        name: "Live Demo",
        link: "https://versedb.jedi-studio.com",
        disabled: true
      },
      {
        name: "Github",
        link: "https://github.com/marco5dev/St.George"
      },
    ],
  }
];

export const profile = {
  profile: {
    picture: "/me.jpg",
    name: "Mark Maher",
    workField: ["Front End Developer", "Back End Developer", "Data Analyst"],
    phoneNumber: "00 20 114 862 0136",
    about: [
      {
        name: "City",
        value: "Egypt",
      },
      {
        name: "Age",
        value: "16",
      },
    ],
    skills: [
      {
        name: "JavaScript",
        value: "95",
      },
      {
        name: "TypeScript",
        value: "95",
      },
      {
        name: "HTML5",
        value: "100",
      },
      {
        name: "CSS3",
        value: "70",
      },
      {
        name: "React JSX",
        value: "80",
      },
      {
        name: "NEXT.JS",
        value: "70",
      },
      {
        name: "ُExpress.JS",
        value: "100",
      },
      {
        name: "EJS",
        value: "100",
      },
      {
        name: "Tailwind CSS",
        value: "100",
      },
      {
        name: "NPM",
        value: "100",
      },
      {
        name: "BUN",
        value: "100",
      },
      {
        name: "Vercel",
        value: "100",
      },
      {
        name: "Firebase",
        value: "70",
      },
      {
        name: "Google Cloud",
        value: "60",
      },
      {
        name: "MongoDB",
        value: "80",
      },
      {
        name: "VS Code",
        value: "100",
      },
      {
        name: "Git",
        value: "100",
      },
    ],
  },
  timeline: [
    {
      time: "2021/8",
      title: "Discovering a Passion for Programming",
      content:
        "When I joined high school in my first year, I started to notice that I loved programming. I began with the CS50 course and finished it in one month. I grew increasingly interested in a full-stack career and really liked JavaScript, so I started learning more about it. I discovered Node.js and other frameworks, but I thought it was still early for me, so I focused on training with vanilla JavaScript, HTML, and CSS. I looked at websites online and tried to clone their designs with HTML and CSS.",
    },
    {
      time: "2022/3",
      title: "Exploring Full Stack Development",
      content:
        "I grew increasingly interested in a full-stack career and really liked JavaScript, so I started learning more about it. I discovered Node.js and other frameworks, but I thought it was still early for me, so I focused on training with vanilla JavaScript, HTML, and CSS. I looked at websites online and tried to clone their designs with HTML and CSS.",
    },
    {
      time: "2022/8",
      title: "Learning Node.js and Front-end Frameworks",
      content:
        "As I continued, I felt like something was missing and wasn't sure what to do, so I started learning Node.js and npm. I kept reading their documentation and learned a lot. I began using Express at first but wasn't sure what to use for the front end. I wanted something easy because using methods in HTML files was challenging, requiring AJAX imports. Eventually, I found EJS, which was easier and simpler to learn.",
    },
    {
      time: "2023/1",
      title: "Discovering React",
      content:
        "After completing some projects with EJS, a friend introduced me to React, and I decided to learn about it. I read the documentation and initially found it hard, but a YouTube channel helped me when I got stuck, making it easier. I kept trying to make projects with React, but I didn't know how to connect the front end and back end until I learned about APIs and endpoints. I created an endpoint with Express and used node-fetch in React to get data. Over time, I mastered using useState and useEffect.",
    },
    {
      time: "2023/7",
      title: "Competing and Winning",
      content:
        "Later, a competition started, and I was asked to make a website for the winners using any technology I preferred. I chose EJS and Express because it was difficult for me to create a dashboard and a login session with React. After submitting my project, I waited for a month and was thrilled to win first place. During this time, I practiced making a dashboard with React and Express until I created a simple one.",
    },
    {
      time: "2023/9",
      title: "First Job Experience",
      content:
        "Afterward, I confidently opened Mostaql to find a job. It was challenging to find my first customer, but eventually, I did. He wanted a dashboard with an interface for his website using Node.js, connected to MongoDB, with an option to change the connection link from the UI and other features. I completed it in two weeks, and the customer was happy, which was amazing for me.",
    },
    {
      time: "2023/10",
      title: "Creating and Enhancing a jsonverse Database",
      content:
        "Inspired by the competition, I created a custom, small database called Jsonverse because I didn't want to use a slow API-based database.",
    },
    {
      time: "2024/3",
      title: "Creating and Enhancing a verse.db Database",
      content:
        "After a month or two, I found some friends and we worked together on a project. I invited them to join me in creating a new database, but they were busy with other projects at first. So, I started working on it alone until they finished their commitments. We brainstormed and planned together, eventually naming it Verse.db. We published it and started a community around it, aiming to make it something big.",
    },
    {
      time: "2024/3",
      title: "Founding JEDI Studio",
      content:
        "Today, we are now JEDI Studio, and this is my story until June 26, 2024.",
    },
  ],
  cerificates: [
    {
      title: "CS50",
      description:
        "CS50 is Harvard's introductory computer science course. It covers programming basics, algorithms, data structures, web development, and more, using languages like C, Python, and JavaScript.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse laudantium libero officiis, illum ipsa illo perspiciatis non qui fuga?",
      from: "2021",
      to: "2021",
      link: "https://pll.harvard.edu/course/cs50-introduction-computer-science"
    },
  ],
};

const config = [meta, ogMeta, pages, social_media, projects, profile];

export default config;
