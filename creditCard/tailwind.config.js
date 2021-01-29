const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //自定義色彩名稱
        primary: "#6da4d8",
        belstarYellow: "#ffdb57",
        belstarRed: "#ff3860",
        belstarGreen: "#23cf60",
        belstarGray: "#6b7280",
        cardBK: "#f7faff",
        ruri: "#3b82f6",
        title: "#737A87",
        font: "#6B7280"
      },
      // 自定義字型
      fontFamily: {
        // 預設字型
        sans: ["EUDC", "simsun", "Helvetica", "Arial"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        //文字分散對齊
        ".text-dispersion": {
          textJustify: "inter-character",
          textAlignLast: "justify",
          textAlign: "text-justify"
        },
        //直向排列
        ".vertical": {
          writingMode: "vertical-rl"
        },
        //寬度20cm，A4為21cm，左右間距各留0.5cm
        ".w-20cm": {
          width: "20cm"
        }
      };
      //responsive，hover都加上自定義css
      addUtilities(newUtilities, ["responsive", "hover"]);
    })
  ]
};
