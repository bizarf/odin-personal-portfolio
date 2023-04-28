import placeholderCard from "../assets/projects/placeholder-card.png";
import placeholderCardSmall from "../assets/projects/placeholder-card_small.png";
import placeholderCardMedium from "../assets/projects/placeholder-card_medium.png";

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
        mainImage: placeholderCard,
        mobileImage: placeholderCardSmall,
        tabletImage: placeholderCardMedium,
        cardTitle: "Keep Clone",
        cardDescription: "A Google Keep clone",
        repoLink: "https://github.com/bizarf/odin-keep-clone",
        liveLink: "https://bizarf.github.io/odin-keep-clone/",
    },
    {
        mainImage: placeholderCard,
        mobileImage: placeholderCardSmall,
        tabletImage: placeholderCardMedium,
        cardTitle: "Personal Portfolio",
        cardDescription: "My personal portfolio made with React",
        repoLink: "https://github.com/bizarf/odin-personal-portfolio",
        liveLink: "https://bizarf.github.io/odin-personal-portfolio",
    },
    {
        mainImage: placeholderCard,
        mobileImage: placeholderCardSmall,
        tabletImage: placeholderCardMedium,
        cardTitle: "Test",
        cardDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam cum voluptatum sit laborum nesciunt, quaerat, ad facere dolorum aperiam quisquam qui laboriosam soluta minus cumque hic numquam saepe dignissimos?",
        repoLink: "https://github.com/bizarf?tab=repositories",
        liveLink: "https://github.com/bizarf?tab=repositories",
    },
    {
        mainImage: placeholderCard,
        mobileImage: placeholderCardSmall,
        tabletImage: placeholderCardMedium,
        cardTitle: "Test",
        cardDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam cum voluptatum sit laborum nesciunt, quaerat, ad facere dolorum aperiam quisquam qui laboriosam soluta minus cumque hic numquam saepe dignissimos?",
        repoLink: "https://github.com/bizarf?tab=repositories",
        liveLink: "https://github.com/bizarf?tab=repositories",
    },
];

export default projects;
