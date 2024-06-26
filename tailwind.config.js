/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-phone-b":
          "radial-gradient( circle at 50% 50%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        "gradient-b":
          "gradient-b: radial-gradient( circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      height: {
        "phone-nav": "calc(100% - 4rem)",
      },
      width: {
        "blog-responsive": "95%",
        "99-p": "99%",
        "98-p": "98%",
        "95-p": "95%"
      },
      screens: {
        xsm: "300px",
        xl: "1450px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["business"],
    darkTheme: "business",
  },
};
