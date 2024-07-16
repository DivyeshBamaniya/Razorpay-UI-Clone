/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily :{
        mullish : ["mulish", "sans-serif"]
      },
      colors : {
          deepblue : "#02042a",
          lightblue : "#2b84ea",
          lightBlue300 : "#4b94ed",
          lightBlue500 : "#0b72e7",
          greenLight : "#61cea6",
          grayText : "#818597",
          lightGray : "#e2e2e2",
          grayBlue  : "#344a6c",
          deepblueHead  : "#162f56",
          gray2  : "#525a76",

      }
    },
  },
  plugins: [],
}

