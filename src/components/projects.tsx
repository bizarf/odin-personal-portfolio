// keep clone images
import keepCloneCard from "../assets/projects/keepClone-card.webp";
import keepCloneCardSmall from "../assets/projects/keepClone-card_small.webp";
import keepCloneCardMedium from "../assets/projects/keepClone-card_medium.webp";
// personal portfolio images
import personalPortfolioCard from "../assets/projects/personalPortfolio-card.webp";
import personalPortfolioCardSmall from "../assets/projects/personalPortfolio-card_small.webp";
import personalPortfolioCardMedium from "../assets/projects/personalPortfolio-card_medium.webp";
// waldo game images
import waldoCard from "../assets/projects/waldo-card.webp";
import waldoCardSmall from "../assets/projects/waldo-card_small.webp";
import waldoCardMedium from "../assets/projects/waldo-card_medium.webp";
// memory card game images
import memoryCardGameCard from "../assets/projects/memoryCardGame-card.webp";
import memoryCardGameCardSmall from "../assets/projects/memoryCardGame-card_small.webp";
import memoryCardGameCardMedium from "../assets/projects/memoryCardGame-card_medium.webp";
// shopping cart images
import shoppingCartCard from "../assets/projects/shoppingCart-card.webp";
import shoppingCartCardSmall from "../assets/projects/shoppingCart-card_small.webp";
import shoppingCartCardMedium from "../assets/projects/shoppingCart-card_medium.webp";
// battlehsip images
import battleshipCard from "../assets/projects/battleship-card.webp";
import battleshipCardSmall from "../assets/projects/battleship-card_small.webp";
import battleshipCardMedium from "../assets/projects/battleship-card_medium.webp";
// weather app
import weatherAppCard from "../assets/projects/weatherApp-card.webp";
import weatherAppCardSmall from "../assets/projects/weatherApp-card_small.webp";
import weatherAppCardMedium from "../assets/projects/weatherApp-card_medium.webp";

// array to hold the projects for the showcase
const projects: {
    mainImage: string;
    mobileImage: string;
    tabletImage: string;
    cardTitle: string;
    cardDescription: string;
    repoLink: string;
    liveLink: string;
}[] = [
    {
        mainImage: keepCloneCard,
        mobileImage: keepCloneCardSmall,
        tabletImage: keepCloneCardMedium,
        cardTitle: "Keep Clone",
        cardDescription:
            "A full stack clone of Google Keep made with Typescript, React, Firebase (Fireauth, Firestore), Tailwind CSS, DaisyUI, and Vitest. This was my first project using Typescript, and Tailwind CSS.",
        repoLink: "https://github.com/bizarf/odin-keep-clone",
        liveLink: "https://bizarf.github.io/odin-keep-clone/",
    },
    {
        mainImage: personalPortfolioCard,
        mobileImage: personalPortfolioCardSmall,
        tabletImage: personalPortfolioCardMedium,
        cardTitle: "Personal Portfolio",
        cardDescription:
            "My personal portfolio made with Typescript, React, Tailwind CSS, and Preline UI.",
        repoLink: "https://github.com/bizarf/odin-personal-portfolio",
        liveLink: "https://bizarf.github.io/odin-personal-portfolio",
    },
    {
        mainImage: waldoCard,
        mobileImage: waldoCardSmall,
        tabletImage: waldoCardMedium,
        cardTitle: "Where's Waldo (Image Tagging App)",
        cardDescription:
            "A game app where players have to find three characters from Where's Waldo in an image. This project was made with React, and Firebase (Firestore).",
        repoLink: "https://github.com/bizarf/odin-wheres-waldo",
        liveLink: "https://bizarf.github.io/odin-wheres-waldo",
    },
    {
        mainImage: memoryCardGameCard,
        mobileImage: memoryCardGameCardSmall,
        tabletImage: memoryCardGameCardMedium,
        cardTitle: "Memory card game",
        cardDescription:
            "A game app where players try to reach the highest score without selecting the same card twice. This project was made with React. This was my first project using Vite instead of Create React App.",
        repoLink: "https://github.com/bizarf/odin-memory-card",
        liveLink: "https://bizarf.github.io/odin-memory-card/",
    },
    {
        mainImage: shoppingCartCard,
        mobileImage: shoppingCartCardSmall,
        tabletImage: shoppingCartCardMedium,
        cardTitle: "Shopping cart",
        cardDescription:
            "A shopping cart app made with React. This was my first project using React Router.",
        repoLink: "https://github.com/bizarf/odin-shopping-cart",
        liveLink: "https://bizarf.github.io/odin-shopping-cart/",
    },
    {
        mainImage: battleshipCard,
        mobileImage: battleshipCardSmall,
        tabletImage: battleshipCardMedium,
        cardTitle: "Battleship game",
        cardDescription:
            "The classic Battleship board game. This was made with Javascript, Webpack, and Jest.",
        repoLink: "https://github.com/bizarf/odin-battleship",
        liveLink: "https://bizarf.github.io/odin-battleship/",
    },
    {
        mainImage: weatherAppCard,
        mobileImage: weatherAppCardSmall,
        tabletImage: weatherAppCardMedium,
        cardTitle: "Weather app",
        cardDescription:
            "An app that tells the current weather condition on the entered city. This was made with Javascript.",
        repoLink: "https://github.com/bizarf/odin-weather-app",
        liveLink: "https://bizarf.github.io/odin-weather-app/",
    },
];

export default projects;
