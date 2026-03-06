// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // You can use HEX codes or CSS variables here
//         primary: {
//           DEFAULT: "#007bff", // Your main login button color
//           foreground: "#ffffff",
//         },
//         destructive: {
//           DEFAULT: "#ef4444",
//           foreground: "#ffffff",
//         },
//         secondary: {
//           DEFAULT: "#6b7280",
//           foreground: "#ffffff",
//         },
//         accent: {
//           DEFAULT: "#f3f4f6",
//           foreground: "#111827",
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// this is working as what i wanted but input text is invisible (fixed and final)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // This is the light, warm beige/grey from the screenshot
          DEFAULT: "#E5E5E1",
          foreground: "#1A1A1A", // Dark text for contrast
        },
        // Optional: match the darker sidebar background if needed
        // background: "#000000", 
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },

      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,jsx}"
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     DEFAULT: "#E5E5E1",
//                     foreground: "#1A1A1A",
//                 },
//                 background: {
//                     DEFAULT: "#000000",
//                     foreground: "#ffffff", // Add this
//                 },
//             },
//         },
//     },
// }