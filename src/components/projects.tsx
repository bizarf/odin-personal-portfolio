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
// tictagtoe app
import ticTacToeCard from "../assets/projects/tictactoe-card.webp";
import ticTacToeCardSmall from "../assets/projects/tictactoe-card_small.webp";
import ticTacToeCardMedium from "../assets/projects/tictactoe-card_medium.webp";
// members only
import membersOnlyCard from "../assets/projects/members_only-card.webp";
import membersOnlyCardSmall from "../assets/projects/members_only-card_small.webp";
import membersOnlyCardMedium from "../assets/projects/members_only-card_medium.webp";
// blog api
import blogApiCard from "../assets/projects/blogApi-card.webp";
import blogApiCardSmall from "../assets/projects/blogApi-card_small.webp";
import blogApiCardMedium from "../assets/projects/blogApi-card_medium.webp";
// odin book
import odinBookCard from "../assets/projects/odinBook-card.webp";
import odinBookCardSmall from "../assets/projects/odinBook-card-small.webp";
import odinBookCardMedium from "../assets/projects/odinBook-card-medium.webp";
// pomotimer
import pomoTimerCard from "../assets/projects/pomotimer-card.webp";
import pomoTimerCardSmall from "../assets/projects/pomotimer-card_small.webp";
import pomoTimerCardMedium from "../assets/projects/pomotimer-card_medium.webp";
// retrogamedb
import retroGameDbCard from "../assets/projects/retrogamedb-card.webp";
import retroGameDbCardSmall from "../assets/projects/retrogamedb-card_small.webp";
import retroGameDbCardMedium from "../assets/projects/retrogamedb-card_medium.webp";

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
        mainImage: retroGameDbCard,
        mobileImage: retroGameDbCardSmall,
        tabletImage: retroGameDbCardMedium,
        cardTitle: "RetroGame DB",
        cardDescription:
            "A full stack retro video game themed database website with REST API made in FastAPI. This was made using Python, FastAPI, MySQL, TypeScript, React, and Tailwind CSS. ",
        repoLink: "https://github.com/bizarf/retrogame-db-python-api",
        liveLink: "https://bizarf.github.io/retrogame-db-client",
    },
    {
        mainImage: odinBookCard,
        mobileImage: odinBookCardSmall,
        tabletImage: odinBookCardMedium,
        cardTitle: "Odin Book",
        cardDescription:
            "A full stack social media app based on Facebook. This was made using TypeScript, React, Tailwind CSS, MongoDB, Express JS, and Playwright. This was the final project for The Odin Project. ",
        repoLink: "https://github.com/bizarf/odin-book-client",
        liveLink: "https://bizarf.github.io/odin-book-client/",
    },
    {
        mainImage: blogApiCard,
        mobileImage: blogApiCardSmall,
        tabletImage: blogApiCardMedium,
        cardTitle: "Blog API",
        cardDescription:
            "A full stack REST API project which would be used for a blog client and blog CMS. This was made using TypeScript, React, Tailwind CSS, MongoDB, Express JS, and API testing done with Mocha, Chai, and Supertest. ",
        repoLink: "https://github.com/bizarf/odin-blog-api",
        liveLink: "https://bizarf.github.io/odin-blog-client/",
    },
    {
        mainImage: pomoTimerCard,
        mobileImage: pomoTimerCardSmall,
        tabletImage: pomoTimerCardMedium,
        cardTitle: "PomoTimer",
        cardDescription:
            "A pomodoro timer inspired by PomoFocus. This was made with React, and TypeScript. This makes use of the Notification API, and has LocalStorage support. ",
        repoLink: "https://github.com/bizarf/pomodoro-timer",
        liveLink: "https://bizarf.github.io/pomodoro-timer/",
    },
    // {
    //     mainImage: membersOnlyCard,
    //     mobileImage: membersOnlyCardSmall,
    //     tabletImage: membersOnlyCardMedium,
    //     cardTitle: "Members only club",
    //     cardDescription:
    //         "A secret club house app, where people can leave messages and not have their name shown to guests. This was made with Express, Pug, Passport JS, and Mongoose. ",
    //     repoLink: "https://github.com/bizarf/odin-members-only",
    //     liveLink: "https://odin-members-only-z4hw.onrender.com/",
    // },
    {
        mainImage: keepCloneCard,
        mobileImage: keepCloneCardSmall,
        tabletImage: keepCloneCardMedium,
        cardTitle: "Keep Clone",
        cardDescription:
            "A full stack clone of Google Keep made with TypeScript, React, Firebase (Fireauth, Firestore), Tailwind CSS, DaisyUI, and Vitest. This was my first project using TypeScript, and Tailwind CSS.",
        repoLink: "https://github.com/bizarf/odin-keep-clone",
        liveLink: "https://bizarf.github.io/odin-keep-clone/",
    },
    // {
    //     mainImage: personalPortfolioCard,
    //     mobileImage: personalPortfolioCardSmall,
    //     tabletImage: personalPortfolioCardMedium,
    //     cardTitle: "Personal Portfolio",
    //     cardDescription:
    //         "My personal portfolio made with TypeScript, React, Tailwind CSS, and Preline UI.",
    //     repoLink: "https://github.com/bizarf/odin-personal-portfolio",
    //     liveLink: "https://bizarf.github.io/odin-personal-portfolio",
    // },
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
    {
        mainImage: ticTacToeCard,
        mobileImage: ticTacToeCardSmall,
        tabletImage: ticTacToeCardMedium,
        cardTitle: "Tic Tac Toe app",
        cardDescription: "A tic tac toe game created in Javascript.",
        repoLink: "https://github.com/bizarf/odin-tic-tac-toe",
        liveLink: "https://bizarf.github.io/odin-tic-tac-toe/",
    },
];

export default projects;
