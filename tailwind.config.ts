import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        translateRotate: 'translateRotate 1s ease-in-out forwards', 
        translateRotateSecond: 'translateRotateSecond 1s ease-in-out forwards', 
        translateBackRotate: 'translateBackRotate 1s ease-in-out forwards', 
        translateBackRotateSecond: 'translateBackRotateSecond 1s ease-in-out forwards', 
      },
      keyframes: {
        translateRotate: {
          '0%': {
            transform: 'translateY(0) translateX(-50%)', 
          },
          '50%': {
            transform: 'translateY(0.45rem) translateX(-50%) rotate(0deg)', 
          },
          '100%': {
            transform: 'translateY(0.45rem) translateX(-50%) rotate(45deg)', 
          },
        },   
        translateRotateSecond: {
          '0%': {
            transform: 'translateY(0) translateX(-50%)', 
          },
          '50%': {
            transform: 'translateY(-0.45rem) translateX(-50%) rotate(0deg)', 
          },
          '100%': {
            transform: 'translateY(-0.45rem) translateX(-50%) rotate(-45deg)', 
          },
        },    
        translateBackRotate: {
          '0%': {
            transform: 'translateY(0.45rem) translateX(-50%) rotate(45deg)', 
          },
          '50%': {
            transform: 'translateY(0.45rem) translateX(-50%) rotate(0deg)', 
          },
          '100%': {
            transform: 'translateY(0) translateX(-50%)', 
          },
        },   
        translateBackRotateSecond: {
          '100%': {
            transform: 'translateY(0) translateX(-50%)', 
          },
          '50%': {
            transform: 'translateY(-0.45rem) translateX(-50%) rotate(0deg)', 
          },
          '0%': {
            transform: 'translateY(-0.45rem) translateX(-50%) rotate(-45deg)', 
          },
        },  
      }
    },
  },
  plugins: [],
};


export default config;
