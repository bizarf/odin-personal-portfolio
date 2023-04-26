import React from "react";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";

const App = () => {
    return (
        <div>
            <NavBar />
            <Splash />
            <AboutMe />
            <ProjectShowcase />
            <ContactMe />
        </div>
    );
};

export default App;
