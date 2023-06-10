import localFont from "next/font/local";

export const grtskexa = localFont({
  src: [
    {
      path: "../../public/assets/fonts/GrtskExa-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/GrtskExa-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GrtskExa-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-grtskexa",
});

export const grtskpeta = localFont({
  src: [
    {
      path: "../../public/assets/fonts/GrtskPeta-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/GrtskPeta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GrtskPeta-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-grtskpeta",
});

export const plantin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/PlantinMTProLight.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/PlantinMTProRg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/PlantinMTProSmBd.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/assets/fonts/PlantinMTProBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-plantin",
});