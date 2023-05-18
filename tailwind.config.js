// /** @type {import('tailwindcss').Config} */
const gray_blue = "#545871";
const grayish_blue = "#9597A6";
const pinkish_beige = "#EBD0CE";
const shaded_pink = "#F7ECEB";
const blue_grey_color = "#F0F1F7";
const shade_of_gray = "#DADBE6";
const white_color = "#FFFFFF";
const shade_of_beige = "#E6DBDA";
const shade_of_red = "#B8817D";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        sidebar: gray_blue,
      },
      backgroundImage: {
        sidebarLogin: "url('./images/Signup.png')",
        sidebarSignup1: "url('./images/Signup-1.png')",
        sidebarSignup2: "url('./images/Signup.png')",
        sidevarSignup3: "url('./images/Signup-3.png')",
      },
      colors: {
        sidebar_title: grayish_blue,
        sidebar_subTitleHover: pinkish_beige,
        button_color: gray_blue,
        Pet_content: gray_blue,
        Pet_type: grayish_blue,
        border_greyish: grayish_blue,
        Favourite_greyish: grayish_blue,
        shaded_pink: shaded_pink,
        blue_grey_color: blue_grey_color,
        pinkish_beige: pinkish_beige,
        shade_of_gray: shade_of_gray,
        white_color: white_color,
        grayish_blue: grayish_blue,
        gray_blue: gray_blue,
        shade_of_beige: shade_of_beige,
        shade_of_red: shade_of_red,
      },
      fontSize: {
        xs: "8px",
        sm: "10px",
        base: "12px",
        lg: "14px",
        xl: "16px",
        "2xl": "18px",
        "3xl": "20px",
        "4xl": "24px",
        "5xl": "28px",
        "6xl": "36px",
        "7xl": "48px",
        "8xl": "45px",
      },
      lineHeight: {
        20: "20px",
        22: "22px",
        23: "23px",
        24: "24px",
        26: "26px",
        28: "28px",
        32: "32px",
        33: "33px",
        34: "34px",
        35: "35px",
        40: "40px",

        56: "56px",
      },
      fontFamily: {
        "basic-sans": ["basic sans"],
        henriette: ["HenrietteRegular"],
        basicSansRegular: ["basicSansRegular"],
      },
    },
  },
  // plugins: [require("daisyui", "flowbite/plugin")],
  // daisyui: {
  //   themes: false,
  // },
};
