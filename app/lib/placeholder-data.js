const {FiCode, FiLayers, FiGlobe, FiBook, FiPenTool, FiTool, FiThermometer, FiCompass, FiCpu, FiBriefcase, FiAward} = require("react-icons/fi");

const skills = [
    "C++", "Vulkan", "JavaScript", "TypeScript", "React", "NextJS",
    "Python", "Swift", "Java", "GraphQL", "UE5", "Unity"
];

const expertiseAreas = [
    {icon: FiCode, title: "Computer Graphics", description: "Crafting immersive visual experiences"},
    {icon: FiLayers, title: "Game Engine Development", description: "Building the foundations of interactive worlds"},
    {icon: FiGlobe, title: "Full-Stack Development", description: "Creating end-to-end web and mobile solutions"},
];

const projects = [
    { title: "Advanced Game Engine", description: "A high-performance game engine built with C++ and Vulkan" },
    { title: "Portfolio", description: "A modern web app using TypeScript and NextJS" },
    { title: "Neo Template Library", description: "A highly efficient template library to complement modern C++." },
];

const timeline = [
    {
        icon: FiAward,
        title: "Master's in Computer Science",
        organization: "Graz University of Technology",
        period: "TBD"
    },
    {
        icon: FiCpu,
        title: "University tutor in object oriented programming",
        organization: "Graz University of Technology",
        period: "2024 - Now"
    },
    {
        icon: FiBriefcase,
        title: "University tutor in project management",
        organization: "Graz University of Technology",
        period: "2023 - Now"
    },
    {
        icon: FiBook,
        title: "Bachelor's in Software Engineering",
        organization: "Graz University of Technology",
        period: "2021 - Now"
    },
    {
        icon: FiThermometer,
        title: "Paramedic",
        organization: "Austrian Red Cross",
        period: "2020 - 2021"
    },
    {
        icon: FiPenTool,
        title: "Business education in Vienna",
        organization: "Business Academy Donaustadt",
        period: "2015 - 2020"
    },
];

module.exports = {
    skills,
    expertiseAreas,
    projects,
    timeline
};
